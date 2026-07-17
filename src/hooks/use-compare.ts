import { useEffect, useState } from "react";

const KEY = "canopyindex.compare";

export function useCompare() {
  const [ids, setIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setIds(JSON.parse(raw));
    } catch {
      // corrupt or inaccessible storage - fall back to the empty default
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    // Skip the pre-load render: writing here would stomp the stored
    // selection with the empty initial state before it's ever read.
    if (!hydrated) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(ids));
    } catch {
      // storage unavailable (private browsing, quota) - selection just won't persist
    }
  }, [ids, hydrated]);

  const toggle = (id: string) =>
    setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const clear = () => setIds([]);
  const remove = (id: string) => setIds((prev) => prev.filter((x) => x !== id));

  return { ids, toggle, clear, remove };
}
