# Company Landing Page

A modern, polished landing page built with Next.js, TypeScript, React 19, Tailwind CSS 4, and shadcn/ui.

## Features

- 🎨 Modern glassmorphism effects and gradient accents
- ✨ Smooth scroll-triggered animations
- 📱 Fully responsive design (rocketship hidden on mobile)
- 🎯 Hero section with compelling CTA
- 💎 Feature showcase with hover animations
- 🌟 About section with company stats
- 📧 Contact form with validation
- 🎭 Dark gradient sections for visual contrast

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Routing:** Wouter
- **Build Tool:** Vite
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Extract the zip file and navigate to the project directory:
```bash
cd company-landing
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Build for Production

```bash
pnpm build
# or
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
company-landing/
├── client/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # React components
│   │   │   ├── ui/      # shadcn/ui components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/       # Page components
│   │   │   └── Home.tsx
│   │   ├── contexts/    # React contexts
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utilities
│   │   ├── App.tsx      # Main app component
│   │   ├── index.css    # Global styles
│   │   └── main.tsx     # Entry point
│   └── index.html
├── package.json
└── vite.config.ts
```

## Customization

### Update Company Information

Edit `client/src/const.ts`:
```typescript
export const APP_TITLE = "Your Company Name";
export const APP_LOGO = "/your-logo.svg";
```

### Modify Colors

Edit the CSS variables in `client/src/index.css` under the `:root` section.

### Add/Remove Sections

Edit `client/src/pages/Home.tsx` to customize the landing page sections.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## License

MIT
