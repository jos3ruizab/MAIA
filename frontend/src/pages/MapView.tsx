import { useState } from 'react'
import Navbar from '../components/Navbar'
import MapFooter from '../components/MapFooter'
import { Sprout, Sun, Rocket, TreePine, Mountain } from 'lucide-react'

interface Territory {
  id: string
  name: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  x: number
  y: number
  color: string
  glowColor: string
}

const territories: Territory[] = [
  {
    id: 'capironia',
    name: 'CAPIRONIA',
    subtitle: 'Startup Hub',
    icon: Rocket,
    x: 22,
    y: 25,
    color: 'from-orange-500 to-amber-600',
    glowColor: 'shadow-orange-500/30',
  },
  {
    id: 'harmonia',
    name: 'HARMONIA',
    subtitle: 'Eco Glamping',
    icon: Mountain,
    x: 38,
    y: 40,
    color: 'from-teal-500 to-emerald-600',
    glowColor: 'shadow-teal-500/30',
  },
  {
    id: 'elevare',
    name: 'ELEVARE',
    subtitle: 'Planta Solar',
    icon: Sun,
    x: 55,
    y: 30,
    color: 'from-blue-500 to-indigo-600',
    glowColor: 'shadow-blue-500/30',
  },
  {
    id: 'frutunia',
    name: 'FRUTUNIA',
    subtitle: 'Cacao Plantation',
    icon: TreePine,
    x: 30,
    y: 62,
    color: 'from-lime-600 to-green-700',
    glowColor: 'shadow-lime-500/30',
  },
  {
    id: 'fructara',
    name: 'FRUCTARA',
    subtitle: 'Cacao Plantation',
    icon: Sprout,
    x: 65,
    y: 58,
    color: 'from-green-500 to-emerald-700',
    glowColor: 'shadow-green-500/30',
  },
]

export default function MapView() {
  const [hoveredTerritory, setHoveredTerritory] = useState<string | null>(null)

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-maia-darker">
      {/* Gold ornamental top border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-maia-gold/60 to-transparent" />
      <Navbar />

      {/* Map Container */}
      <div className="flex-1 relative overflow-hidden">
        {/* Illustrated map background */}
        <div className="absolute inset-0">
          {/* Ocean */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c2340] via-[#0e3055] to-[#0a1e35]" />

          {/* Water texture - animated waves */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q30 0 60 10 Q90 20 120 10" fill="none" stroke="#3b82f6" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>

          {/* Main island landmass */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Island gradient */}
              <radialGradient id="islandGrad" cx="50%" cy="45%" r="40%">
                <stop offset="0%" stopColor="#2d5a27" />
                <stop offset="40%" stopColor="#1a4a1a" />
                <stop offset="70%" stopColor="#153d15" />
                <stop offset="100%" stopColor="#0d2e0d" />
              </radialGradient>
              {/* Mountain gradient */}
              <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6b7280" />
                <stop offset="30%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#2d5a27" />
              </linearGradient>
              {/* Beach gradient */}
              <radialGradient id="beachGrad" cx="50%" cy="45%" r="42%">
                <stop offset="90%" stopColor="transparent" />
                <stop offset="95%" stopColor="#c4a35a30" />
                <stop offset="100%" stopColor="#c4a35a10" />
              </radialGradient>
              {/* Forest texture */}
              <filter id="forestNoise">
                <feTurbulence baseFrequency="0.9" numOctaves="4" seed="2" />
                <feColorMatrix type="saturate" values="0.3" />
                <feBlend in="SourceGraphic" mode="overlay" />
              </filter>
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Island shape */}
            <path
              d="M280 180 Q320 140 400 150 Q460 130 520 145 Q580 120 650 155 Q720 140 740 180 Q780 220 770 280 Q790 340 760 380 Q780 430 740 470 Q720 520 670 530 Q620 560 560 540 Q500 570 440 550 Q380 570 330 530 Q280 540 260 490 Q230 440 240 380 Q220 320 240 280 Q230 220 280 180Z"
              fill="url(#islandGrad)"
              stroke="#1a3a1a"
              strokeWidth="2"
            />
            {/* Beach/shore outline */}
            <path
              d="M280 180 Q320 140 400 150 Q460 130 520 145 Q580 120 650 155 Q720 140 740 180 Q780 220 770 280 Q790 340 760 380 Q780 430 740 470 Q720 520 670 530 Q620 560 560 540 Q500 570 440 550 Q380 570 330 530 Q280 540 260 490 Q230 440 240 380 Q220 320 240 280 Q230 220 280 180Z"
              fill="none"
              stroke="#c4a35a"
              strokeWidth="3"
              opacity="0.2"
            />

            {/* Mountains */}
            <path d="M360 300 L400 220 L440 300Z" fill="url(#mountainGrad)" opacity="0.8" />
            <path d="M390 310 L420 240 L450 310Z" fill="url(#mountainGrad)" opacity="0.7" />
            <path d="M410 300 L445 230 L480 300Z" fill="url(#mountainGrad)" opacity="0.8" />
            {/* Snow caps */}
            <path d="M395 230 L400 220 L405 230Z" fill="#e5e7eb" opacity="0.6" />
            <path d="M440 240 L445 230 L450 240Z" fill="#e5e7eb" opacity="0.6" />

            {/* River */}
            <path
              d="M420 300 Q440 340 430 380 Q425 420 450 460 Q470 500 460 540"
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
              opacity="0.4"
            />
            <path
              d="M420 300 Q440 340 430 380 Q425 420 450 460 Q470 500 460 540"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="1.5"
              opacity="0.3"
            />

            {/* Forest clusters (dots) */}
            {[
              [300, 250], [310, 270], [290, 290], [320, 240],
              [340, 350], [350, 370], [360, 390], [330, 380],
              [600, 250], [620, 270], [610, 240], [630, 260],
              [550, 400], [570, 420], [560, 380], [580, 410],
              [700, 300], [710, 320], [690, 310],
              [480, 480], [500, 470], [490, 500], [510, 490],
              [350, 460], [360, 480], [340, 470],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="6" fill="#1a5c1a" opacity="0.6" />
            ))}

            {/* Solar panels area */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={`solar-${i}`}
                x={540 + (i % 3) * 25}
                y={200 + Math.floor(i / 3) * 20}
                width="18"
                height="12"
                rx="1"
                fill="#3b82f6"
                opacity="0.3"
                transform={`rotate(-15, ${540 + (i % 3) * 25}, ${200 + Math.floor(i / 3) * 20})`}
              />
            ))}

            {/* Plantation rows */}
            {[0, 1, 2, 3, 4].map((row) =>
              [0, 1, 2, 3].map((col) => (
                <circle
                  key={`crop-${row}-${col}`}
                  cx={620 + col * 20}
                  cy={400 + row * 18}
                  r="4"
                  fill="#4ade80"
                  opacity="0.25"
                />
              ))
            )}

            {/* Small buildings for Startup Hub */}
            {[0, 1, 2].map((i) => (
              <rect
                key={`bldg-${i}`}
                x={270 + i * 22}
                y={185 - [12, 18, 10][i]}
                width="14"
                height={[12, 18, 10][i]}
                rx="1"
                fill="#f97316"
                opacity="0.25"
              />
            ))}

            {/* Compass Rose */}
            <g transform="translate(880, 100)" opacity="0.3">
              <circle cx="0" cy="0" r="25" fill="none" stroke="#c4a35a" strokeWidth="1" />
              <path d="M0 -22 L4 -6 L0 -10 L-4 -6Z" fill="#c4a35a" />
              <path d="M0 22 L4 6 L0 10 L-4 6Z" fill="#c4a35a" opacity="0.5" />
              <path d="M22 0 L6 4 L10 0 L6 -4Z" fill="#c4a35a" opacity="0.5" />
              <path d="M-22 0 L-6 4 L-10 0 L-6 -4Z" fill="#c4a35a" opacity="0.5" />
              <text x="0" y="-30" textAnchor="middle" fill="#c4a35a" fontSize="8" fontFamily="Orbitron">N</text>
            </g>

            {/* Map title cartouche */}
            <g transform="translate(500, 620)">
              <rect x="-100" y="-16" width="200" height="32" rx="4" fill="#0a0a1a" opacity="0.6" stroke="#c4a35a" strokeWidth="0.5" />
              <text x="0" y="5" textAnchor="middle" fill="#c4a35a" fontSize="11" fontFamily="Orbitron" letterSpacing="4">ALTALÄIA</text>
            </g>
          </svg>

          {/* Atmospheric fog/mist layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e35]/60 via-transparent to-[#0c2340]/40" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-maia-darker/80 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-maia-darker/50 to-transparent" />
        </div>

        {/* Territory Markers */}
        {territories.map((territory) => {
          const isHovered = hoveredTerritory === territory.id
          return (
            <div
              key={territory.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${territory.x}%`, top: `${territory.y}%` }}
              onMouseEnter={() => setHoveredTerritory(territory.id)}
              onMouseLeave={() => setHoveredTerritory(null)}
            >
              {/* Pulsing ring */}
              <div className={`absolute inset-0 -m-3 rounded-2xl bg-gradient-to-r ${territory.color} opacity-20 blur-xl transition-all duration-500 ${isHovered ? 'scale-150 opacity-40' : 'animate-pulse'}`} />

              {/* Card */}
              <div
                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl transition-all duration-300 ${
                  isHovered
                    ? `bg-white/15 border-white/30 shadow-2xl ${territory.glowColor} scale-110`
                    : 'bg-white/8 border-white/15 shadow-lg'
                }`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${territory.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <territory.icon className="w-5 h-5 text-white" />
                </div>

                {/* Info */}
                <div>
                  <p className="font-display text-xs tracking-widest text-white font-bold">
                    {territory.name}
                  </p>
                  <p className="text-xs text-white/60">{territory.subtitle}</p>
                </div>
              </div>

              {/* Connection dot below card */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-px h-2 bg-white/20" />
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${territory.color} shadow-lg`} />
              </div>
            </div>
          )
        })}

        {/* Clouds/atmosphere overlay */}
        <div className="absolute top-[10%] left-[5%] w-40 h-12 bg-white/3 rounded-full blur-2xl" />
        <div className="absolute top-[15%] right-[10%] w-56 h-10 bg-white/2 rounded-full blur-3xl" />
        <div className="absolute bottom-[25%] left-[15%] w-48 h-8 bg-white/2 rounded-full blur-2xl" />
      </div>

      <MapFooter />
    </div>
  )
}
