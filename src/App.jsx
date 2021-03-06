/* React router dom modules */
import { Route, Routes, useRoutes } from 'react-router-dom'
/* Components */
import { Calendar } from './components/Calendar'
import { Home } from './components/Home'
import { Register } from './components/Register'
import { Welcome } from './components/Welcome'
import { Results } from './components/Results'
import { Navbar } from './components/Navbar'

function App() {
  /* Estan son las diferentes rutas que emplea el test */
  const rutas = useRoutes([
    { index: true, element: <Home /> }, /* Pagina principal o de Inicio de sesión */
    { path: '/signin', element: <Register /> }, /* Pagina de Registro */
    {
      path: '/home', element: <Navbar />,
      children: [
        { index: true, element: <Welcome /> }, /* Formulario o BetiTest jaja se llama igual que este proyecto xd */
        { path: '/home/results', element: <Results /> }, /* Resultados del formulario */
        { path: '/home/calendar', element: <Calendar /> } /* Calendario */
      ]
    }
  ])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Register />} />
      <Route path='/home' element={<Welcome />} />
      <Route path='/home/results' element={<Results />} />
      <Route path='/home/calendar' element={<Calendar />} />
    </Routes>
  )
}

export default App
