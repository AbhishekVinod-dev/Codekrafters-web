// src/pages/Register.jsx

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("member");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      // Save role in Firestore
      await setDoc(doc(db, "users", uid), {
        email,
        role,
        createdAt: new Date(),
      });

      // 👉 Redirect based on role structure (future‑ready)
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--bg)" }}>
      <form
        onSubmit={handleRegister}
        className="w-full max-w-lg bg-[var(--card)] backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl space-y-6 text-white"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold">Create Account</h1>
          <p className="text-sm opacity-70">
            Join <span className="text-[var(--primary)] font-semibold">CodeKrafters</span>
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
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
          />

          {/* Role Selector */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          >
            <option value="member">Member</option>
            <option value="lead">Lead</option>
            <option value="head">Head</option>
          </select>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm text-center bg-red-500/10 py-2 rounded-lg">
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          disabled={loading}
          className="w-full py-3 rounded-xl font-semibold text-white transition active:scale-95"
          style={{ background: "var(--primary)", opacity: loading ? 0.7 : 1 }}
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        {/* Login Link */}
        <p className="text-center text-sm opacity-80">
          Already have an account?{" "}
          <span
            className="text-[var(--primary)] font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
}

