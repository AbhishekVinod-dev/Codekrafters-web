// // src/pages/Home.jsx

// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center px-6 text-white"
//       style={{ background: "var(--bg)" }}
//     >
//       {/* Hero Section */}
//       <div className="text-center max-w-2xl">
//         <h1 className="text-6xl font-black mb-4">
//           Welcome to <span style={{ color: "var(--primary)" }}>CodeKrafters</span>
//         </h1>

//         <p className="text-lg opacity-80 mb-8">
//           A modern role‑based dashboard platform with global theming, secure
//           authentication, and scalable architecture.
//         </p>

//         {/* Action Buttons */}
//         <div className="flex gap-4 justify-center">
//           <Link
//             to="/attendance"
//             className="px-6 py-3 rounded-xl font-bold text-base text-white transition hover:opacity-90"
//             style={{ background: "var(--secondary)" }}
//           >
//             Go to Dashboard
//           </Link>

//           <Link
//             to="/settings"
//             className="px-6 py-3 rounded-xl font-bold text-base text-white transition hover:opacity-90"
//             style={{ background: "var(--secondary)" }}
//           >
//             Open Settings
//           </Link>

//               <Link
//         to="/tasks"
//         className="px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
//         style={{ background: "var(--secondary)" }}
//       >
//         Task Distribution
//       </Link>

//         </div>
//       </div>

//       {/* Feature Cards */}
//       <div className="grid md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
//         <FeatureCard
//           title="Secure Authentication"
//           description="Firebase powered login, register, protected routes, and role‑based access."
//         />

//         <FeatureCard
//           title="Global Theme Engine"
//           description="Customize colors in Settings and watch the entire platform update instantly."
//         />

//         <FeatureCard
//           title="Scalable Dashboard"
//           description="Built with real SaaS architecture ready for ERP‑level expansion."
//         />
//       </div>

//       {/* Footer */}
//       <p className="mt-20 text-sm opacity-60">
//         © {new Date().getFullYear()} CodeKrafters. All rights reserved.
//       </p>
//     </div>
//   );
// }

// /* ---------- Reusable Feature Card ---------- */

// function FeatureCard({ title, description }) {
//   return (
//     <div
//       className="rounded-2xl p-6 shadow-lg hover:scale-105 transition text-white"
//       style={{ background: "var(--card)" }}
//     >
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="opacity-80 text-sm">{description}</p>
//     </div>
//   );
// }

// // src/pages/Home.jsx

// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center px-6 text-white"
//       style={{ background: "var(--bg)" }}
//     >
//       {/* Hero Section */}
//       <div className="text-center max-w-2xl">
//         <h1 className="text-6xl font-black mb-4">
//           Welcome to <span style={{ color: "var(--primary)" }}>CodeKrafters</span>
//         </h1>

//         <p className="text-lg opacity-80 mb-8">
//           A modern role‑based dashboard platform with global theming, secure
//           authentication, and scalable architecture.
//         </p>

//         {/* Action Buttons */}
//         <div className="flex gap-4 justify-center">
//           <Link
//             to="/attendance"
//             className="px-6 py-3 rounded-xl font-bold text-base text-white transition hover:opacity-90"
//             style={{ background: "var(--secondary)" }}
//           >
//             Go to Dashboard
//           </Link>

//           <Link
//             to="/settings"
//             className="px-6 py-3 rounded-xl font-bold text-base text-white transition hover:opacity-90"
//             style={{ background: "var(--secondary)" }}
//           >
//             Open Settings
//           </Link>

//               <Link
//         to="/tasks"
//         className="px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
//         style={{ background: "var(--secondary)" }}
//       >
//         Task Distribution
//       </Link>

//         </div>
//       </div>

//       {/* Feature Cards */}
//       <div className="grid md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
//         <FeatureCard
//           title="Secure Authentication"
//           description="Firebase powered login, register, protected routes, and role‑based access."
//         />

//         <FeatureCard
//           title="Global Theme Engine"
//           description="Customize colors in Settings and watch the entire platform update instantly."
//         />

//         <FeatureCard
//           title="Scalable Dashboard"
//           description="Built with real SaaS architecture ready for ERP‑level expansion."
//         />
//       </div>

//       {/* Footer */}
//       <p className="mt-20 text-sm opacity-60">
//         © {new Date().getFullYear()} CodeKrafters. All rights reserved.
//       </p>
//     </div>
//   );
// }

// /* ---------- Reusable Feature Card ---------- */

// function FeatureCard({ title, description }) {
//   return (
//     <div
//       className="rounded-2xl p-6 shadow-lg hover:scale-105 transition text-white"
//       style={{ background: "var(--card)" }}
//     >
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="opacity-80 text-sm">{description}</p>
//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const stats = [
  { value: "500+", label: "Members" },
  { value: "50+", label: "Events" },
  { value: "98%", label: "Accuracy" },
];

const features = [
  {
    title: "Smart Attendance",
    description:
      "Track and manage member attendance with QR codes and real-time updates.",
    icon: "✅",
  },
  {
    title: "Event Management",
    description:
      "Organize events seamlessly with scheduling, registration, and notifications.",
    icon: "📅",
  },
  {
    title: "Task Distribution",
    description:
      "Assign and track tasks across your team with clear accountability.",
    icon: "📌",
  },
];

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  /* 🔐 Listen for login state */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  /* 🚪 Logout */
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="min-h-screen" style={{ background: "#0f172a" }}>
      {/* NAVBAR */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              }}
            >
              ⚡
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              ClubTrack
            </span>
          </div>

          {/* AUTH BUTTONS */}
          <div className="flex items-center gap-6">
            {user ? (
              <button
                onClick={handleLogout}
                className="text-white/70 hover:text-white transition text-sm font-medium"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className="text-white/60 hover:text-white transition text-sm font-medium"
              >
                Sign In
              </Link>
            )}

            <Link
              to={user ? "/" : "/register"}
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{ background: "var(--primary)" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Track Attendance.<br />
          Manage Events.<br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--primary), var(--secondary))",
            }}
          >
            Grow Together.
          </span>
        </h1>

        <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto">
          A modern platform to monitor, record, and manage attendance for all
          your club activities.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/attendance"
            className="px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition"
            style={{
              background:
                "linear-gradient(135deg, var(--primary), var(--secondary))",
            }}
          >
            Track Attendance →
          </Link>

          <Link
            to="/events"
            className="px-8 py-4 rounded-xl font-semibold text-white bg-white/10 border border-white/10 hover:bg-white/20 transition"
          >
            View Events
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="pb-20 px-6">
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-white/10 bg-white/5 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} ClubTrack. All rights reserved.
      </footer>
    </div>
  );
}
