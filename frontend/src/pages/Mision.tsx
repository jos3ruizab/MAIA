import { useState } from 'react'
import Navbar from '../components/Navbar'
import MissionFooter from '../components/MissionFooter'
import {
  Diamond, Gift, ChevronRight, Gem,
  Bean, Sun, Vote, TreePine, Filter, Sparkles
} from 'lucide-react'

const categories = ['Todos', 'Cacao', 'Energía', 'Tech', 'Glamping']

const missions = [
  {
    title: 'FORTUNIA QUEST',
    value: '$10,800',
    description: 'Recolecta 10 Recursos',
    current: 7,
    total: 10,
    rewards: ['300 $MAIA', '2x Cofre de Recursos'],
    icon: Bean,
    iconBg: 'from-green-600 to-emerald-800',
    gradient: 'from-green-900/60 via-green-900/20 to-maia-card',
    borderColor: 'border-green-800/40 hover:border-green-500/50',
    barColor: 'from-green-500 to-emerald-400',
    accentColor: 'text-green-400',
  },
  {
    title: 'DESAFÍO VITALIS',
    value: '',
    description: 'Completa 3 Proyectos Solares',
    current: 2,
    total: 3,
    rewards: ['+400 $MAIA', 'Solar Relic'],
    icon: Sun,
    iconBg: 'from-amber-500 to-orange-700',
    gradient: 'from-amber-900/60 via-amber-900/20 to-maia-card',
    borderColor: 'border-amber-800/40 hover:border-amber-500/50',
    barColor: 'from-amber-500 to-yellow-400',
    accentColor: 'text-amber-400',
  },
  {
    title: 'DAO VOTING',
    value: '$11,250',
    description: 'Participa en 2 Votaciones',
    current: 1,
    total: 2,
    rewards: ['+200 $MAIA', 'Insignia de Ciudadanía'],
    icon: Vote,
    iconBg: 'from-purple-600 to-indigo-800',
    gradient: 'from-purple-900/60 via-purple-900/20 to-maia-card',
    borderColor: 'border-purple-800/40 hover:border-purple-500/50',
    barColor: 'from-purple-500 to-violet-400',
    accentColor: 'text-purple-400',
  },
  {
    title: 'HARMONIA JOURNEY',
    value: '$7,500',
    description: 'Recolecta Recursos y Asiste a Evento',
    current: 3,
    total: 8,
    rewards: ['500 $MAIA', 'Harmonia Chispa'],
    icon: TreePine,
    iconBg: 'from-teal-500 to-cyan-700',
    gradient: 'from-teal-900/60 via-teal-900/20 to-maia-card',
    borderColor: 'border-teal-800/40 hover:border-teal-500/50',
    barColor: 'from-teal-500 to-cyan-400',
    accentColor: 'text-teal-400',
  },
]

export default function Mision() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  return (
    <div className="min-h-screen bg-maia-darker flex flex-col">
      {/* Gold ornamental top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-maia-gold/60 to-transparent" />
      <Navbar />

      <main className="flex-1 pb-24 overflow-y-auto">
        {/* Landscape Background Section */}
        <div className="relative h-56 overflow-hidden">
          {/* Sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a2a] via-[#0e2820] to-maia-darker" />

          {/* Landscape SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="hillGrad1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a5c2a" />
                <stop offset="100%" stopColor="#0d3318" />
              </linearGradient>
              <linearGradient id="hillGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#165425" />
                <stop offset="100%" stopColor="#0a2a12" />
              </linearGradient>
              <linearGradient id="skyGlow" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.12" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Golden sky glow */}
            <rect width="1200" height="150" fill="url(#skyGlow)" />

            {/* Far hills */}
            <path d="M0 180 Q150 120 300 160 Q450 110 600 150 Q750 100 900 140 Q1050 110 1200 160 L1200 300 L0 300Z" fill="url(#hillGrad2)" opacity="0.6" />

            {/* Near hills */}
            <path d="M0 210 Q200 160 400 200 Q550 170 700 195 Q850 165 1000 190 Q1100 175 1200 200 L1200 300 L0 300Z" fill="url(#hillGrad1)" opacity="0.8" />

            {/* Solar panels */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <rect
                key={`sp-${i}`}
                x={700 + (i % 4) * 30}
                y={175 + Math.floor(i / 4) * 22}
                width="22"
                height="14"
                rx="1"
                fill="#3b82f6"
                opacity="0.3"
                transform={`rotate(-8, ${700 + (i % 4) * 30}, ${175 + Math.floor(i / 4) * 22})`}
              />
            ))}

            {/* Wind turbines */}
            {[350, 420, 490].map((x, i) => (
              <g key={`wt-${i}`} opacity="0.4">
                <line x1={x} y1={140 - i * 5} x2={x} y2={200 - i * 3} stroke="#94a3b8" strokeWidth="2" />
                <circle cx={x} cy={140 - i * 5} r="2" fill="#e2e8f0" />
                <line x1={x} y1={140 - i * 5} x2={x - 12} y2={130 - i * 5} stroke="#e2e8f0" strokeWidth="1.5" />
                <line x1={x} y1={140 - i * 5} x2={x + 10} y2={128 - i * 5} stroke="#e2e8f0" strokeWidth="1.5" />
                <line x1={x} y1={140 - i * 5} x2={x + 2} y2={152 - i * 5} stroke="#e2e8f0" strokeWidth="1.5" />
              </g>
            ))}

            {/* Dome buildings */}
            <ellipse cx="580" cy="190" rx="18" ry="14" fill="#1a3a5a" opacity="0.4" stroke="#3b82f6" strokeWidth="0.5" />
            <ellipse cx="620" cy="185" rx="14" ry="11" fill="#1a3a5a" opacity="0.4" stroke="#3b82f6" strokeWidth="0.5" />

            {/* Trees */}
            {[100, 140, 170, 220, 260, 900, 950, 1000, 1050, 1100].map((x, i) => (
              <g key={`tree-${i}`} opacity="0.5">
                <rect x={x - 1.5} y={200 - i % 3 * 4} width="3" height="10" fill="#2d3a20" />
                <ellipse cx={x} cy={195 - i % 3 * 4} rx="8" ry="10" fill="#1a5c2a" />
              </g>
            ))}
          </svg>

          {/* Overlay fading into dark */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-maia-darker" />

          {/* Title Banner - Ornate Cartouche */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Gold frame lines */}
              <div className="absolute -inset-x-16 -inset-y-4">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maia-gold/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maia-gold/50 to-transparent" />
                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-maia-gold/30 to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-maia-gold/30 to-transparent" />
                {/* Corner ornaments */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-maia-gold/50" />
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-maia-gold/50" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-maia-gold/50" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-maia-gold/50" />
              </div>

              <div className="px-10 py-4 bg-maia-dark/70 backdrop-blur-md rounded-lg border border-maia-gold/20">
                <div className="flex items-center gap-3 justify-center mb-1">
                  <div className="w-6 h-px bg-gradient-to-r from-transparent to-maia-gold/60" />
                  <Sparkles className="w-4 h-4 text-maia-gold" />
                  <div className="w-6 h-px bg-gradient-to-l from-transparent to-maia-gold/60" />
                </div>
                <h1 className="font-display text-3xl font-bold tracking-[0.25em] text-white text-center">
                  MISIÓN
                </h1>
                <div className="flex items-center gap-2 justify-center mt-1">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-maia-gold/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-maia-gold/50" />
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-maia-gold/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Card (Tarjeta) + Status */}
        <div className="px-6 -mt-4 relative z-10 mb-6">
          <div className="bg-maia-card rounded-2xl border border-maia-gold/20 overflow-hidden">
            <div className="p-5 flex items-center justify-between">
              {/* Left: Mission progress */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-maia-gold/20 to-amber-900/30 border border-maia-gold/20 flex items-center justify-center">
                    <Gem className="w-6 h-6 text-maia-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-maia-text-dim uppercase tracking-wider">Tarjeta de Misión</p>
                    <p className="text-xl font-bold text-white">23<span className="text-maia-text-dim font-normal">/25</span></p>
                  </div>
                </div>

                <div className="w-px h-10 bg-maia-border" />

                <div className="flex items-center gap-2">
                  <Diamond className="w-4 h-4 text-maia-purple-light" fill="currentColor" />
                  <div>
                    <p className="text-xs text-maia-text-dim">Recompensa</p>
                    <p className="text-sm font-bold text-maia-purple-light">1,200</p>
                  </div>
                </div>
              </div>

              {/* Center: Weekly rewards */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-xs text-maia-text-dim">Recompensas Semanales</p>
                  <p className="text-sm font-bold text-maia-cyan">+1,000 $MAIA /sem</p>
                </div>
                <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-maia-cyan to-maia-cyan-dark flex items-center justify-center hover:shadow-lg hover:shadow-maia-cyan/25 transition-all cursor-pointer">
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Right: Status badge */}
              <div className="px-4 py-1.5 rounded-full bg-maia-cyan/15 border border-maia-cyan/30">
                <span className="text-xs font-bold tracking-wider text-maia-cyan uppercase">EN CURSO</span>
              </div>
            </div>
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

        {/* Mission Cards Grid */}
        <div className="px-6">
          <div className="grid grid-cols-2 gap-4">
            {missions.map((mission) => (
              <div
                key={mission.title}
                className={`bg-maia-card rounded-2xl border ${mission.borderColor} overflow-hidden transition-all cursor-pointer group`}
              >
                {/* Card top gradient */}
                <div className={`relative bg-gradient-to-r ${mission.gradient} p-5`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${mission.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <mission.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className={`font-display text-xs tracking-widest ${mission.accentColor} font-bold`}>
                          {mission.title}
                        </p>
                        <p className="text-xs text-maia-text-dim mt-0.5">{mission.description}</p>
                      </div>
                    </div>
                    {mission.value && (
                      <p className="text-lg font-bold text-white">{mission.value}</p>
                    )}
                  </div>

                  {/* Progress */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-maia-text-dim">Progreso</span>
                    <span className="text-xs font-bold text-white">{mission.current}/{mission.total}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${mission.barColor} transition-all`}
                      style={{ width: `${(mission.current / mission.total) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Card body: Rewards */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-3.5 h-3.5 text-maia-gold" />
                    <span className="text-xs text-maia-text-dim uppercase tracking-wider">Recompensas</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mission.rewards.map((reward, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-xs font-medium text-white"
                      >
                        {reward}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <MissionFooter />
    </div>
  )
}
