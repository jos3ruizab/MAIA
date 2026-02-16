import { Trophy, BarChart3, ShoppingBag, Bot } from 'lucide-react'

const footerItems = [
  { label: 'Ranking', icon: Trophy },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Marketplace', icon: ShoppingBag },
]

export default function FooterBar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-maia-dark/90 backdrop-blur-xl border-t border-maia-border px-6 py-3 z-50">
      <div className="flex items-center justify-center gap-3">
        {footerItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-maia-text-dim hover:text-white hover:bg-white/5 transition-all cursor-pointer"
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}

        {/* AI Center Button */}
        <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-maia-purple to-maia-pink text-white font-bold text-sm tracking-wider hover:shadow-lg hover:shadow-maia-purple/30 transition-all cursor-pointer ml-2">
          <Bot className="w-5 h-5" />
          CENTRO DE IA
        </button>
      </div>
    </footer>
  )
}
