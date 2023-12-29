import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './context/Theme';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';


function App() {
  const { theme } = useContext(ThemeContext);
  const [alterTheme, setAlterTheme] = useState('');
  const [textcor, setTextCor] = useState('')

  useEffect(() => {
    setAlterTheme(theme === "light" ? "bg-white" : "bg-black");
    setTextCor(theme === 'light' ? 'text-black' : 'text-white');
  }, [theme]);
  

  return (
    <>
    
     <div className={`w-full  ${alterTheme}`}>
   
     <div >
        <NavBar />
        <div className='w-full p-10'>
          <Outlet />
        </div>
      </div>

      <footer className={`flex p-10 ${textcor} ${alterTheme} items-center justify-evenly`}>
        <h3>Alan Silva - Dev</h3>
         <div className='flex items-center gap-2 text-3xl'>
          <FaInstagram className="text-purple-700"/>
          <FaLinkedin className="text-blue-500"/>
          <FaWhatsapp className="text-green-500"/>
         </div>
      </footer>
     </div>
    </>
  );
}

export default App;