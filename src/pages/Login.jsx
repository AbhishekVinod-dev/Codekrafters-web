// ENHANCED LOGIN PAGE UI (Modern Glass + Gradient + UX polish)
// src/pages/Login.jsx

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      const userDoc = await getDoc(doc(db, "users", uid));

      if (!userDoc.exists()) {
        setError("User record missing. Please register again.");
        setLoading(false);
        return;
      }

      const role = userDoc.data().role;

      // Role‑based navigation (can expand later)
      if (role === "member" || role === "lead" || role === "head") {
        navigate("/");
      } else {
        setError("Invalid role assigned.");
      }
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--bg)" }}>
      {/* Glass Card */}
      <form
        onSubmit={handleLogin}
        className="w-full max-w-lg bg-[var(--card)] backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Welcome Back 👋
          </h1>
          <p className="text-sm opacity-70">
            Sign in to continue to <span className="text-[var(--primary)] font-semibold">CodeKrafters</span>
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           className="w-full p-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition text-white placeholder-gray-400"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm text-center bg-red-500/10 py-2 rounded-lg">
            {error}
          </p>
        )}

        {/* Login Button */}
        <button
          disabled={loading}
          className="w-full py-3 rounded-xl font-semibold text-white transition active:scale-95"
          style={{ background: "var(--primary)", opacity: loading ? 0.7 : 1 }}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 opacity-50 text-xs">
          <div className="flex-1 h-px bg-white/20" />
          OR
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Register Link */}
        <p className="text-center text-sm opacity-80">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[var(--primary)] font-semibold cursor-pointer hover:underline"
          >
            Create one
          </span>
        </p>
      </form>
    </div>
  );
}
