import Navbar from '../components/Navbar'
import DAOFooter from '../components/DAOFooter'
import {
  Sparkles, Users, ThumbsUp, ThumbsDown, MinusCircle,
  Clock, Crown, Trophy
} from 'lucide-react'

const voteDistribution = [
  { label: 'Energía', pct: 35, color: '#3b82f6' },
  { label: 'Agricultura', pct: 25, color: '#22c55e' },
  { label: 'Tech', pct: 20, color: '#f97316' },
  { label: 'Glamping', pct: 15, color: '#06d6a0' },
  { label: 'Otros', pct: 5, color: '#a78bfa' },
]

const activeVotings = [
  {
    title: 'Expansión Solar Fase II',
    description: 'Propuesta para expandir la capacidad de energía solar en el territorio Elevare',
    aFavor: 1234,
    enContra: 456,
    abstencion: 180,
    total: 1870,
    remaining: '2d 14h restantes',
    status: 'active' as const,
  },
  {
    title: 'Nuevo Territorio: Frutunia Norte',
    description: 'Apertura de un nuevo territorio para expansión de plantaciones de cacao',
    aFavor: 890,
    enContra: 320,
    abstencion: 150,
    total: 1360,
    remaining: '5d 8h restantes',
    status: 'active' as const,
  },
]

const ranking = [
  { name: 'CryptoVerde', pts: 12450, color: 'from-maia-gold to-amber-600' },
  { name: 'SolarPioneer', pts: 11200, color: 'from-gray-300 to-gray-500' },
  { name: 'CacaoMaster', pts: 9800, color: 'from-amber-700 to-amber-900' },
  { name: 'EcoBuilder', pts: 8650, color: 'from-maia-purple to-maia-purple-light' },
  { name: 'DAOWhale', pts: 7300, color: 'from-maia-cyan to-teal-500' },
]

function DonutChart() {
  const segments = voteDistribution
  let cumulative = 0
  const radius = 52
  const circumference = 2 * Math.PI * radius

  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg viewBox="0 0 140 140" className="w-full h-full -rotate-90">
        {segments.map((seg) => {
          const dashLength = (seg.pct / 100) * circumference
          const dashGap = circumference - dashLength
          const offset = -(cumulative / 100) * circumference
          cumulative += seg.pct
          return (
            <circle
              key={seg.label}
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth="14"
              strokeDasharray={`${dashLength} ${dashGap}`}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          )
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white">100%</span>
        <span className="text-[10px] text-maia-text-dim">Total</span>
      </div>
    </div>
  )
}

export default function Dao() {
  return (
    <div className="min-h-screen bg-maia-darker flex flex-col">
      {/* Gold ornamental top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-maia-gold/60 to-transparent" />
      <Navbar />

      <main className="flex-1 pb-24 overflow-y-auto">
        {/* Landscape Background + Title */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a] via-[#0e1f30] to-maia-darker" />

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 250" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="daoHill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a3a5a" />
                <stop offset="100%" stopColor="#0a1e35" />
              </linearGradient>
            </defs>
            <path d="M0 170 Q200 120 400 155 Q600 110 800 145 Q1000 115 1200 160 L1200 250 L0 250Z" fill="url(#daoHill)" opacity="0.5" />
            <path d="M0 200 Q300 165 500 190 Q700 160 900 185 Q1100 170 1200 195 L1200 250 L0 250Z" fill="url(#daoHill)" opacity="0.7" />
            {/* Structures */}
            {[150, 190, 230, 500, 540, 580, 850, 900, 950].map((x, i) => (
              <rect key={`d-${i}`} x={x} y={175 - [18, 24, 14, 20, 28, 16, 22, 30, 14][i]} width="14" height={[18, 24, 14, 20, 28, 16, 22, 30, 14][i]} rx="2" fill="#7c3aed" opacity="0.12" />
            ))}
            {/* Connecting lines between buildings */}
            <path d="M170 170 L520 160 L880 165" fill="none" stroke="#7c3aed" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />
          </svg>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-maia-darker" />

          {/* Title Cartouche */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-x-16 -inset-y-4">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maia-gold/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maia-gold/50 to-transparent" />
                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-maia-gold/30 to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-maia-gold/30 to-transparent" />
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
                  DAO
                </h1>
                <p className="text-xs text-maia-text-dim text-center mt-1 tracking-wider">Gobernanza Descentralizada</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid: 2 columns */}
        <div className="px-6 -mt-2 relative z-10">
          <div className="grid grid-cols-12 gap-4">

            {/* Left Column */}
            <div className="col-span-5 flex flex-col gap-4">

              {/* Miembros Activos */}
              <div className="bg-maia-card rounded-2xl border border-maia-border p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-maia-purple-light" />
                  <h2 className="text-base font-bold text-white">Miembros Activos</h2>
                </div>

                <div className="flex items-center gap-6">
                  {/* Number */}
                  <div>
                    <p className="text-3xl font-bold text-white">2,450</p>
                    <p className="text-xs text-maia-text-dim">miembros registrados</p>
                  </div>

                  {/* Circular progress */}
                  <div className="relative w-20 h-20 ml-auto">
                    <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                      <circle cx="40" cy="40" r="32" fill="none" stroke="#1e1e3e" strokeWidth="8" />
                      <circle
                        cx="40" cy="40" r="32" fill="none"
                        stroke="#7c3aed" strokeWidth="8"
                        strokeDasharray={`${0.78 * 2 * Math.PI * 32} ${0.22 * 2 * Math.PI * 32}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-sm font-bold text-maia-purple-light">78%</span>
                      <span className="text-[8px] text-maia-text-dim leading-tight">Particip.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distribución de Votos */}
              <div className="bg-maia-card rounded-2xl border border-maia-border p-5">
                <h2 className="text-base font-bold text-white mb-4">Distribución de Votos</h2>
                <DonutChart />
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                  {voteDistribution.map((seg) => (
                    <div key={seg.label} className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: seg.color }} />
                      <span className="text-xs text-maia-text-dim">{seg.label}</span>
                      <span className="text-xs font-bold text-white ml-auto">{seg.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-7 flex flex-col gap-4">

              {/* Votaciones Activas */}
              <div className="bg-maia-card rounded-2xl border border-maia-border p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-bold text-white">Votaciones Activas</h2>
                  <span className="px-3 py-1 rounded-full bg-maia-cyan/15 border border-maia-cyan/30 text-[10px] font-bold text-maia-cyan uppercase tracking-wider">
                    {activeVotings.length} Abiertas
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {activeVotings.map((vote) => (
                    <div key={vote.title} className="bg-maia-darker/60 rounded-xl border border-maia-border p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-sm font-bold text-white mb-1">{vote.title}</p>
                          <p className="text-xs text-maia-text-dim">{vote.description}</p>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 flex-shrink-0 ml-3">
                          <Clock className="w-3 h-3 text-maia-gold" />
                          <span className="text-[10px] font-medium text-maia-gold whitespace-nowrap">{vote.remaining}</span>
                        </div>
                      </div>

                      {/* Vote bars */}
                      <div className="space-y-2 mb-3">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="flex items-center gap-1.5 text-xs text-green-400">
                              <ThumbsUp className="w-3 h-3" /> A favor
                            </span>
                            <span className="text-xs font-bold text-white">{vote.aFavor.toLocaleString()}</span>
                          </div>
                          <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" style={{ width: `${(vote.aFavor / vote.total) * 100}%` }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="flex items-center gap-1.5 text-xs text-red-400">
                              <ThumbsDown className="w-3 h-3" /> En contra
                            </span>
                            <span className="text-xs font-bold text-white">{vote.enContra.toLocaleString()}</span>
                          </div>
                          <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-red-500 to-rose-400 rounded-full" style={{ width: `${(vote.enContra / vote.total) * 100}%` }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="flex items-center gap-1.5 text-xs text-maia-text-dim">
                              <MinusCircle className="w-3 h-3" /> Abstención
                            </span>
                            <span className="text-xs font-bold text-white">{vote.abstencion.toLocaleString()}</span>
                          </div>
                          <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-gray-500 to-gray-400 rounded-full" style={{ width: `${(vote.abstencion / vote.total) * 100}%` }} />
                          </div>
                        </div>
                      </div>

                      <button className="w-full py-2 rounded-xl bg-gradient-to-r from-maia-purple to-indigo-600 text-white font-bold text-xs tracking-wider uppercase hover:shadow-lg hover:shadow-maia-purple/25 transition-all cursor-pointer">
                        VOTAR
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ranking de Influencia */}
              <div className="bg-maia-card rounded-2xl border border-maia-border p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-maia-gold" />
                  <h2 className="text-base font-bold text-white">Ranking de Influencia</h2>
                </div>

                <div className="space-y-2">
                  {ranking.map((user, i) => (
                    <div key={user.name} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/3 hover:bg-white/6 transition-colors">
                      {/* Position */}
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        i === 0 ? 'bg-maia-gold/20 text-maia-gold' :
                        i === 1 ? 'bg-gray-400/15 text-gray-300' :
                        i === 2 ? 'bg-amber-700/20 text-amber-600' :
                        'bg-white/5 text-maia-text-dim'
                      }`}>
                        {i < 3 ? <Crown className="w-3.5 h-3.5" /> : i + 1}
                      </div>

                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${user.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-[10px] font-bold text-white">{user.name[0]}</span>
                      </div>

                      {/* Name */}
                      <span className="text-sm font-medium text-white flex-1">{user.name}</span>

                      {/* Points */}
                      <span className="text-xs font-bold text-maia-purple-light">{user.pts.toLocaleString()} pts</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <DAOFooter />
    </div>
  )
}
