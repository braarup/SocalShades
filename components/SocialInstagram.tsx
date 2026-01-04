'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface InstagramPost {
  id: string
  caption: string
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM' | string
  mediaUrl: string
  thumbnailUrl: string
  permalink: string
  timestamp: string
}

export default function SocialInstagram() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchPosts() {
      try {
        const res = await fetch('/api/instagram')
        if (!res.ok) {
          throw new Error('Failed to load Instagram feed')
        }
        const data = await res.json()
        if (!cancelled) {
          setPosts(data.posts || [])
        }
      } catch (err) {
        if (!cancelled) {
          setError('Unable to load Instagram posts right now.')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchPosts()

    return () => {
      cancelled = true
    }
  }, [])

  if (!loading && (!posts || posts.length === 0)) {
    // If nothing to show, hide the section entirely instead of empty chrome
    return null
  }

  return (
    <section id="social" className="py-16 bg-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="section-title">
              Social / <span className="text-accent">Instagram</span>
            </h2>
            <p className="section-sub mt-4">
              Live snapshots from our Instagram. Only posts tagged with
              {' '}
              <span className="font-semibold text-accent">#website</span>
              {' '}
              appear here.
            </p>
          </div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm md:text-base self-start md:self-auto"
          >
            View on Instagram
          </a>
        </div>

        {loading && (
          <p className="text-muted text-sm">Loading the latest posts…</p>
        )}

        {error && !loading && (
          <p className="text-muted text-sm">{error}</p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-accent/60 transition-colors"
              >
                <div className="relative w-full aspect-[4/5] bg-black">
                  <Image
                    src={post.thumbnailUrl}
                    alt={post.caption ? post.caption.slice(0, 100) : 'Instagram post from So‑Cal Shades'}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                  />
                  {post.mediaType === 'VIDEO' && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full">
                      Video
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-xs text-muted line-clamp-2 leading-snug">
                    {post.caption || 'View this post on Instagram'}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
