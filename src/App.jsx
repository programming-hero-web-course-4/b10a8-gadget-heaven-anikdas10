
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import  { Toaster } from 'react-hot-toast';
function App() {
 

  return (
    <>
    <Toaster></Toaster>
      <NavBar></NavBar>
      <Outlet></Outlet>
    <Footer></Footer>
      
    </>
  )
}

export default App
