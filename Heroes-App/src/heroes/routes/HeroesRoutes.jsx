
import { Routes,Route,Navigate} from 'react-router-dom';
import { Navbar } from '../../ui'
import { MarvelPage } from '../pages/MarvelPage'
import { DCpage } from '../pages/DCpage'
export const HeroesRoutes = () => {
  return (
   <>
  <Navbar />
  <div className="container">
        <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCpage />} />
        <Route path="/" element={<Navigate to="/mavel" />} />
      </Routes>
  </div>
   </>
  )
}
