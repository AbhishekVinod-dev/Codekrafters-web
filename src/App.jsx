import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Attendance from "./pages/Attendance";
import Events from "./pages/Events";
import TaskDistributor from "./pages/TaskDistributor";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Settings from "./pages/Settings";
import { useSidebar } from "./context/SidebarContext";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

/* ---------- Layout that includes Navbar + theme ---------- */
function AppLayout({ children }) {
  const { isOpen } = useSidebar();
  return (
    <div
      className={`min-h-screen text-slate-900 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-20'}`}
      style={{ background: "#F2F0D8" }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <div style={{ background: "#F2F0D8" }} className="min-h-screen" />;

  return (
    <>
      {user && <Navbar />}
      <Routes>
      {/* ---------- PUBLIC ROUTES ---------- */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      {/* ---------- PROTECTED ROUTES WITH NAVBAR ---------- */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Home />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/attendance"
        element={
          <ProtectedRoute>
            <Attendance />
          </ProtectedRoute>
        }
      />
      <Route
        path="/attendance"
        element={
          <ProtectedRoute>
            <Attendance />
          </ProtectedRoute>
        }
      />


      <Route
        path="/events"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Events />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <AppLayout>
              <TaskDistributor />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Settings />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      </Routes>
    </>
  );
}
