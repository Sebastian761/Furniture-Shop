import { BrowserRouter } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/components/Navbar'
import { Rutas } from '../routes'
import './App.css'
import { DataProvider } from '../Components/Context/DataContext'


export const App = ()  => {

  const menu = ['About']

  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar menu={ menu }  />
        <Rutas />
      </BrowserRouter>
    </DataProvider>
  )
}
