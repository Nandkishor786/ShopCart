 import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
 import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='h-full w-full mx-auto '>
        <Navbar/>
         <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout