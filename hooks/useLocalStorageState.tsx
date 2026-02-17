"use client";

import { useState, useEffect } from "react";

export default function useLocalStorageState(
  key: string,
  defaultValue: unknown,
) {
  const [state, setState] = useState(() => {
    // Lazy initialization: only run on the first render
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        try {
          return JSON.parse(storedValue);
        } catch (error) {
          console.error("Error parsing localStorage item:", error);
          localStorage.removeItem(key);
        }
      }
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  useEffect(() => {
    // Update localStorage whenever the state changes
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState];
}
