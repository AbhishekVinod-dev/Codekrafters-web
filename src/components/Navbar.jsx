import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'

export default function Navbar() {
  const logout = async () => {
    await signOut(auth)
  }

  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <h1 className="font-bold">MyApp</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  )
}