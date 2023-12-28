

import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
 

  return (
    <>
   
     <NavBar />
     <div className='w-full p-10'>
       <Outlet />
     </div>
    </>
  )
}

export default App
