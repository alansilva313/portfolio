
import { Link } from "react-router-dom"
import { LuMoonStar } from "react-icons/lu";
import { FiAlignLeft, FiXCircle } from "react-icons/fi";
import { useContext, useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaRegSun  } from "react-icons/fa";
import { ThemeContext } from "../context/Theme";


export default function NavBar() {
    const [menu, setMenu] = useState('hidden');
    const { useTheme, theme, toggleTheme } = useContext(ThemeContext)
    const [alterTheme, setAlterTheme] = useState('');

    useEffect(() => {
        setAlterTheme(theme === "light" ? "text-black" : "text-white");
      }, [theme]);
    


    const handle = () => {
         if(menu === 'hidden'){
            setMenu('visible')
         }else {
            setMenu('hidden')
         }
    }


    
  return (
    <div className="w-full flex-col  items-center ">
           <div className={`flex lg:hidden md:flex items-center justify-between gap-2 cursor-pointer text-3xl p-4 $  ${alterTheme}`}>
            <button onClick={handle}>
            <FiAlignLeft />
            </button>
               

               <div className={`flex items-center gap-2 lg:hidden ${alterTheme}`}>
               {
                theme === 'dark' ?  <FaRegSun onClick={toggleTheme} /> : <LuMoonStar onClick={toggleTheme}/>
               }
                <FaInstagram classNmae={`${alterTheme}`}/>
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
  )
}
