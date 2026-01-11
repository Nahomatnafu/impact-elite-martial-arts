# Impact Elite Martial Arts and Fitness Website

A modern, professional website for Impact Elite Martial Arts and Fitness, built with Next.js, React, and Tailwind CSS.

## About

Impact Elite Martial Arts and Fitness offers world-class martial arts training led by Master Terrance Hinds, a champion with 15 years of teaching experience and multiple world championship titles.

### Programs Offered
- **Taekwondo** - Traditional Korean martial arts with forms, sparring, and self-defense
- **Personal Training** - One-on-one customized fitness programs
- **Cardio Kickboxing** - High-energy workouts combining martial arts and cardio

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern, professional/intense aesthetic
- ✅ Brand colors: Red, Gray, Black, White
- ✅ Free 2-week trial signup form
- ✅ Contact form
- ✅ Program showcase pages
- ✅ Instructor profile with championship credentials
- ✅ SEO optimized

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Package Manager:** npm

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nahomatnafu/impact-elite-martial-arts.git
cd impact-elite-martial-arts
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
impact-elite-martial-arts/
├── app/
│   ├── page.tsx              # Home page
│   ├── programs/
│   │   └── page.tsx          # Programs page
│   ├── instructor/
│   │   └── page.tsx          # Instructor profile
│   ├── contact/
│   │   └── page.tsx          # Contact form
│   ├── trial/
│   │   └── page.tsx          # Free trial signup
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Header navigation
│   └── Footer.tsx            # Footer component
├── public/                   # Static assets (add images here)
└── package.json
```

## Customization

### Adding Images

1. Add your images to the `public/` folder
2. Replace placeholder sections in the code with actual images:
   - Instructor photo
   - Training photos for each program
   - Logo (if you have one)

### Updating Contact Information

Edit the contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Adding Class Schedule

You can add a schedule section to the programs page or create a new schedule page.

## Contact Information

- **Phone:** 516-366-1146 (Text preferred)
- **Email:** trainimpactelite@gmail.com

## Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any hosting service that supports Node.js

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

## License

© 2026 Impact Elite Martial Arts and Fitness. All rights reserved.

## Support

For questions or issues with the website, contact the developer or create an issue in the repository.

