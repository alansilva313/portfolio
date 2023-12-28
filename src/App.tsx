import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext, ThemeContextProps } from './context/Theme';

function App() {
  const themeContext = useContext(ThemeContext);
  const theme: ThemeContextProps["theme"] = themeContext?.theme || "light";
  const [alterTheme, setAlterTheme] = useState<"bg-white" | "bg-black">('');

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
