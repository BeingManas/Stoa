"use client";

import { useRef, useEffect, KeyboardEvent } from "react";

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
}

export default function ChatInput({
  input,
  isLoading,
  onInputChange,
  onSubmit,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 140)}px`;
    }
  }, [input]);

  // Focus on mount
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        onSubmit();
      }
    }
  };

  return (
    <div className="input-area">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="input-wrapper"
      >
        <textarea
          ref={textareaRef}
          className="input-textarea"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Stoa for wisdom..."
          rows={1}
          disabled={isLoading}
          id="chat-input"
          aria-label="Type your message"
        />
        <button
          type="submit"
          className="send-button"
          disabled={!input.trim() || isLoading}
          aria-label="Send message"
          id="send-button"
        >
          ➤
        </button>
      </form>
      <p className="footer-note">
        Stoa draws on Stoic philosophy · Responses are AI-generated
      </p>
    </div>
  );
}
