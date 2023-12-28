import React, { useContext, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ThemeContext } from './context/Theme';

function App() {
  const { theme } = useContext(ThemeContext);
  const [alterTheme, setAlterTheme] = useState<string>('');

  useEffect(() => {
    setAlterTheme(theme === "light" ? "bg-white" : "bg-black");
  }, [theme]);

  return (
    <>
      <div className={`w-full ${alterTheme}`}>
        <NavBar />
        <div className='w-full p-10'>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
