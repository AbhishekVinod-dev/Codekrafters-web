import React, { useState, useMemo, useEffect } from "react";
import { Domain, Member } from "../types";
import { Calendar } from "lucide-react";
import { markAttendance } from "../lib/attendanceService";
import Toast from "../components/Toast";
import { db } from "../lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const AttendanceView: React.FC = () => {
  const selectedDate = useMemo(
    () => new Date().toISOString().split("T")[0],
    []
  );

  const [members, setMembers] = useState<Member[]>([]);
  const [filterDomain, setFilterDomain] = useState<string>("All");
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  /* ================= REALTIME MEMBERS FROM FIREBASE ================= */
  useEffect(() => {
    const q = query(collection(db, "members"), orderBy("joinDate", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Member[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...(docSnap.data() as Omit<Member, "id">),
      }));

      setMembers(data);
    });

    return () => unsubscribe();
  }, []);

  /* ================= FILTER ================= */
  const filteredMembers = members.filter(
    (m) => filterDomain === "All" || m.domain === filterDomain
  );

  /* ================= GET STATUS ================= */
  const [attendanceMap, setAttendanceMap] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    const q = query(collection(db, "attendance"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const map: Record<string, boolean> = {};

      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        if (data.date === selectedDate) {
          map[data.memberId] = data.present;
        }
      });

      setAttendanceMap(map);
    });

    return () => unsubscribe();
  }, [selectedDate]);

  /* ================= MARK ATTENDANCE ================= */
  const handleMark = async (memberId: string) => {
    const member = members.find((m) => m.id === memberId);
    if (!member) return;

    const current = attendanceMap[memberId] || false;

    try {
      setLoadingId(memberId);

      await markAttendance(memberId, selectedDate, !current);

      setToast({
        message: `${member.name} marked as ${!current ? "PRESENT" : "ABSENT"}`,
        type: !current ? "success" : "info",
      });
    } catch (err) {
      console.error("Attendance update failed:", err);

      setToast({
        message: "Failed to update attendance",
        type: "error",
      });
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* ================= TOAST ================= */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* ================= HEADER ================= */}
      <header className="mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black tracking-tighter mb-2 text-[var(--text)]">
            Member Registry
          </h2>
          <p className="font-medium opacity-70">
            Marking presence for{" "}
            {new Date(selectedDate).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* FILTER */}
        <div
          className="flex gap-3 p-2 rounded-2xl border shadow-sm items-center"
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
            style={{
              background: "var(--bg)",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}
          >
            <Calendar size={16} />
            <span>
              Today,{" "}
              {new Date(selectedDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

          <select
            value={filterDomain}
            onChange={(e) => setFilterDomain(e.target.value)}
            className="px-4 py-2 rounded-xl text-sm font-bold focus:outline-none"
            style={{
              background: "var(--bg)",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}
          >
            <option value="All">All Domains</option>
            {Object.values(Domain).map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* ================= MEMBER CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => {
          const isPresent = attendanceMap[member.id] || false;

          return (
            <div
              key={member.id}
              onClick={() => handleMark(member.id)}
              className="p-8 rounded-[2rem] border-2 cursor-pointer transition-all duration-500 relative overflow-hidden"
              style={{
                background: isPresent ? "var(--primary)" : "var(--card)",
                borderColor: isPresent ? "var(--primary)" : "var(--border)",
                opacity: loadingId === member.id ? 0.6 : 1,
              }}
            >
              <h3
                className="font-black text-2xl mb-1 tracking-tight"
                style={{ color: isPresent ? "#fff" : "var(--text)" }}
              >
                {member.name}
              </h3>

              <p
                className="text-[10px] font-black uppercase tracking-[0.2em]"
                style={{
                  color: isPresent
                    ? "rgba(255,255,255,0.7)"
                    : "var(--text)",
                }}
              >
                {member.domain}
              </p>
            </div>
          );
        })}

        {filteredMembers.length === 0 && (
          <div
            className="col-span-full py-24 text-center rounded-[3rem] border-4 border-dashed"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            No matching Krafters found
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceView;
