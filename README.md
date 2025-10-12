# SocalShades Wholesale Website

A modern, responsive website for SocalShades wholesale business built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Modern Homepage** - Showcase products and services with compelling design
- 🕶️ **Product Catalog** - Display flagship sunglasses and accessories
- 🏪 **Store Locator** - Help customers find retail locations
- 📝 **Retailer Signup** - Complete form for potential business partners
- 📱 **Responsive Design** - Optimized for all devices
- ⚡ **Fast Performance** - Built on Next.js 14 with modern optimizations
- 🎨 **Custom Design** - Based on the original SocalShades branding

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Nodemailer
- **Deployment:** Vercel
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd socalshades-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
BUSINESS_EMAIL=info@socalshades.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                      # Next.js App Router
│   ├── api/                 # API routes
│   ├── contact/             # Contact page
│   ├── retailer-signup/     # Retailer application form
│   ├── store-locator/       # Store finder
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Products.tsx
│   └── ...
├── public/                  # Static assets
└── ...config files
```

## Pages

- **Homepage (/)** - Company overview, products, and services
- **Store Locator (/store-locator)** - Find retail locations
- **Retailer Signup (/retailer-signup)** - Partner application form
- **Contact (/contact)** - Contact information and quick form

## Features in Detail

### Store Locator
- Search by name, address, or city
- Store details with contact information
- Direct links to Google Maps and phone calls

### Retailer Form
- Comprehensive business information collection
- Email notifications to business team
- Confirmation emails to applicants
- Form validation and error handling

### Responsive Design
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interfaces
- Fast loading times

## Email Configuration

The retailer signup form uses Nodemailer to send emails. Configure these environment variables:

```env
EMAIL_USER=your-email@gmail.com          # Gmail account
EMAIL_PASSWORD=your-app-password         # Gmail app password (not regular password)
BUSINESS_EMAIL=info@socalshades.com     # Where to send applications
```

**Gmail Setup:**
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password in Gmail settings
3. Use the App Password as EMAIL_PASSWORD

## Deployment on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD` 
   - `BUSINESS_EMAIL`
4. Deploy!

## Customization

### Colors
The brand colors are defined in `tailwind.config.js`:
```js
colors: {
  'accent': '#ff4fa3',      // Primary pink
  'accent-2': '#ff8bd0',    // Lighter pink
  'accent-dark': '#e33e90', // Darker pink
}
```

### Content
- Update store data in `app/store-locator/page.tsx`
- Modify product information in `components/Products.tsx`
- Change contact details in `app/contact/page.tsx`

### Images
- Add logo files to `public/images/`
- Update image references in components
- Optimize images for web use

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## Support

For questions or issues, contact the development team or create an issue in the repository.

## License

© 2024 So‑Cal Shades Wholesale. All rights reserved.