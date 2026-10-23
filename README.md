# Namare Shakib Angkon — Portfolio

Personal portfolio of Namare Shakib Angkon, final-year CSE student at United International University.

- **Live:** https://namare-portfolio.vercel.app

Built with Next.js, Tailwind CSS and Framer Motion. Started from the MIT-licensed Flexy Dev template (see `LICENSE`).

## Run locally

```bash
npm install
NEXT_PUBLIC_SITE_URL=http://localhost:3000 npm run dev
```

`NEXT_PUBLIC_SITE_URL` is required: it sets the canonical URL, sitemap and robots.txt.

For the résumé chatbot, put a Groq key in `.env.local` (and in the Vercel project's environment variables for Production and Preview):

```bash
GROQ_API_KEY=...
# optional, defaults to openai/gpt-oss-120b
GROQ_CHAT_MODEL=...
```

## Where things live

| Path | What |
| --- | --- |
| `src/app/page.tsx` | Home page |
| `src/components/` | Page sections |
| `src/app/api/chat/route.ts` | Résumé chatbot API (Groq) |
| `content/chatbot/` | What the chatbot knows: edit these markdown files to change its answers |
