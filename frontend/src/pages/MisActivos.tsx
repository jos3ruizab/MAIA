import { useState } from 'react'
import Navbar from '../components/Navbar'
import AssetsFooter from '../components/AssetsFooter'
import {
  Sprout, Sun, Wallet, TrendingUp,
  Bean, Settings, Box, Filter
} from 'lucide-react'

const categories = ['Todos', 'Cacao', 'Energía', 'Tech', 'Glamping']

const assetCards = [
  {
    territory: 'FRUCTARA',
    name: 'Hacienda Cacao',
    value: '$10,800',
    nftLabel: 'TUS HACIENDAS',
    nftTag: 'NFT',
    nftProgress: { current: 4, total: 10 },
    stats: [
      { label: '$650 /sem', color: 'text-maia-cyan' },
      { label: 'APR: 15%', color: 'text-maia-cyan' },
    ],
    objectives: [
      { label: 'Rootfarte Fructara', done: true },
      { label: 'Cacao: 1,200 XP', done: false },
    ],
    icon: Sprout,
    iconBg: 'from-green-600 to-green-800',
    gradient: 'from-green-900/50 via-green-900/20 to-maia-card',
    borderColor: 'border-green-800/40 hover:border-green-600/50',
    accentColor: 'text-green-400',
    tagColor: 'bg-green-500/15 text-green-400 border-green-500/30',
  },
  {
    territory: 'ELEVARE',
    name: 'Planta Solar',
    value: '$15,200',
    nftLabel: 'TUS PANELES',
    nftTag: 'NFT',
    nftProgress: { current: 3, total: 10 },
    stats: [
      { label: '$420 /sem', color: 'text-maia-blue' },
      { label: 'NIVEL: Magnate', color: 'text-maia-gold' },
    ],
    objectives: [
      { label: '5 Tokens Energía', done: true },
      { label: 'Participación Event', done: false },
    ],
    icon: Sun,
    iconBg: 'from-blue-600 to-indigo-800',
    gradient: 'from-blue-900/50 via-blue-900/20 to-maia-card',
    borderColor: 'border-blue-800/40 hover:border-blue-600/50',
    accentColor: 'text-blue-400',
    tagColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  },
]

export default function MisActivos() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  return (
    <div className="min-h-screen bg-maia-darker flex flex-col">
      {/* Gold ornamental top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-maia-gold/60 to-transparent" />
      <Navbar />

      <main className="flex-1 pb-24 overflow-y-auto">
        {/* Page Title Banner */}
        <div className="relative text-center py-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-maia-gold/8 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-maia-gold/5 rounded-full blur-[100px]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-maia-gold/20 bg-maia-gold/5 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-maia-gold" />
              <span className="font-display text-xs tracking-[0.3em] text-maia-gold uppercase">Portafolio Activo</span>
              <div className="w-1.5 h-1.5 rounded-full bg-maia-gold" />
            </div>
            <h1 className="font-display text-3xl font-bold tracking-wider text-white">
              MIS ACTIVOS
            </h1>
          </div>
        </div>

        {/* Portfolio Summary Bar */}
        <div className="px-6 mb-6">
          <div className="bg-maia-card rounded-2xl border border-maia-border p-5">
            <div className="flex items-center justify-between">
              {/* Value */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-maia-purple to-maia-purple-light/80 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-maia-text-dim uppercase tracking-wider">Mi Portafolio</p>
                  <p className="text-2xl font-bold text-white">$38,750</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-maia-cyan/10 border border-maia-cyan/20">
                  <TrendingUp className="w-4 h-4 text-maia-cyan" />
                  <span className="text-sm font-bold text-maia-cyan">+$1,960</span>
                  <span className="text-xs text-maia-text-dim">/sem</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                  <Bean className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-bold text-white">47</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                  <Settings className="w-4 h-4 text-maia-purple-light" />
                  <span className="text-sm font-bold text-white">23</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                  <Box className="w-4 h-4 text-maia-blue" />
                  <span className="text-sm font-bold text-white">32</span>
                </div>
              </div>

              {/* Sell Button */}
              <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-maia-gold to-amber-600 text-white font-bold text-sm tracking-wider uppercase hover:shadow-lg hover:shadow-maia-gold/25 transition-all cursor-pointer">
                VENDER ACTIVOS
              </button>
            </div>
          </div>
        </div>

        {/* Mini Map Section */}
        <div className="px-6 mb-6">
          <div className="relative h-52 rounded-2xl overflow-hidden border border-maia-border">
            {/* Ocean background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c2340] via-[#0e3055] to-[#0a1e35]" />

            {/* Water texture */}
            <svg className="absolute inset-0 w-full h-full opacity-8" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mini-waves" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0 10 Q30 0 60 10 Q90 20 120 10" fill="none" stroke="#3b82f6" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mini-waves)" />
            </svg>

            {/* Mini island */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 250" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="miniIsland" cx="50%" cy="50%" r="35%">
                  <stop offset="0%" stopColor="#2d5a27" />
                  <stop offset="100%" stopColor="#0d2e0d" />
                </radialGradient>
              </defs>
              <path
                d="M250 60 Q300 30 380 45 Q440 25 500 50 Q560 30 580 65 Q610 90 600 120 Q620 155 590 175 Q560 200 500 195 Q440 210 380 195 Q320 210 280 185 Q250 195 240 165 Q220 135 230 105 Q220 75 250 60Z"
                fill="url(#miniIsland)"
                stroke="#1a3a1a"
                strokeWidth="1.5"
              />
              <path
                d="M250 60 Q300 30 380 45 Q440 25 500 50 Q560 30 580 65 Q610 90 600 120 Q620 155 590 175 Q560 200 500 195 Q440 210 380 195 Q320 210 280 185 Q250 195 240 165 Q220 135 230 105 Q220 75 250 60Z"
                fill="none"
                stroke="#c4a35a"
                strokeWidth="1.5"
                opacity="0.15"
              />
            </svg>

            {/* Territory Markers on mini map */}
            <div className="absolute left-[36%] top-[38%] flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-lg">
                <Sprout className="w-4 h-4 text-white" />
              </div>
              <div className="px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm border border-white/10">
                <p className="font-display text-[10px] tracking-widest text-green-400 font-bold">FRUCTARA</p>
                <p className="text-[9px] text-white/50">Hacienda Cacao</p>
              </div>
            </div>

            <div className="absolute left-[58%] top-[30%] flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center shadow-lg">
                <Sun className="w-4 h-4 text-white" />
              </div>
              <div className="px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm border border-white/10">
                <p className="font-display text-[10px] tracking-widest text-blue-400 font-bold">ELEVARE</p>
                <p className="text-[9px] text-white/50">Planta Solar</p>
              </div>
            </div>

            {/* Fog overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-maia-darker/60 via-transparent to-maia-darker/30" />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="px-6 mb-6">
          <div className="flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-maia-purple/20 text-maia-purple-light border border-maia-purple/30'
                    : 'bg-white/5 text-maia-text-dim hover:text-white hover:bg-white/8 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
            <button className="ml-auto p-2 rounded-xl bg-white/5 text-maia-text-dim hover:text-white hover:bg-white/8 transition-all cursor-pointer border border-transparent">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Asset Cards */}
        <div className="px-6">
          <div className="grid grid-cols-2 gap-4">
            {assetCards.map((card) => (
              <div
                key={card.territory}
                className={`bg-maia-card rounded-2xl border ${card.borderColor} overflow-hidden transition-all`}
              >
                {/* Card Header with gradient */}
                <div className={`relative bg-gradient-to-r ${card.gradient} p-5`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center shadow-lg`}>
                        <card.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-display text-xs tracking-widest text-maia-purple-light">{card.territory}</p>
                        <p className="text-base font-bold text-white">{card.name}</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold text-white">{card.value}</p>
                  </div>

                  {/* NFT Progress */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-maia-text-dim">{card.nftLabel}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${card.tagColor}`}>
                        {card.nftTag}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-white">
                      {card.nftProgress.current}/{card.nftProgress.total}
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${card.iconBg}`}
                      style={{ width: `${(card.nftProgress.current / card.nftProgress.total) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  {/* Stats Row */}
                  <div className="flex items-center gap-3 mb-4">
                    {card.stats.map((stat, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 rounded-lg bg-white/5 text-xs font-semibold ${stat.color}`}
                      >
                        {stat.label}
                      </span>
                    ))}
                  </div>

                  {/* Objectives */}
                  <div>
                    <p className="text-xs text-maia-text-dim uppercase tracking-wider mb-2">Objetivos</p>
                    <div className="flex flex-col gap-2">
                      {card.objectives.map((obj, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            obj.done
                              ? 'border-maia-cyan bg-maia-cyan/20'
                              : 'border-white/20'
                          }`}>
                            {obj.done && (
                              <div className="w-1.5 h-1.5 rounded-full bg-maia-cyan" />
                            )}
                          </div>
                          <span className={`text-xs ${obj.done ? 'text-white' : 'text-maia-text-dim'}`}>
                            {obj.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <AssetsFooter />
    </div>
  )
}
