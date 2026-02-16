import { Home, BarChart3, Sun, Diamond, Coins, Bell } from 'lucide-react'

const tabs = [
  { label: 'BASE', icon: Home, active: false },
  { label: 'ANALYSIS', icon: BarChart3, active: false },
  { label: 'SOLAR ENERGY', icon: Sun, active: true },
]

const resources = [
  { icon: Diamond, value: '1,250', color: 'text-maia-purple-light' },
  { icon: Coins, value: '8,430', color: 'text-maia-gold' },
]

export default function MapFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      {/* Gold ornamental top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-maia-gold/60 to-transparent" />

      <div className="bg-maia-dark/95 backdrop-blur-xl px-6 py-3 flex items-center justify-between">
        {/* Left: Tabs */}
        <div className="flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wider transition-all cursor-pointer ${
                tab.active
                  ? 'bg-maia-gold/15 text-maia-gold border border-maia-gold/30'
                  : 'text-maia-text-dim hover:text-white hover:bg-white/5'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right: Resources */}
        <div className="flex items-center gap-4">
          {resources.map((res, i) => (
            <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <res.icon className={`w-4 h-4 ${res.color}`} fill="currentColor" />
              <span className="text-xs font-bold text-white">{res.value}</span>
            </div>
          ))}
          <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <Bell className="w-4 h-4 text-maia-text-dim" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>
    </footer>
  )
}
