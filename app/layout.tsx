import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stoa — Your Stoic Philosophy Guide",
  description:
    "A wise AI companion grounded in Stoic philosophy. Ask for life advice, explore timeless wisdom from Marcus Aurelius, Epictetus, and Seneca, or discuss philosophical dilemmas.",
  keywords: [
    "stoic philosophy",
    "chatbot",
    "marcus aurelius",
    "epictetus",
    "seneca",
    "stoicism",
    "life advice",
    "philosophy AI",
  ],
  openGraph: {
    title: "Stoa — Your Stoic Philosophy Guide",
    description:
      "A wise AI companion grounded in Stoic philosophy. Explore timeless wisdom and get thoughtful advice.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏛️</text></svg>" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
