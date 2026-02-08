// src/pages/Home.jsx

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="min-h-screen text-slate-900 flex flex-col items-center justify-center px-6"
      style={{ background: "#F2F0D8" }}
    >
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-black mb-4 text-black">
          Welcome to <span className="text-yellow-500">CodeKrafters</span>
        </h1>

        <p className="text-xl font-semibold opacity-80 mb-8">
          A modern role‑based dashboard platform with global theming, secure
          authentication, and scalable architecture.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
<<<<<<< HEAD
            to="/dashboard"
            className="px-6 py-3 rounded-xl font-bold text-base text-white transition hover:opacity-90"
            style={{ background: "var(--secondary)" }}
=======
            to="/attendance"
            className="px-6 py-3 rounded-xl font-black text-base bg-[var(--primary)] hover:opacity-90 transition"
>>>>>>> parent of 709a9355 (Merge remote-tracking branch 'origin/main' into events)
          >
            Go to Attendance
          </Link>

          <Link
            to="/settings"
            className="px-6 py-3 rounded-xl font-black text-base bg-[var(--secondary)] hover:opacity-90 transition"
          >
            Open Settings
          </Link>

              <Link
        to="/tasks"
        className="px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        style={{ background: "var(--secondary)" }}
      >
        Task Distribution
      </Link>

        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
        <FeatureCard
          title="Secure Authentication"
          description="Firebase powered login, register, protected routes, and role‑based access."
        />

        <FeatureCard
          title="Global Theme Engine"
          description="Customize colors in Settings and watch the entire platform update instantly."
        />

        <FeatureCard
          title="Scalable Dashboard"
          description="Built with real SaaS architecture ready for ERP‑level expansion."
        />
      </div>

      {/* Footer */}
      <p className="mt-20 text-sm opacity-60">
        © {new Date().getFullYear()} CodeKrafters. All rights reserved.
      </p>
    </div>
  );
}

/* ---------- Reusable Feature Card ---------- */

function FeatureCard({ title, description }) {
  return (
    <div className="bg-[var(--card)] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="opacity-80 text-sm">{description}</p>
    </div>
  );
}
