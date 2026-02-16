import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import Portfolio from './components/Portfolio'
import Missions from './components/Missions'
import ProjectCards from './components/ProjectCards'
import FooterBar from './components/FooterBar'

export default function App() {
  return (
    <div className="min-h-screen bg-maia-darker pb-20">
      <Navbar />
      <HeroBanner />

      {/* Middle Section: Portfolio + Missions */}
      <section className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-4">
          <Portfolio />
          <Missions />
        </div>
      </section>

      {/* Project Cards */}
      <ProjectCards />

      <FooterBar />
    </div>
  )
}
