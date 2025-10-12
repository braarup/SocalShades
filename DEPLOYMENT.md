# SocalShades Website Deployment Guide

## Quick Setup Instructions

### 1. Install Node.js
Download and install Node.js from https://nodejs.org/ (choose LTS version)

### 2. Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

### 3. Set Up Environment Variables
Copy `.env.example` to `.env.local` and fill in your email settings:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
BUSINESS_EMAIL=info@socalshades.com
```

### 4. Run Development Server
```bash
npm run dev
```
Visit http://localhost:3000 to see the website.

## Deploy to Vercel

### Option 1: GitHub Integration (Recommended)
1. Push code to GitHub repository
2. Go to https://vercel.com and sign up/login
3. Click "New Project" and import your GitHub repository
4. Add environment variables in Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `BUSINESS_EMAIL`
5. Deploy!

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

## Email Setup for Forms

The retailer signup form sends emails automatically. You need:

1. **Gmail Account** with 2-factor authentication enabled
2. **App Password** (not your regular Gmail password):
   - Go to Gmail → Settings → Security → 2-Step Verification
   - Click "App passwords" → Generate password for "Mail"
   - Use this generated password as `EMAIL_PASSWORD`

## Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Domains" tab
3. Add your custom domain (e.g., socalshades.com)
4. Follow DNS setup instructions

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_USER` | Gmail address for sending emails | `noreply@yourdomain.com` |
| `EMAIL_PASSWORD` | Gmail app password | `abcd efgh ijkl mnop` |
| `BUSINESS_EMAIL` | Where retailer applications are sent | `info@socalshades.com` |

## Performance Optimization

The website is already optimized with:
- ✅ Next.js 14 App Router
- ✅ Automatic image optimization
- ✅ CSS optimization with Tailwind
- ✅ TypeScript for reliability
- ✅ Mobile-first responsive design

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify environment variables are set correctly
3. Ensure Node.js version 18+ is installed
4. Check that email credentials are valid

## Website Features

✅ **Homepage** - Company overview and product showcase
✅ **Store Locator** - Find retail locations with search
✅ **Retailer Signup** - Complete application form with email notifications
✅ **Contact Page** - Business information and contact form
✅ **Responsive Design** - Works on all devices
✅ **Email Integration** - Automatic form processing
✅ **SEO Optimized** - Meta tags and structured content

## Next Steps

After deployment, consider adding:
- Google Analytics tracking
- Contact form API endpoint
- Real product database integration
- Payment processing for wholesale orders
- Admin dashboard for managing retailers
- Blog/news section