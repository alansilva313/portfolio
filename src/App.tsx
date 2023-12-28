import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './context/Theme';


function App() {
  const { theme } = useContext(ThemeContext);
  const [alterTheme, setAlterTheme] = useState('');

  useEffect(() => {
    setAlterTheme(theme === "light" ? "bg-white" : "bg-black");
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
     </div>
    </>
  );
}

export default App;