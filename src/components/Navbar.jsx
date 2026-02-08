import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { useTheme } from '../context/ThemeContext'
import { useSidebar } from '../context/SidebarContext'
import { Home, ClipboardList, Settings, LogOut, Menu, X, Calendar, ListTodo } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const navigate = useNavigate()
  const { isOpen, setIsOpen } = useSidebar()
  const [isHovered, setIsHovered] = useState(false)
  useTheme()

  const shouldExpand = isOpen || isHovered

  const logout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const navItems = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'Attendance', icon: ClipboardList, path: '/attendance' },
    { label: 'Events', icon: Calendar, path: '/events' },
    { label: 'Tasks', icon: ListTodo, path: '/tasks' },
    { label: 'Settings', icon: Settings, path: '/settings' },
  ]

  return (
    <aside 
      className={`fixed left-0 top-0 h-screen bg-yellow-100 shadow-lg z-50 transition-all duration-700 ease-in-out flex flex-col ${
        shouldExpand ? 'w-64' : 'w-20'
      }`}
      style={{ backgroundColor: '#FEEEB4' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Toggle */}
      <div className="p-6 border-b border-yellow-200 flex items-center justify-between gap-2">
        {shouldExpand && (
          <h1 className="text-3xl font-black tracking-wide text-black">
            <span className="text-yellow-400">Code</span>Krafters
          </h1>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-yellow-300 rounded-lg transition-colors text-gray-800 flex-shrink-0"
          title={isOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>
      </div>

      {/* Subtitle */}
      {shouldExpand && (
        <p className="text-sm font-bold text-gray-700 px-6 uppercase tracking-widest">Attendance System</p>
      )}

      {/* Navigation Items */}
      <nav className="p-4 space-y-2 mt-6 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-yellow-200 transition-colors text-gray-700 hover:text-gray-900"
            title={!shouldExpand ? item.label : ''}
          >
            <item.icon size={20} className="flex-shrink-0" />
            {shouldExpand && <span className="font-black text-base">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className={`${shouldExpand ? 'p-4' : 'p-2'} border-t border-yellow-200`}>
        <button
          onClick={logout}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors text-white font-medium ${
            !shouldExpand && 'justify-center'
          }`}
          title={!shouldExpand ? 'Logout' : ''}
        >
          <LogOut size={20} className="flex-shrink-0" />
          {shouldExpand && <span className="font-black">Logout</span>}
        </button>
      </div>
    </aside>
  )
}
