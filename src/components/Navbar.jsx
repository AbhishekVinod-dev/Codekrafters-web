import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useSidebar } from "../context/SidebarContext";
import {
  Home,
  ClipboardList,
  Settings,
  LogOut,
  Menu,
  X,
  Calendar,
  ListTodo,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useSidebar();

  const [isHovered, setIsHovered] = useState(false);
  const [lockClosed, setLockClosed] = useState(false); // 🔒 prevents reopen on hover

  const shouldExpand = isOpen || (isHovered && !lockClosed);

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navItems = [
    { label: "Home", icon: Home, path: "/" },
    { label: "Attendance", icon: ClipboardList, path: "/attendance" },
    { label: "Events", icon: Calendar, path: "/events" },
    { label: "Tasks", icon: ListTodo, path: "/tasks" },
    { label: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen z-50 flex flex-col shadow-lg transition-all duration-500 ${
        shouldExpand ? "w-64" : "w-20"
      }`}
      style={{ background: "var(--primary)" }}
      onMouseEnter={() => !lockClosed && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {shouldExpand && (
          <h1 className="text-2xl font-black tracking-wide">
            <span style={{ color: "var(--bg)" }}>Code</span>
            <span className="text-white">Krafters</span>
          </h1>
        )}

        {/* HAMBURGER / CLOSE */}
        <button
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
              setLockClosed(true); // 🔒 stop hover reopen
            } else {
              setIsOpen(true);
              setLockClosed(false); // 🔓 allow hover again
            }
          }}
          className="w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* SUBTITLE */}
      {shouldExpand && (
        <p className="px-6 mt-2 text-xs font-bold tracking-widest text-white/60 uppercase">
          Attendance System
        </p>
      )}

      {/* NAVIGATION */}
      <nav className="flex-1 p-4 mt-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition"
            title={!shouldExpand ? item.label : ""}
          >
            <item.icon size={20} />
            {shouldExpand && <span className="font-semibold">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* LOGOUT */}
      <div className={`${shouldExpand ? "p-4" : "p-2"} border-t border-white/10`}>
        <button
          onClick={logout}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white font-semibold transition ${
            !shouldExpand && "justify-center"
          }`}
          style={{ background: "var(--secondary)" }}
        >
          <LogOut size={20} />
          {shouldExpand && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
