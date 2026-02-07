

import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState(() => {
const saved = localStorage.getItem("app-theme");
return saved
? JSON.parse(saved)
: {
background: "#7c2d12",
primary: "#f97316",
secondary: "#fb923c",
cardBg: "rgba(0,0,0,0.2)",
};
});


// persist theme
useEffect(() => {
localStorage.setItem("app-theme", JSON.stringify(theme));


// apply CSS variables globally
const root = document.documentElement;
root.style.setProperty("--bg", theme.background);
root.style.setProperty("--primary", theme.primary);
root.style.setProperty("--secondary", theme.secondary);
root.style.setProperty("--card", theme.cardBg);
}, [theme]);


return (
<ThemeContext.Provider value={{ theme, setTheme }}>
{children}
</ThemeContext.Provider>
);
};


export const useTheme = () => useContext(ThemeContext);