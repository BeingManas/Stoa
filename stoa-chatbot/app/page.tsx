"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";
import ErrorBanner from "./components/ErrorBanner";

export default function Home() {
  const {
    messages,
    sendMessage,
    status,
    error,
    regenerate,
    clearError,
  } = useChat();

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isLoading = status === "submitted" || status === "streaming";

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault?.();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  const handleSelectPrompt = (prompt: string) => {
    sendMessage({ text: prompt });
  };

  const hasMessages = messages.length > 0;

  // Helper to extract text content from a UIMessage
  const getMessageText = (msg: (typeof messages)[0]): string => {
    return msg.parts
      .filter((part): part is { type: "text"; text: string } => part.type === "text")
      .map((part) => part.text)
      .join("");
  };

  return (
    <main className="main">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-icon" role="img" aria-label="Stoa">
            🏛️
          </div>
          <div>
            <h1 className="header-title">Stoa</h1>
            <p className="header-subtitle">Stoic Philosophy Guide</p>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="chat-container">
        {!hasMessages ? (
          <WelcomeScreen onSelectPrompt={handleSelectPrompt} />
        ) : (
          <div className="messages" role="log" aria-label="Chat messages">
            {messages.map((msg) => {
              const text = getMessageText(msg);
              const isLastMsg = msg.id === messages[messages.length - 1]?.id;
              const isStreamingMsg =
                isLoading && msg.role === "assistant" && isLastMsg;

              return (
                <ChatMessage
                  key={msg.id}
                  role={msg.role as "user" | "assistant"}
                  content={text}
                  isStreaming={isStreamingMsg}
                />
              );
            })}

            {/* Show typing indicator when loading and last message is from user */}
            {isLoading &&
              messages.length > 0 &&
              messages[messages.length - 1].role === "user" && (
                <div className="message message--bot">
                  <div className="message-avatar">🏛️</div>
                  <div className="message-content">
                    <div
                      className="typing-indicator"
                      aria-label="Stoa is thinking"
                    >
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                    </div>
                  </div>
                </div>
              )}

            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Error Banner */}
        {error && (
          <ErrorBanner
            onRetry={() => {
              clearError();
              regenerate();
            }}
          />
        )}

        {/* Input Area */}
        <ChatInput
          input={input}
          isLoading={isLoading}
          onInputChange={setInput}
          onSubmit={handleSend}
        />
      </div>
    </main>
  );
}
