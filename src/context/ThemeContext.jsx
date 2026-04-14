import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

/* ---------- DEFAULT THEME ---------- */
const DEFAULT_THEME = {
  background: "#7c2d12",
  primary: "#f97316",
  secondary: "#fb923c",
  cardBg: "rgba(0,0,0,0.2)",

  /* NEW TOKENS (required for visibility) */
  text: "#ffffff",
  textOnPrimary: "#000000",
  border: "rgba(255,255,255,0.15)",
};

/* ---------- PROVIDER ---------- */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("app-theme");
    return saved ? JSON.parse(saved) : DEFAULT_THEME;
  });

  /* ---------- APPLY CSS VARIABLES ---------- */
  useEffect(() => {
    localStorage.setItem("app-theme", JSON.stringify(theme));

    const root = document.documentElement;

    root.style.setProperty("--bg", theme.background);
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--card", theme.cardBg);

    /* NEW GLOBAL VARIABLES */
    root.style.setProperty("--text", theme.text || "#ffffff");
    root.style.setProperty("--textOnPrimary", theme.textOnPrimary || "#000000");
    root.style.setProperty("--border", theme.border || "rgba(255,255,255,0.15)");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/* ---------- HOOK ---------- */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
};
