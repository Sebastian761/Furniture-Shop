import { BrowserRouter } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/components/Navbar'
import { Rutas } from '../routes'
import { MainContainer } from '../Components/Main'
import './App.css'


export const App = ()  => {

  const menu = ['About']

  return (
    <BrowserRouter>
      <Navbar menu={ menu }  />
      <Rutas />
      <MainContainer />
    </BrowserRouter>
  )
}
