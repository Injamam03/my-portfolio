"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    // Component prothom baar screen e ashar somoy,
    // localStorage theke ager save kora theme dekhe apply kore
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") {
            setTheme(saved);
            document.documentElement.classList.toggle("light", saved === "light");
        }
    }, []);

    function toggleTheme() {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.classList.toggle("light", next === "light");
        localStorage.setItem("theme", next);
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-[var(--color-border)] p-2 text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
        >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    );
}