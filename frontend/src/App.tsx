import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MapView from './pages/MapView'
import MisActivos from './pages/MisActivos'
import Mision from './pages/Mision'
import Mercado from './pages/Mercado'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/mapa" element={<MapView />} />
      <Route path="/mis-activos" element={<MisActivos />} />
      <Route path="/mision" element={<Mision />} />
      <Route path="/mercado" element={<Mercado />} />
    </Routes>
  )
}
