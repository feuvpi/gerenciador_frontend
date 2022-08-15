import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full bg-zinc-200">
        <div className="max-w-[1240px] mx-auto p-24">
            <div className="text-center">
                <h2 className="text-5xl font-bold">GERENCIE SEUS INVESTIMENTOS DE FORMA PRATICA</h2>
                <p className="text-3xl py-6 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis esse neque atque accusamus porro repudiandae nisi placeat officia corrupti nostrum?</p>
            </div>

            <div className="grid md:grid-col-3 gap-1 px-2 text-center">
                <div className="border py-8 rounded-xl shadow-md bg-indigo-400">
                    <p className="text-6xl font-bold text-white">100%</p>
                    <p className="text-gray-400 mt-2 text-white">Gratuito</p>
                </div>
                <div className="border py-8 rounded-xl shadow-md bg-indigo-400">
                    <p className="text-6xl font-bold text-white">24/7</p>
                    <p className="text-gray-400 mt-2 text-white">Disponibilidade</p>
                </div>
                <div className="border py-8 rounded-xl shadow-md bg-indigo-400">
                    <p className="text-6xl font-bold text-white">MINIMALISMO</p>
                    <p className="text-gray-400 mt-2 text-white">Interface simplificada</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About