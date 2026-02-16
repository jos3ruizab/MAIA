import { Wallet, TrendingUp } from 'lucide-react'

const assets = [
  { name: 'Cacao Fructara', earnings: '+$650/sem', color: 'bg-green-500' },
  { name: 'Eco Glamping', earnings: '+$420/sem', color: 'bg-teal-500' },
  { name: 'Tech Startup', earnings: '+$890/sem', color: 'bg-blue-500' },
]

export default function Portfolio() {
  return (
    <div className="bg-maia-card rounded-2xl border border-maia-border p-5 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Wallet className="w-5 h-5 text-maia-purple-light" />
        <h2 className="text-base font-bold text-white">Mi Portafolio</h2>
      </div>

      {/* Total Value */}
      <div className="mb-5">
        <p className="text-xs text-maia-text-dim mb-1">Valor Total</p>
        <p className="text-3xl font-bold text-white">$38,750</p>
      </div>

      {/* Assets */}
      <div className="flex flex-col gap-3">
        {assets.map((asset) => (
          <div
            key={asset.name}
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2.5 h-2.5 rounded-full ${asset.color}`} />
              <span className="text-sm text-maia-text">{asset.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-maia-cyan" />
              <span className="text-sm font-semibold text-maia-cyan">{asset.earnings}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
