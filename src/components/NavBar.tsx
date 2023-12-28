import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuMoonStar } from "react-icons/lu";
import { FiAlignLeft, FiXCircle } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaRegSun } from "react-icons/fa";
import { ThemeContext } from "../context/Theme";
import { useContext } from "react";

interface NavBarProps {
  // Adicione quaisquer props necessárias aqui
}

const NavBar: React.FC<NavBarProps> = () => {
  const [menu, setMenu] = useState<'hidden' | 'visible'>('hidden');
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [alterTheme, setAlterTheme] = useState<'text-black' | 'text-white'>('');

  useEffect(() => {
    setAlterTheme(theme === "light" ? "text-black" : "text-white");
  }, [theme]);

  const handle = () => {
    setMenu((prevMenu) => (prevMenu === 'hidden' ? 'visible' : 'hidden'));
  };

  return (
    <div className="w-full flex-col items-center">
      <div className={`flex lg:hidden md:flex items-center justify-between gap-2 cursor-pointer text-3xl p-4 ${alterTheme}`}>
        <button onClick={handle}>
          <FiAlignLeft />
        </button>

        <div className={`flex items-center gap-2 lg:hidden ${alterTheme}`}>
          {theme === 'dark' ? <FaRegSun onClick={toggleTheme} /> : <LuMoonStar onClick={toggleTheme} />}
          <FaInstagram className={alterTheme} />
          <FaLinkedin />
        </div>
      </div>
      <nav className={`${menu} ${alterTheme} w-full top-0 h-screen lg:h-0 fixed bg-orange-400 transition-all ease-in-out lg:flex lg:gap-4`}>
        <div onClick={handle} className="w-full p-4 text-3xl lg:hidden">
          <FiXCircle />
        </div>
        <div className="w-full p-5 flex flex-col gap-4">
          <Link to="/">Home</Link>
          <Link to="contact">Contatos</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
