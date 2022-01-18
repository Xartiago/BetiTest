/* React router dom modules */
import { useRoutes } from 'react-router-dom'
/* Components */
import { Calendar } from './components/Calendar'
import { Home } from './components/Home'
import { Register } from './components/Register'
import { Welcome } from './components/Welcome'
import { Results } from './components/Results'

function App() {
  /* Estan son las diferentes rutas que emplea el test */
  const rutas = useRoutes([
    { index: true, element: <Home /> }, /* Pagina principal o de Inicio de sesión */
    { path: '/sign', element: <Register /> }, /* Pagina de Registro */
    { path: '/welcome', element: <Welcome /> }, /* Formulario o BetiTest jaja se llama igual que este proyecto xd */
    { path: '/results', element: <Results /> }, /* Resultados del formulario */
    { path: '/calendar', element: <Calendar /> } /* Calendario */
  ])
  return rutas
}

export default App
