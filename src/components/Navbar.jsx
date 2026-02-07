import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const navigate = useNavigate()
  useTheme() // ensures re-render when theme changes

  const logout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <nav
      className="flex justify-between p-4 text-white"
      style={{ background: 'var(--primary)' }}
    >
      <h1 className="font-bold">CodeKrafters</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/settings">Settings</Link>

        <button
          onClick={logout}
          className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}
