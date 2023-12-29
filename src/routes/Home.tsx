import { useContext, useEffect, useState } from "react";
import Secao1 from "../components/secao1";
import { ThemeContext } from "../context/Theme";
import ImgSilva from '../assets/images/alns.jpg';
import Secao2 from "../components/secao2";




export default function Home() {
   const [tema, setTema] = useState('');
    const { theme } = useContext(ThemeContext);

   useEffect(() => {
     theme === 'dark' ? setTema('text-white') : setTema('text-black')
   })


  return (
 <div className={`${tema} mt-28`}>
       <div className="flex flex-col gap-4">
<div className="flex flex-col items-start mb-7 gap-4">
          <img src={ImgSilva} alt="alan silva" className="rounded-full w-36 flex items-start"/>

        <h3 className="text-3xl font-mono"><strong>Alan Silva</strong></h3>
</div>
      <p className="font-mono">Olá! Sou Alan Silva, um entusiasta da programação com 25 anos de
     idade. Meu foco principal é o desenvolvimento Backend, mas também trago
      experiência sólida em projetos FrontEnd. Sou apaixonado por transformar ideias em
       soluções tecnológicas e estou constantemente em busca de desafios que impulsionem 
       meu crescimento profissional.  🚀🖥️</p>

       
    </div>
   <Secao2 />
    <Secao1 />
 </div>
  )
}
