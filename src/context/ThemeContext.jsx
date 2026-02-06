// context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Default color scheme
// In ThemeContext.jsx
const defaultTheme = {
  // Background colors
  bgColor: "#0f172a",
  primaryColor: "#3b82f6",
  secondaryColor: "#8b5cf6",
  cardBg: "rgba(0, 0, 0, 0.2)", // Add this
  
  // Text colors
  textColor: "#ffffff",
  textSecondary: "#94a3b8",
  textPrimary: "#3b82f6",
  textAccent: "#8b5cf6",
  
  // UI colors
  borderColor: "rgba(255, 255, 255, 0.2)",
  hoverBg: "rgba(255, 255, 255, 0.1)",
};

export function ThemeProvider({ children }) {
  // Load theme from localStorage
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('appTheme');
    return saved ? JSON.parse(saved) : defaultTheme;
  });

  // Save to localStorage and update CSS variables
  useEffect(() => {
    localStorage.setItem('appTheme', JSON.stringify(theme));
    
    // Update all CSS variables
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
    
    // Dispatch event for components that listen
    window.dispatchEvent(new CustomEvent('themeUpdated', { detail: theme }));
  }, [theme]);

  // Update single color
  const updateColor = (key, value) => {
    setTheme(prev => ({ ...prev, [key]: value }));
  };

  // Update multiple colors
  const updateColors = (colors) => {
    setTheme(prev => ({ ...prev, ...colors }));
  };

  // Reset to defaults
  const resetTheme = () => {
    setTheme(defaultTheme);
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      updateColor, 
      updateColors, 
      resetTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);