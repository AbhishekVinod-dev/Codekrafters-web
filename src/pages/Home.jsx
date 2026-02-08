// src/pages/Home.jsx

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-white relative overflow-hidden" style={{ background: "#000000" }}>
      {/* Animated Wave Background */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
        <defs>
          <style>{`
            @keyframes wave1 { 0% { d: path('M0,100 Q300,50 600,100 T1200,100'); } 25% { d: path('M0,80 Q300,30 600,80 T1200,80'); } 50% { d: path('M0,120 Q300,70 600,120 T1200,120'); } 75% { d: path('M0,80 Q300,30 600,80 T1200,80'); } 100% { d: path('M0,100 Q300,50 600,100 T1200,100'); } }
            @keyframes wave2 { 0% { d: path('M0,180 Q300,130 600,180 T1200,180'); } 25% { d: path('M0,160 Q300,110 600,160 T1200,160'); } 50% { d: path('M0,200 Q300,150 600,200 T1200,200'); } 75% { d: path('M0,160 Q300,110 600,160 T1200,160'); } 100% { d: path('M0,180 Q300,130 600,180 T1200,180'); } }
            @keyframes wave3 { 0% { d: path('M0,260 Q300,210 600,260 T1200,260'); } 25% { d: path('M0,240 Q300,190 600,240 T1200,240'); } 50% { d: path('M0,280 Q300,230 600,280 T1200,280'); } 75% { d: path('M0,240 Q300,190 600,240 T1200,240'); } 100% { d: path('M0,260 Q300,210 600,260 T1200,260'); } }
            @keyframes wave4 { 0% { d: path('M0,340 Q300,290 600,340 T1200,340'); } 25% { d: path('M0,320 Q300,270 600,320 T1200,320'); } 50% { d: path('M0,360 Q300,310 600,360 T1200,360'); } 75% { d: path('M0,320 Q300,270 600,320 T1200,320'); } 100% { d: path('M0,340 Q300,290 600,340 T1200,340'); } }
            @keyframes wave5 { 0% { d: path('M0,420 Q300,370 600,420 T1200,420'); } 25% { d: path('M0,400 Q300,350 600,400 T1200,400'); } 50% { d: path('M0,440 Q300,390 600,440 T1200,440'); } 75% { d: path('M0,400 Q300,350 600,400 T1200,400'); } 100% { d: path('M0,420 Q300,370 600,420 T1200,420'); } }
            @keyframes wave6 { 0% { d: path('M0,500 Q300,450 600,500 T1200,500'); } 25% { d: path('M0,480 Q300,430 600,480 T1200,480'); } 50% { d: path('M0,520 Q300,470 600,520 T1200,520'); } 75% { d: path('M0,480 Q300,430 600,480 T1200,480'); } 100% { d: path('M0,500 Q300,450 600,500 T1200,500'); } }
            @keyframes wave7 { 0% { d: path('M0,580 Q300,530 600,580 T1200,580'); } 25% { d: path('M0,560 Q300,510 600,560 T1200,560'); } 50% { d: path('M0,600 Q300,550 600,600 T1200,600'); } 75% { d: path('M0,560 Q300,510 600,560 T1200,560'); } 100% { d: path('M0,580 Q300,530 600,580 T1200,580'); } }
            @keyframes wave8 { 0% { d: path('M0,660 Q300,610 600,660 T1200,660'); } 25% { d: path('M0,640 Q300,590 600,640 T1200,640'); } 50% { d: path('M0,680 Q300,630 600,680 T1200,680'); } 75% { d: path('M0,640 Q300,590 600,640 T1200,640'); } 100% { d: path('M0,660 Q300,610 600,660 T1200,660'); } }
          `}</style>
        </defs>

        <path fill="none" stroke="rgb(200, 200, 200)" strokeWidth="3" opacity="0.95" style={{ animation: "wave1 4s ease-in-out infinite" }} />
        <path fill="none" stroke="rgb(180, 180, 180)" strokeWidth="3" opacity="0.9" style={{ animation: "wave2 5s ease-in-out infinite 0.3s" }} />
        <path fill="none" stroke="rgb(160, 160, 160)" strokeWidth="3" opacity="0.85" style={{ animation: "wave3 6s ease-in-out infinite 0.6s" }} />
        <path fill="none" stroke="rgb(140, 140, 140)" strokeWidth="3" opacity="0.8" style={{ animation: "wave4 5.5s ease-in-out infinite 0.9s" }} />
        <path fill="none" stroke="rgb(120, 120, 120)" strokeWidth="3" opacity="0.75" style={{ animation: "wave5 6.5s ease-in-out infinite 1.2s" }} />
        <path fill="none" stroke="rgb(100, 100, 100)" strokeWidth="3" opacity="0.7" style={{ animation: "wave6 7s ease-in-out infinite 1.5s" }} />
        <path fill="none" stroke="rgb(80, 80, 80)" strokeWidth="3" opacity="0.65" style={{ animation: "wave7 5.5s ease-in-out infinite 1.8s" }} />
        <path fill="none" stroke="rgb(60, 60, 60)" strokeWidth="3" opacity="0.6" style={{ animation: "wave8 6.5s ease-in-out infinite 2.1s" }} />
      </svg>

      {/* Content */}
      <div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center"
      >
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-black mb-4">
          Welcome to <span style={{ color: "var(--primary)" }}>ClubTrack</span>
        </h1>

        <p className="text-lg opacity-80 mb-8">
          A Smart and Reliable Platform to Monitor, Record, and Manage Attendance for All Your Club
          Activities.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            to="/attendance"
            className="px-6 py-3 rounded-xl font-bold text-base text-white transition hover:opacity-90"
            style={{ background: "var(--secondary)" }}
          >
            Check Attendance
          </Link>

          <Link
            to="/events"
            className="px-6 py-3 rounded-xl font-bold text-base text-white transition hover:opacity-90"
            style={{ background: "var(--secondary)" }}
          >
            Check Events
          </Link>

          <Link
            to="/settings"
            className="px-6 py-3 rounded-xl font-bold text-base text-white transition hover:opacity-90"
            style={{ background: "var(--secondary)" }}
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

      {/* Footer */}
      <p className="mt-20 text-sm opacity-60">
        © {new Date().getFullYear()} ClubTrack. All rights reserved.
      </p>
      </div>
    </div>
  );
}
