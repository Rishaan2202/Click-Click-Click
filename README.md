This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## ```.env``` Structure

```
# Hack Club Authorisation
NEXT_PUBLIC_HACKCLUB_CLIENT_ID=
HACKCLUB_CLIENT_SECRET=

# Slack Authorisation
SLACK_ACCESS_TOKEN=
SLACK_REFRESH_TOKEN=

# Database Integration
MONGODB_URI=

# CDN API Key
CDN_API_KEY=

# Redirect URIs
NEXT_PUBLIC_REDIRECT_URI=
```