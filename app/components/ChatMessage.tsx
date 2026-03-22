"use client";

import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export default function ChatMessage({
  role,
  content,
  isStreaming,
}: ChatMessageProps) {
  const isBot = role === "assistant";

  return (
    <div className={`message message--${isBot ? "bot" : "user"}`}>
      <div className="message-avatar">{isBot ? "🏛️" : "✦"}</div>
      <div className="message-content">
        {isBot && content ? (
          <ReactMarkdown>{content}</ReactMarkdown>
        ) : isBot && !content && isStreaming ? (
          <div className="typing-indicator" aria-label="Stoa is thinking">
            <span className="typing-dot" />
            <span className="typing-dot" />
            <span className="typing-dot" />
          </div>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}
