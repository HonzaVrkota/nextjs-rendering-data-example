"use client";

import { useState } from "react";

export default function RevalidateButton() {
  const [isRevalidating, setIsRevalidating] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleRevalidate = async () => {
    try {
      setIsRevalidating(true);
      setMessage(null);

      const response = await fetch("/api/revalidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.NEXT_PUBLIC_REVALIDATION_SECRET,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to revalidate");
      }

      setMessage("Page revalidated successfully!");

      // Refresh the page to see the new data
      window.location.reload();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Failed to revalidate"
      );
    } finally {
      setIsRevalidating(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleRevalidate}
        disabled={isRevalidating}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        {isRevalidating ? "Revalidating..." : "Revalidate Now"}
      </button>
      {message && (
        <p
          className={`text-sm ${
            message.includes("Failed") ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
