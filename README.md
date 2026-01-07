# Lumina Landing Page

Marketing landing page for Lumina - a lightweight observability platform for LLM applications.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vercel** - Deployment platform

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
lumina-landing/
├── app/
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── public/               # Static assets
└── package.json
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy
5. Configure custom domain in Vercel dashboard

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

No environment variables needed for the landing page.

## Customization

Update the following in the code:

- GitHub URLs: Replace `https://github.com/yourusername/lumina` with your actual repository URL
- Social links in footer
- Add your logo/images to the `/public` folder
- Update metadata in `app/layout.tsx`

## Related Repositories

- [Lumina Main Repository](https://github.com/yourusername/lumina) - The main Lumina observability platform

## License

MIT
