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
      className="px-4 py-2 rounded border border-gray-300 bg-white dark:bg-gray-900 dark:text-white text-gray-900 shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      aria-label="Toggle dark mode"
      type="button"
    >
      {mode === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
