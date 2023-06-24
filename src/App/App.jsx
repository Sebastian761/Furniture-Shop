import { BrowserRouter } from 'react-router-dom'
import { Navbar } from '../Components/Navbar/components/Navbar'
import { Rutas } from '../routes'
import './App.css'
import { DataProvider } from '../Components/Context/DataContext'
import { AuthProvider, useAuth} from '../Components/Context/AuthContext'
import { Toaster } from 'sonner'

export const App = ()  => {

  const menu = ['About']
  
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Navbar menu={ menu }  />
          <Toaster position="bottom-right" richColors/>
          <Rutas />
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  )
}
