import React, { useState, useEffect } from "react";
import { Domain, Member, AttendanceRecord, AppState } from "./types";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import MembersView from "./components/MembersView";
import AttendanceView from "./components/AttendanceView";
import AnalyticsView from "./components/AnalyticsView";
import Toast, { ToastType } from "./components/Toast";

const STORAGE_KEY = "codekrafters_v1";

const INITIAL_STATE: AppState = {
  members: [],
  attendance: [],
};

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_STATE;
    } catch (e) {
      console.error("Failed to load state", e);
      return INITIAL_STATE;
    }
  });

  const [activeTab, setActiveTab] = useState<
    "dashboard" | "members" | "attendance" | "analytics"
  >("dashboard");

  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
  } | null>(null);

  /* ---------- Persist state ---------- */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  /* ---------- Toast helper ---------- */
  const showToast = (message: string, type: ToastType = "success") => {
    setToast({ message, type });
  };

  /* ---------- Member actions ---------- */
  const addMember = (name: string, domain: Domain) => {
    const newMember: Member = {
      id: `MK-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      name,
      domain,
      joinDate: new Date().toISOString(),
    };

    setState((prev) => ({
      ...prev,
      members: [...prev.members, newMember],
    }));

    showToast(`Krafter ${name} onboarded successfully!`);
  };

  const deleteMember = (id: string) => {
    const memberToDelete = state.members.find((m) => m.id === id);
    if (!memberToDelete) return;

    const confirmed = window.confirm(
      `Remove ${memberToDelete.name}? All attendance data will be deleted.`
    );

    if (confirmed) {
      setState((prev) => ({
        ...prev,
        members: prev.members.filter((m) => m.id !== id),
        attendance: prev.attendance.filter((a) => a.memberId !== id),
      }));

      showToast(`${memberToDelete.name} has been removed.`, "info");
    }
  };

  /* ---------- Attendance ---------- */
  const markAttendance = (memberId: string, date: string, present: boolean) => {
    const member = state.members.find((m) => m.id === memberId);
    if (!member) return;

    setState((prev) => {
      const filtered = prev.attendance.filter(
        (a) => !(a.memberId === memberId && a.date === date)
      );

      return {
        ...prev,
        attendance: [...filtered, { memberId, date, present }],
      };
    });

    showToast(`${member.name} marked as ${present ? "PRESENT" : "ABSENT"}`);
  };

  /* ---------- Reset system ---------- */
  const resetSystem = () => {
    if (window.confirm("CRITICAL: Wipe all club data? This is irreversible.")) {
      setState(INITIAL_STATE);
      showToast("All system data has been wiped.", "error");
    }
  };

  /* ---------- Page renderer ---------- */
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <Dashboard
            state={state}
            onNavigate={setActiveTab}
            onReset={resetSystem}
          />
        );

      case "members":
        return (
          <MembersView
            members={state.members}
            onAdd={addMember}
            onDelete={deleteMember}
          />
        );

      case "attendance":
        return <AttendanceView state={state} onMark={markAttendance} />;

      case "analytics":
        return <AnalyticsView state={state} />;

      default:
        return (
          <Dashboard
            state={state}
            onNavigate={setActiveTab}
            onReset={resetSystem}
          />
        );
    }
  };

  /* ---------- UI ---------- */
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "var(--bg)",       // 🎨 global background from theme
        color: "var(--text, #ffffff)", // optional text variable fallback
      }}
    >
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Main content */}
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
};

export default App;
