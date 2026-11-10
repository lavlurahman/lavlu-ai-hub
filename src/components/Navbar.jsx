
import { Link, NavLink } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Explore Prompts', path: '/explore' },
  { label: 'Favorites', path: '/favorites' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-indigo-700">
          <Sparkles size={25} />
          Lavlu AI Hub
        </Link>

        <div className="flex items-center gap-5 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'text-indigo-700' : 'text-slate-600 hover:text-indigo-700'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
