import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import CorpoJuridico from './CorpoJuridico'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/corpo-juridico" element={<CorpoJuridico />} />
    </Routes>
  )
}

export default App

