import { FaNode, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

interface Habilidade {
  icone: JSX.Element;
  name: string;
  description: string;
}

export default function Secao1() {
  const habilidades: Habilidade[] = [
    {
      icone: <FaNode className="text-green-500" />,
      name: "Node JS",
      description: "Teste para Node JS",
    },
    {
      icone: <RiJavascriptFill className="text-yellow-400" />,
      name: "JavaScript",
      description: "Teste para JavaScript",
    },
    {
      icone: <FaReact className="text-blue-700" />,
      name: "React",
      description: "Teste para React",
    },
  ];

  return (
    <div className="mt-20">
      <h3 className="mb-4 text-2xl">Minhas Habilidades</h3>

      <div className="w-full flex flex-col gap-4 ">
        {habilidades.map((item: Habilidade, index: number) => (
          <div key={index} className="p-4 rounded w-full flex items-center gap-2 bg-white border">
            <div className="text-2xl">{item.icone}</div>
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
