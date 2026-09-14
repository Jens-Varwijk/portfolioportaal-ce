import { useEffect, useState } from "react";

// Interim USER_CONTENT-opslag zolang Supabase nog niet gekoppeld is.
// Zodra Supabase beschikbaar is, wordt dit vervangen door echte queries/mutaties.
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage unavailable (privacy mode, quota) - negeer stil, data blijft in memory
    }
  }, [key, value]);

  return [value, setValue] as const;
}
