"use client";

interface ErrorBannerProps {
  message?: string;
  onRetry: () => void;
}

export default function ErrorBanner({ message, onRetry }: ErrorBannerProps) {
  return (
    <div className="error-banner" role="alert">
      <span className="error-icon">⚠</span>
      <p className="error-message">
        {message || "Something went wrong. The Stoics would advise patience — shall we try again?"}
      </p>
      <button
        className="error-retry"
        onClick={onRetry}
        type="button"
        id="retry-button"
      >
        Try again
      </button>
    </div>
  );
}
