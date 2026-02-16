import { Swords, Gift } from 'lucide-react'

const missions = [
  {
    title: 'Desafío Vitalis',
    description: 'Completa 3 Proyectos Solares',
    current: 2,
    total: 3,
    color: 'from-maia-cyan to-green-500',
  },
  {
    title: 'Fortunia Quest',
    description: 'Recolecta 10 Recursos',
    current: 6,
    total: 10,
    color: 'from-maia-gold to-maia-orange',
  },
  {
    title: 'DAO Voting',
    description: 'Participa en 2 Votaciones',
    current: 1,
    total: 2,
    color: 'from-maia-purple to-maia-pink',
  },
]

export default function Missions() {
  return (
    <div className="bg-maia-card rounded-2xl border border-maia-border p-5 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Swords className="w-5 h-5 text-maia-gold" />
        <h2 className="text-base font-bold text-white">Misiones y Recompensas</h2>
      </div>

      {/* Missions List */}
      <div className="flex flex-col gap-4 mb-5">
        {missions.map((mission) => (
          <div key={mission.title}>
            <div className="flex items-center justify-between mb-1.5">
              <div>
                <p className="text-sm font-semibold text-white">{mission.title}</p>
                <p className="text-xs text-maia-text-dim">{mission.description}</p>
              </div>
              <span className="text-xs font-bold text-maia-text-dim">
                {mission.current}/{mission.total}
              </span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${mission.color}`}
                style={{ width: `${(mission.current / mission.total) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Claim Button */}
      <button className="mt-auto w-full py-2.5 rounded-xl bg-gradient-to-r from-maia-gold to-maia-orange text-white font-bold text-sm tracking-wider uppercase hover:shadow-lg hover:shadow-maia-gold/25 transition-all cursor-pointer">
        <div className="flex items-center justify-center gap-2">
          <Gift className="w-4 h-4" />
          RECLAMAR RECOMPENSAS
        </div>
      </button>
    </div>
  )
}
