import { Swords, CalendarClock, Lock, Mountain, Globe, Bot } from 'lucide-react'

const tabs = [
  { label: 'Misiones Activas', icon: Swords, active: true },
  { label: 'Episodios Futuros', icon: CalendarClock, active: false },
  { label: '', icon: Lock, active: false, iconOnly: true },
  { label: 'Harmonia', icon: Mountain, active: false },
  { label: 'Experiencia Web3', icon: Globe, active: false },
]

export default function MissionFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-maia-gold/40 to-transparent" />
      <div className="bg-maia-dark/95 backdrop-blur-xl px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Tabs */}
          <div className="flex items-center gap-1">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium tracking-wider transition-all cursor-pointer ${
                  tab.active
                    ? 'bg-maia-gold/15 text-maia-gold border border-maia-gold/30'
                    : 'text-maia-text-dim hover:text-white hover:bg-white/5'
                } ${tab.iconOnly ? 'px-2.5' : ''}`}
              >
                <tab.icon className="w-4 h-4" />
                {!tab.iconOnly && tab.label}
              </button>
            ))}
          </div>

          {/* Right: AI Button */}
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-maia-purple to-maia-pink text-white font-bold text-sm tracking-wider hover:shadow-lg hover:shadow-maia-purple/30 transition-all cursor-pointer">
            <Bot className="w-5 h-5" />
            CENTRO DE IA
          </button>
        </div>
      </div>
    </footer>
  )
}
