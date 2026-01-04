import { NextResponse } from 'next/server'

// Simple in-memory cache (per server instance)
let cachedPosts: any[] | null = null
let cacheTimestamp = 0
const CACHE_TTL_MS = 1000 * 60 * 5 // 5 minutes

const INSTAGRAM_API_URL = 'https://graph.instagram.com/me/media'

export async function GET() {
  try {
    const now = Date.now()

    if (cachedPosts && now - cacheTimestamp < CACHE_TTL_MS) {
      return NextResponse.json({ posts: cachedPosts, source: 'cache' }, { status: 200 })
    }

    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Instagram access token not configured' },
        { status: 500 }
      )
    }

    const url = new URL(INSTAGRAM_API_URL)
    url.searchParams.set(
      'fields',
      'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp'
    )
    url.searchParams.set('access_token', accessToken)
    url.searchParams.set('limit', '12')

    const res = await fetch(url.toString(), { next: { revalidate: 300 } })

    if (!res.ok) {
      const errorText = await res.text()
      console.error('Instagram API error:', res.status, errorText)
      return NextResponse.json({ error: 'Failed to fetch Instagram posts' }, { status: 502 })
    }

    const data = await res.json()

    const rawPosts: any[] = data.data || []

    const filtered = rawPosts.filter((post) => {
      const caption: string = post.caption || ''
      return caption.toLowerCase().includes('#website')
    })

    const normalized = filtered.map((post) => ({
      id: post.id,
      caption: post.caption || '',
      mediaType: post.media_type,
      mediaUrl: post.media_url,
      thumbnailUrl: post.thumbnail_url || post.media_url,
      permalink: post.permalink,
      timestamp: post.timestamp,
    }))

    cachedPosts = normalized
    cacheTimestamp = now

    return NextResponse.json({ posts: normalized, source: 'api' }, { status: 200 })
  } catch (error) {
    console.error('Error in /api/instagram:', error)
    return NextResponse.json({ error: 'Unexpected error fetching Instagram posts' }, { status: 500 })
  }
}
