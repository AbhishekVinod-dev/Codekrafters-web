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

import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Members" },
  { value: "50+", label: "Events" },
  { value: "98%", label: "Accuracy" },
];

const features = [
  {
    title: "Smart Attendance",
    description: "Track and manage member attendance with QR codes and real-time updates.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Event Management",
    description: "Organize events seamlessly with scheduling, registration, and notifications.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Task Distribution",
    description: "Assign and track tasks across your team with clear accountability.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0f172a" }}>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "var(--primary)" }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "var(--secondary)" }}></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-white/10 relative backdrop-blur-sm bg-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))", boxShadow: "0 10px 30px -5px rgba(249, 115, 22, 0.3)" }}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">ClubTrack</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/login" className="text-white/60 hover:text-white transition text-sm font-medium">
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{ background: "var(--primary)", boxShadow: "0 4px 14px rgba(249, 115, 22, 0.3)" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Removed: Trusted by 500+ members worldwide badge */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            Track Attendance.{<br />}Manage Events.{<br />}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--primary), var(--secondary))" }}>Grow Together.</span>
          </h1>

          <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
            A modern platform to monitor, record, and manage attendance for all your club activities. 
            Streamline your organization's workflow with powerful tools.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-20">
            <Link
              to="/attendance"
              className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))", boxShadow: "0 10px 30px -5px rgba(249, 115, 22, 0.3)" }}
            >
              Track Attendance
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              to="/events"
              className="px-8 py-4 rounded-xl font-semibold text-white bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View Events
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition duration-300">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Everything you need</h2>
            <p className="text-white/50 max-w-lg mx-auto">
              Powerful features to help you manage your club effectively
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition duration-300"
                  style={{ background: "linear-gradient(135deg, var(--secondary), var(--primary))" }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to get started?</h2>
              <p className="text-white/80 mb-8 max-w-md mx-auto">
                Making club coordination easy for every member and leader.
              </p>
              <Link
                to="/register"
                className="inline-block px-10 py-4 rounded-xl font-semibold text-white bg-black/20 hover:bg-black/40 transition-all duration-300 hover:scale-105"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "var(--primary)" }}>
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} ClubTrack. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-8 text-sm">
            <Link to="/settings" className="text-white/40 hover:text-white/70 transition">Settings</Link>
            <Link to="/tasks" className="text-white/40 hover:text-white/70 transition">Tasks</Link>
            <Link to="/login" className="text-white/40 hover:text-white/70 transition">Sign In</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}