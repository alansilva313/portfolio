import { Link } from "react-router-dom";
import { LuMoonStar } from "react-icons/lu";
import { FiAlignLeft, FiXCircle } from "react-icons/fi";
import { useContext, useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { ThemeContext } from "../context/Theme";
import { motion, useScroll } from "framer-motion"

export default function NavBar() {
  const [menu, setMenu] = useState('hidden');
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [alterTheme, setAlterTheme] = useState('');
  const [alterBg, setAlterBg] = useState('');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (theme === "light") {
      setAlterTheme("text-black");
      setAlterBg("bg-white");
    } else if (theme === "dark") {
      setAlterTheme("text-white");
      setAlterBg("bg-black");
    }
  }, [theme]);



  const handle = () => {
    setMenu((prevMenu) => (prevMenu === 'hidden' ? 'visible' : 'hidden'));
  };

  return (
    <div className={`w-full flex-col bg:flex bg:flex-row items-center fixed top-0 ${alterBg}`} >
            <motion.div style={{ scaleX: scrollYProgress }}>    </motion.div>  
      <div className={`flex md:flex items-center justify-between gap-2 cursor-pointer text-3xl p-4 ${alterTheme}`}>
        <button onClick={handle} className="lg:hidden">
          <FiAlignLeft />
        </button>

        <div className={`flex items-center gap-2  ${alterTheme}`}>
          {theme === 'dark' ? <GoSun onClick={toggleTheme} /> : <LuMoonStar onClick={toggleTheme} />}
          <FaInstagram className={alterTheme} />
          <FaLinkedin />
        </div>
      </div>
      <nav className={`${menu} ${alterTheme} w-full top-0 h-screen lg:h-0 fixed bg-slate-800 transition-all ease-in-out lg:flex lg:gap-4`}>
        <div onClick={handle} className="w-full p-4 text-3xl lg:hidden">
          <FiXCircle />
        </div>
        <div className="w-full p-5 flex flex-col gap-4 lg:flex-row text-3xl lg:pl-96 lg:pr-96 items-center text-white">
          <Link to="/">Home</Link>
        
        </div>
      </nav>

    
    </div>
  );
}