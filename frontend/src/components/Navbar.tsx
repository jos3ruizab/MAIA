import { Diamond, Map, Briefcase, Target, Store, Vote, User } from 'lucide-react'

const navItems = [
  { label: 'MAPA', icon: Map, active: true },
  { label: 'MIS ACTIVOS', icon: Briefcase, active: false },
  { label: 'MISIÓN', icon: Target, active: false },
  { label: 'MERCADO', icon: Store, active: false },
  { label: 'DAO', icon: Vote, active: false },
]

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-maia-dark/80 backdrop-blur-xl border-b border-maia-border sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Diamond className="w-8 h-8 text-maia-purple" fill="currentColor" />
        <span className="font-display text-xl font-bold tracking-wider text-white">MAIA</span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              item.active
                ? 'bg-maia-purple/20 text-maia-purple-light border border-maia-purple/30'
                : 'text-maia-text-dim hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </div>

      {/* User Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-maia-purple/10 border border-maia-purple/20">
          <span className="text-xs text-maia-text-dim">Nivel</span>
          <span className="text-sm font-bold text-maia-purple-light">23</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-maia-cyan/10 border border-maia-cyan/20">
          <Diamond className="w-3.5 h-3.5 text-maia-cyan" fill="currentColor" />
          <span className="text-sm font-bold text-maia-cyan">1,250</span>
          <span className="text-xs text-maia-text-dim">$MAIA</span>
        </div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-maia-purple to-maia-pink flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      </div>
    </nav>
  )
}
