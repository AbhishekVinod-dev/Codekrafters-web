import { useTheme } from "../context/ThemeContext";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, LogOut } from "lucide-react";
import { useState, useEffect } from "react";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const darkTheme = {
    background: "#1a1a1a",
    primary: "#3b82f6",
    secondary: "#60a5fa",
    cardBg: "rgba(255,255,255,0.1)",
  };

  const lightTheme = {
    background: "#f5f5f5",
    primary: "#f97316",
    secondary: "#fb923c",
    cardBg: "rgba(0,0,0,0.05)",
  };

  useEffect(() => {
    setTheme(isDarkMode ? darkTheme : lightTheme);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode, setTheme]);

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className="min-h-screen text-slate-900 flex items-center justify-center p-4"
      style={{ background: "#F2F0D8" }}
    >
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-black mb-2 text-black">Settings</h1>
          <p className="text-lg font-bold text-gray-700">Customize your experience</p>
        </div>

        {/* Dark Mode Toggle */}
        <div
          className="bg-white p-8 rounded-2xl space-y-4 border-2 border-black/10 shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {isDarkMode ? (
                <Moon size={24} className="text-blue-600" />
              ) : (
                <Sun size={24} className="text-yellow-500" />
              )}
              <div>
                <h2 className="font-semibold text-lg text-black">Dark Mode</h2>
                <p className="text-sm text-gray-600">
                  {isDarkMode ? "Enabled" : "Disabled"}
                </p>
              </div>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                isDarkMode ? "bg-blue-600" : "bg-yellow-400"
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isDarkMode ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div>
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-red-600 hover:bg-red-700 transition-colors font-semibold text-lg text-white"
          >
            <LogOut size={24} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

