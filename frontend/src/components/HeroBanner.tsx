import { TrendingUp, Users, BarChart3 } from 'lucide-react'

const stats = [
  { label: 'ACTIVOS', value: '128K+', icon: BarChart3 },
  { label: 'INVERSORES', value: '32,500', icon: Users },
  { label: 'RENDIMIENTO', value: '12.4% APY', icon: TrendingUp },
]

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-maia-purple/15 via-maia-dark to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-maia-purple/10 rounded-full blur-[120px]" />

      <div className="relative px-6 pt-10 pb-8 text-center">
        {/* Title */}
        <h1 className="font-display text-5xl font-bold tracking-wider text-white mb-2">
          ALTAL<span className="text-maia-purple-light">Ä</span>IA
        </h1>
        <p className="text-lg text-maia-text-dim mb-8">
          Metaverso de Inversión Gamificada
        </p>

        {/* Stats Bar */}
        <div className="flex justify-center gap-10 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-maia-card border border-maia-border flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-maia-purple-light" />
              </div>
              <div className="text-left">
                <p className="text-xs text-maia-text-dim uppercase tracking-wider">{stat.label}</p>
                <p className="text-lg font-bold text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-maia-cyan to-maia-cyan-dark text-white font-bold text-sm tracking-wider uppercase hover:shadow-lg hover:shadow-maia-cyan/25 transition-all cursor-pointer">
          EXPLORAR MAPA
        </button>
      </div>
    </section>
  )
}
