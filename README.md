# FitZone Gym - Landing Page

A modern, fully responsive gym landing page built with Next.js 14, TailwindCSS, and TypeScript.

## 🚀 Live Demo
[View Live Site](https://gym-landing-page.vercel.app)

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **UI Components:** Shadcn/UI
- **Email:** Nodemailer
- **Deployment:** Vercel

## ✨ Features
- Fully responsive (mobile, tablet, desktop)
- Sticky navigation with mobile menu
- Hero section with stats
- About section
- Programs/Services section
- Pricing plans
- Customer testimonials
- Contact form with email integration
- SEO optimised

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/walidaitbaha/gym-landing-page.git

# Move into the folder
cd gym-landing-page

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Environment Variables
Create a `.env.local` file in the root:
\`\`\`
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your_gmail_app_password
\`\`\`

## 📁 Project Structure
\`\`\`
business-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/
│       └── contact/
│           └── route.ts
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── public/
\`\`\`

## 📸 Screenshots
Coming soon

## 📄 License
MIT License — free to use for personal and commercial projects.
