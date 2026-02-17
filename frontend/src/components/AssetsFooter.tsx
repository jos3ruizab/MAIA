import { Wallet, Award, Star, ShoppingBag, Bot } from 'lucide-react'

const footerItems = [
  { label: 'Portafolio', icon: Wallet, active: true },
  { label: 'Insignias', icon: Award, active: false },
  { label: 'Nivel Experto', icon: Star, active: false },
  { label: 'Mercado', icon: ShoppingBag, active: false },
]

export default function AssetsFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-maia-gold/40 to-transparent" />
      <div className="bg-maia-dark/95 backdrop-blur-xl px-6 py-3">
        <div className="flex items-center justify-center gap-3">
          {footerItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                item.active
                  ? 'bg-maia-purple/15 text-maia-purple-light border border-maia-purple/25'
                  : 'text-maia-text-dim hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}

          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-maia-purple to-maia-pink text-white font-bold text-sm tracking-wider hover:shadow-lg hover:shadow-maia-purple/30 transition-all cursor-pointer ml-2">
            <Bot className="w-5 h-5" />
            CENTRO DE IA
          </button>
        </div>
      </div>
    </footer>
  )
}
