"use client";
import React, { useEffect, useState } from "react";

const getInitialMode = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
};

export default function DarkModeToggle() {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleMode}
      className="bevel-toggle px-4 py-2 cursor-pointer border rounded-full"
      aria-label="Toggle dark mode"
      type="button"
    >
      {mode === "dark" ? (
        // Sun icon (outline)
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={22} height={22}>
          <circle cx="12" cy="12" r="5" strokeWidth="2"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34l-1.41-1.41m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/>
        </svg>
      ) : (
        // Moon icon (outline)
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={22} height={22}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
        </svg>
      )}
    </button>
  );
}
