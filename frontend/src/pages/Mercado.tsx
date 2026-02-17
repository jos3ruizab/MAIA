import { useState } from 'react'
import Navbar from '../components/Navbar'
import MarketFooter from '../components/MarketFooter'
import {
  Sparkles, Search, ChevronDown, SlidersHorizontal,
  Sprout, Sun, Rocket, TreePine, Droplets, LayoutGrid, List,
  Diamond, TrendingUp, Star, Filter
} from 'lucide-react'

const categories = ['Todos', 'RWA', 'Energía', 'Tech', 'Agricultura', 'Glamping']

const nftProjects = [
  {
    territory: 'CURUMÉIA',
    name: 'Planta Hidropónica',
    tier: 'Básico',
    tierColor: 'bg-maia-cyan/15 text-maia-cyan border-maia-cyan/30',
    earnings: '+$700/sem',
    apr: '9% APR',
    price: '$4,730',
    premium: true,
    icon: Droplets,
    iconBg: 'from-cyan-600 to-teal-800',
    cardGradient: 'from-cyan-900/30 to-transparent',
    illustrationColor: 'from-teal-800 to-cyan-900',
  },
  {
    territory: 'CAPITOPIA',
    name: 'Startup Hub',
    tier: 'Plus',
    tierColor: 'bg-maia-gold/15 text-maia-gold border-maia-gold/30',
    earnings: '+$150/sem',
    apr: '40% ROI',
    price: '$3,250',
    premium: true,
    icon: Rocket,
    iconBg: 'from-orange-500 to-red-700',
    cardGradient: 'from-orange-900/30 to-transparent',
    illustrationColor: 'from-orange-800 to-red-900',
  },
  {
    territory: 'ELEVARE',
    name: 'Planta Solar',
    tier: 'Básico',
    tierColor: 'bg-maia-cyan/15 text-maia-cyan border-maia-cyan/30',
    earnings: '+$100/sem',
    apr: '8% APR',
    price: '$5,900',
    premium: false,
    icon: Sun,
    iconBg: 'from-blue-500 to-indigo-700',
    cardGradient: 'from-blue-900/30 to-transparent',
    illustrationColor: 'from-blue-800 to-indigo-900',
  },
  {
    territory: 'HARMONIA',
    name: 'Eco Glamping',
    tier: 'Plus',
    tierColor: 'bg-maia-gold/15 text-maia-gold border-maia-gold/30',
    earnings: '+$100/sem',
    apr: '11% APR',
    price: '$8,800',
    premium: false,
    icon: TreePine,
    iconBg: 'from-emerald-500 to-green-700',
    cardGradient: 'from-emerald-900/30 to-transparent',
    illustrationColor: 'from-emerald-800 to-green-900',
  },
  {
    territory: 'FRUCTARA',
    name: 'Hacienda Cacao',
    tier: 'Plus',
    tierColor: 'bg-maia-gold/15 text-maia-gold border-maia-gold/30',
    earnings: '+$650/sem',
    apr: '15% APR',
    price: '$10,800',
    premium: true,
    icon: Sprout,
    iconBg: 'from-green-600 to-emerald-800',
    cardGradient: 'from-green-900/30 to-transparent',
    illustrationColor: 'from-green-800 to-emerald-900',
  },
  {
    territory: 'VITALIS',
    name: 'Parque Eólico',
    tier: 'Básico',
    tierColor: 'bg-maia-cyan/15 text-maia-cyan border-maia-cyan/30',
    earnings: '+$320/sem',
    apr: '12% APR',
    price: '$6,500',
    premium: false,
    icon: Sun,
    iconBg: 'from-sky-500 to-blue-700',
    cardGradient: 'from-sky-900/30 to-transparent',
    illustrationColor: 'from-sky-800 to-blue-900',
  },
  {
    territory: 'FORTUNIA',
    name: 'Centro Logístico',
    tier: 'Plus',
    tierColor: 'bg-maia-gold/15 text-maia-gold border-maia-gold/30',
    earnings: '+$480/sem',
    apr: '18% ROI',
    price: '$12,400',
    premium: true,
    icon: Rocket,
    iconBg: 'from-violet-500 to-purple-700',
    cardGradient: 'from-violet-900/30 to-transparent',
    illustrationColor: 'from-violet-800 to-purple-900',
  },
  {
    territory: 'TERRAVERDE',
    name: 'Reserva Natural',
    tier: 'Básico',
    tierColor: 'bg-maia-cyan/15 text-maia-cyan border-maia-cyan/30',
    earnings: '+$90/sem',
    apr: '7% APR',
    price: '$3,100',
    premium: false,
    icon: TreePine,
    iconBg: 'from-lime-600 to-green-800',
    cardGradient: 'from-lime-900/30 to-transparent',
    illustrationColor: 'from-lime-800 to-green-900',
  },
]

export default function Mercado() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="min-h-screen bg-maia-darker flex flex-col">
      {/* Gold ornamental top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-maia-gold/60 to-transparent" />
      <Navbar />

      <main className="flex-1 pb-24 overflow-y-auto">
        {/* Landscape Background + Title */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a2a] via-[#0e2820] to-maia-darker" />

          {/* Landscape */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 250" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="mktHill1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a5c2a" />
                <stop offset="100%" stopColor="#0d3318" />
              </linearGradient>
              <linearGradient id="mktHill2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#165425" />
                <stop offset="100%" stopColor="#0a2a12" />
              </linearGradient>
            </defs>
            <rect width="1200" height="100" fill="transparent" />
            <path d="M0 160 Q200 110 400 145 Q600 100 800 135 Q1000 105 1200 150 L1200 250 L0 250Z" fill="url(#mktHill2)" opacity="0.5" />
            <path d="M0 190 Q300 155 500 180 Q700 150 900 175 Q1050 160 1200 185 L1200 250 L0 250Z" fill="url(#mktHill1)" opacity="0.7" />
            {/* Tiny buildings silhouette */}
            {[200, 240, 270, 500, 530, 560, 800, 835, 870].map((x, i) => (
              <rect key={`b-${i}`} x={x} y={170 - [14, 20, 12, 16, 22, 14, 18, 24, 12][i]} width="12" height={[14, 20, 12, 16, 22, 14, 18, 24, 12][i]} rx="1" fill="#1a3a5a" opacity="0.3" />
            ))}
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
                  MERCADO
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

        {/* Main Marketplace Frame */}
        <div className="px-6 -mt-2 relative z-10">
          <div className="bg-maia-card/80 rounded-2xl border border-maia-gold/15 overflow-hidden backdrop-blur-sm">

            {/* Header Bar */}
            <div className="p-5 border-b border-maia-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white">Proyectos de Inversión NFT</h2>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-maia-text-dim">Activos:</span>
                  <span className="text-sm font-bold text-maia-purple-light">32</span>
                </div>
              </div>

              {/* Category Tabs */}
              <div className="flex items-center gap-2 mb-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-maia-purple/20 text-maia-purple-light border border-maia-purple/30'
                        : 'bg-white/5 text-maia-text-dim hover:text-white hover:bg-white/8 border border-transparent'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Filter Row */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-maia-text-dim hover:text-white hover:bg-white/8 transition-all cursor-pointer">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Ordenar
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-maia-cyan/10 border border-maia-cyan/20 text-xs text-maia-cyan font-medium cursor-pointer">
                  Básico
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-maia-gold/10 border border-maia-gold/20 text-xs text-maia-gold font-medium cursor-pointer">
                  Plus
                </button>
                <span className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-maia-text-dim">
                  $5,000+
                </span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-maia-text-dim" />
                    <input
                      type="text"
                      placeholder="Buscar proyecto..."
                      className="pl-9 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-maia-text-dim outline-none focus:border-maia-purple/40 w-48"
                    />
                  </div>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all cursor-pointer ${viewMode === 'grid' ? 'bg-maia-purple/20 text-maia-purple-light' : 'bg-white/5 text-maia-text-dim hover:text-white'}`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all cursor-pointer ${viewMode === 'list' ? 'bg-maia-purple/20 text-maia-purple-light' : 'bg-white/5 text-maia-text-dim hover:text-white'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content Area: Cards + Sidebar */}
            <div className="flex">
              {/* NFT Cards Grid */}
              <div className="flex-1 p-5">
                <div className="grid grid-cols-4 gap-4">
                  {nftProjects.map((project) => (
                    <div
                      key={project.territory}
                      className="bg-maia-darker/60 rounded-xl border border-maia-border hover:border-maia-purple/30 overflow-hidden transition-all cursor-pointer group"
                    >
                      {/* Card Illustration */}
                      <div className={`relative h-28 bg-gradient-to-br ${project.illustrationColor} overflow-hidden`}>
                        {/* Illustration decorations */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120">
                          {/* Ground */}
                          <ellipse cx="100" cy="110" rx="90" ry="15" fill="#0d2e0d" opacity="0.5" />
                          {/* Building/structure shape based on type */}
                          <rect x="70" y="40" width="60" height="50" rx="4" fill="white" opacity="0.06" />
                          <rect x="80" y="30" width="40" height="60" rx="3" fill="white" opacity="0.05" />
                          {/* Decorative circles */}
                          <circle cx="100" cy="55" r="20" fill="white" opacity="0.04" />
                          <circle cx="100" cy="55" r="12" fill="white" opacity="0.04" />
                        </svg>

                        {/* Icon overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.iconBg} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                            <project.icon className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        {/* Tier badge top-left */}
                        <div className="absolute top-2 left-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${project.tierColor}`}>
                            {project.tier}
                          </span>
                        </div>

                        {/* Premium badge top-right */}
                        {project.premium && (
                          <div className="absolute top-2 right-2">
                            <Star className="w-4 h-4 text-maia-gold fill-maia-gold" />
                          </div>
                        )}
                      </div>

                      {/* Card Info */}
                      <div className="p-3">
                        <p className="font-display text-[10px] tracking-widest text-maia-purple-light mb-0.5">
                          {project.territory}
                        </p>
                        <p className="text-sm font-bold text-white mb-2">{project.name}</p>

                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-maia-cyan font-semibold flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {project.earnings}
                          </span>
                          <span className="text-[10px] text-maia-text-dim">{project.apr}</span>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                          <span className="text-sm font-bold text-white">{project.price}</span>
                          <span className="text-[10px] text-maia-text-dim flex items-center gap-1">
                            <Diamond className="w-3 h-3 text-maia-purple-light" fill="currentColor" />
                            $MAIA
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Sidebar: Filters */}
              <div className="w-56 border-l border-maia-border p-4 flex-shrink-0">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-4 h-4 text-maia-gold" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Filtrar</h3>
                </div>

                {/* Sort */}
                <div className="mb-4">
                  <label className="text-[10px] text-maia-text-dim uppercase tracking-wider mb-1.5 block">Ordenar</label>
                  <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white cursor-pointer hover:bg-white/8 transition-all">
                    Default
                    <ChevronDown className="w-3 h-3 text-maia-text-dim" />
                  </button>
                </div>

                {/* Nivel */}
                <div className="mb-4">
                  <label className="text-[10px] text-maia-text-dim uppercase tracking-wider mb-1.5 block">Nivel</label>
                  <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white cursor-pointer hover:bg-white/8 transition-all">
                    Todos
                    <ChevronDown className="w-3 h-3 text-maia-text-dim" />
                  </button>
                </div>

                {/* Price Range */}
                <div className="mb-4">
                  <label className="text-[10px] text-maia-text-dim uppercase tracking-wider mb-1.5 block">Precio</label>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded bg-white/5 text-[10px] text-white border border-white/10">$245</span>
                    <span className="text-[10px] text-maia-text-dim">—</span>
                    <span className="px-2 py-1 rounded bg-white/5 text-[10px] text-white border border-white/10">$25k</span>
                  </div>
                  {/* Range slider visual */}
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-maia-purple to-maia-purple-light rounded-full" />
                  </div>
                </div>

                {/* Balance */}
                <div className="mb-4 p-3 rounded-lg bg-maia-purple/10 border border-maia-purple/20">
                  <div className="flex items-center gap-2">
                    <Diamond className="w-4 h-4 text-maia-purple-light" fill="currentColor" />
                    <div>
                      <p className="text-[10px] text-maia-text-dim">Tu Balance</p>
                      <p className="text-sm font-bold text-maia-purple-light">25k $MAIA</p>
                    </div>
                  </div>
                </div>

                {/* Toggles */}
                <div className="space-y-3 mb-5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 rounded border-2 border-maia-cyan bg-maia-cyan/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-sm bg-maia-cyan" />
                    </div>
                    <span className="text-xs text-white">Mostrar disponibles</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-4 h-4 rounded border-2 border-white/20" />
                    <span className="text-xs text-maia-text-dim">Mostrar agotados</span>
                  </label>
                </div>

                {/* Stats */}
                <div className="pt-4 border-t border-maia-border space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-maia-text-dim">Disponibles</span>
                    <span className="text-xs font-bold text-white">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-maia-text-dim">Inversores</span>
                    <span className="text-xs font-bold text-white">2,250</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-maia-text-dim">Vol. Total</span>
                    <span className="text-xs font-bold text-maia-cyan">$60M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-maia-text-dim">Liquidez</span>
                    <span className="text-xs font-bold text-maia-purple-light">125k $MAIA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MarketFooter />
    </div>
  )
}
