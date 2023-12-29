import React from 'react'

export default function Projetos() {


const projetos = [
    {
        name: "Projeto 1",
        image: "",
        description: "Descrição teste"
    },
    {
        name: "Projeto 2",
        image: "",
        description: "Descrição 2"
    },
    {
        name: "Projeto 3",
        image: "",
        description: "Descrição 3"
    }
]





  return (
    <div className='mt-10'>
        <div className='mb-10'>
        Projetos
        </div>

    <div className='flex flex-col gap-4'>
        {
            projetos.map((item, index) => (
                <div key={index} className='w-full h-36 p-4 border rounded'>
                    <h3>{item.name}</h3>

                </div>
            ))
        }
    </div>
    
    </div>
  )
}
