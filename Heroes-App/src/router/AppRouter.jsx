
import { Routes,Route, Navigate} from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { DCpage } from '../heroes/pages/DCpage';
import { MarvelPage } from '../heroes/pages/MarvelPage';


export const AppRouter = () => {
  return (
   <>
<Routes>
        <Route path="mavel" element={<MarvelPage />} />
        <Route path="dc" element={<DCpage />} />
        <Route path="login" element={<LoginPage />} />
        //Ruta de inicio
        <Route path="/" element={<Navigate to='/mavel' />} />
      </Routes>
   </>
  )
}
