# Stoa — Stoic Philosophy Chatbot 🏛️

A purpose-built AI chatbot steeped in Stoic philosophy. Stoa acts as a wise advisor, drawing on the teachings of **Marcus Aurelius**, **Epictetus**, and **Seneca** to help you navigate life's challenges with wisdom and inner strength.

![Stoa Screenshot](screenshot.png)

## ✨ Features

- **Topic-focused AI** — Not a generic wrapper. Stoa is trained with a deep Stoic philosophy knowledge base covering key texts, quotes, and principles.
- **Streaming responses** — Real-time token-by-token responses for a fluid conversational experience.
- **Interactive welcome screen** — Curated Stoic quote, suggested prompts to get started.
- **Polished UX states** — Loading indicators, error handling with retry, and responsive design.
- **Premium design** — Dark marble aesthetic with warm gold accents, classical typography (Cormorant Garamond + Inter), and smooth animations.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- **AI**: [Vercel AI SDK v6](https://sdk.vercel.ai/) + [Google Gemini](https://ai.google.dev/)
- **Styling**: Vanilla CSS with CSS custom properties
- **Deployment**: [Vercel](https://vercel.com)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Google Gemini API key (free at [aistudio.google.com](https://aistudio.google.com/app/apikey))

### Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/stoa-chatbot.git
cd stoa-chatbot

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your Google Gemini API key

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Description |
|---|---|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Your Google Gemini API key ([get one free](https://aistudio.google.com/app/apikey)) |

## 📁 Project Structure

```
stoa-chatbot/
├── app/
│   ├── api/chat/
│   │   └── route.ts          # Streaming chat API with Stoic system prompt
│   ├── components/
│   │   ├── ChatInput.tsx      # Auto-resizing input with send button
│   │   ├── ChatMessage.tsx    # Message bubbles with markdown rendering
│   │   ├── ErrorBanner.tsx    # Themed error state with retry
│   │   └── WelcomeScreen.tsx  # Landing screen with quote & suggestions
│   ├── globals.css            # Design system & all styles
│   ├── layout.tsx             # Root layout with SEO metadata
│   └── page.tsx               # Main chat page
├── .env.local                 # API key (not committed)
└── package.json
```

## 🎨 Frontend Thinking

| UX Element | Implementation |
|---|---|
| **First impression** | Animated welcome with rotating Stoic quote, marble-themed UI, suggested prompts |
| **Loading state** | Animated 3-dot typing indicator in bot message bubble |
| **Error state** | Warm-toned banner with Stoic-flavored message and "Try again" button |
| **Empty state** | Full welcome screen with hero, description, and starter prompts |
| **Streaming** | Real-time token streaming — responses appear word-by-word |
| **Responsive** | Mobile-first CSS, optimized 320px → 4K |

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add `GOOGLE_GENERATIVE_AI_API_KEY` to Environment Variables
4. Deploy!

## 📄 License

MIT
