import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MapView from './pages/MapView'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/mapa" element={<MapView />} />
    </Routes>
  )
}
