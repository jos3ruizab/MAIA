import { Sprout, Sun, Rocket, TreePine } from 'lucide-react'

const projects = [
  {
    territory: 'FRUCTARA',
    name: 'Hacienda Cacao',
    tag: 'Rendimiento +15% APR',
    tagColor: 'bg-maia-cyan/20 text-maia-cyan border-maia-cyan/30',
    icon: Sprout,
    iconBg: 'from-green-600 to-green-800',
    gradient: 'from-green-900/40 to-maia-card',
  },
  {
    territory: 'ELEVARE',
    name: 'Planta Solar',
    tag: 'Ganancias +20% ROI',
    tagColor: 'bg-maia-blue/20 text-maia-blue border-maia-blue/30',
    icon: Sun,
    iconBg: 'from-blue-600 to-indigo-800',
    gradient: 'from-blue-900/40 to-maia-card',
  },
  {
    territory: 'CAPITOPIA',
    name: 'Startup Hub',
    tag: 'Participación DAO',
    tagColor: 'bg-maia-orange/20 text-maia-orange border-maia-orange/30',
    icon: Rocket,
    iconBg: 'from-orange-600 to-red-800',
    gradient: 'from-orange-900/40 to-maia-card',
  },
  {
    territory: 'HARMONIA',
    name: 'Eco Glamping',
    tag: 'Nivel Plus Desbloqueado',
    tagColor: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    icon: TreePine,
    iconBg: 'from-teal-600 to-emerald-800',
    gradient: 'from-teal-900/40 to-maia-card',
  },
]

export default function ProjectCards() {
  return (
    <section className="px-6 pb-6">
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project) => (
          <div
            key={project.territory}
            className="group relative bg-maia-card rounded-2xl border border-maia-border overflow-hidden hover:border-maia-purple/40 transition-all hover:shadow-lg hover:shadow-maia-purple/10 cursor-pointer"
          >
            {/* Card top gradient */}
            <div className={`h-24 bg-gradient-to-b ${project.gradient} flex items-center justify-center`}>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.iconBg} flex items-center justify-center shadow-lg`}>
                <project.icon className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Card content */}
            <div className="p-4">
              <p className="font-display text-xs tracking-widest text-maia-purple-light mb-1">
                {project.territory}
              </p>
              <p className="text-base font-bold text-white mb-3">{project.name}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${project.tagColor}`}>
                {project.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
