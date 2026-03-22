"use client";

interface WelcomeScreenProps {
  onSelectPrompt: (prompt: string) => void;
}

const QUOTES = [
  {
    text: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
  },
];

const SUGGESTED_PROMPTS = [
  "How do I stop worrying about things I can't control?",
  "What would Marcus Aurelius say about failure?",
  "Teach me about the dichotomy of control",
  "How can Stoicism help with modern anxiety?",
];

export default function WelcomeScreen({ onSelectPrompt }: WelcomeScreenProps) {
  const quote = QUOTES[0];

  return (
    <div className="welcome">
      <div className="welcome-icon" role="img" aria-label="Classical pillars">
        🏛️
      </div>
      <h1 className="welcome-title">
        Meet <strong>Stoa</strong>
      </h1>
      <p className="welcome-description">
        Your personal Stoic philosophy guide. Drawing on the timeless wisdom of
        Marcus Aurelius, Epictetus, and Seneca — ask me anything about life,
        resilience, and inner peace.
      </p>
      <p className="welcome-quote">&ldquo;{quote.text}&rdquo;</p>
      <p className="welcome-quote-author">— {quote.author}</p>

      <p className="welcome-prompts-label">Try asking</p>
      <div className="welcome-prompts">
        {SUGGESTED_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            className="welcome-prompt-btn"
            onClick={() => onSelectPrompt(prompt)}
            type="button"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
