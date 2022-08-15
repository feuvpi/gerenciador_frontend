import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import jumboImg from '../assets/scott-graham-5fNmWej4tAA-unsplash.jpg'


const Support = () => {
  return (
    //Image
    <div name="support" className="w-full md:h-4/6">
        <div className="w-full h-auto md:h-4/6 bg-gray-600/90 absolute overflow-hidden">
            <img className="w-full h-full object-cover mix-blend-overlay" src={jumboImg} alt="/" />
        </div>

        <div className="max-w-[1240px] mx-auto relative">
            <div className="px-4 py-12 text-white">
                <h2 className="text-2xl pt-8 text-slate-300 uppercase text-center">SUPORTE</h2>
                <h3 className="text-5xl font-bold py-6 text-center">Projetamos soluções.</h3>
                <p className="text-xl py-2 text-center font-medium">Nosso objetivo é criar soluções que simplifiquem a gestão de investimentos.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20">
                <div className="bg-indigo-600 text-white rounded-xl shadow-2xl">
                    <div className="pt=8">
                        <PhoneIcon className="w-16 p-4 bg-zinc-200 text-indigo-600 rounded-lg ml-4 mt-[-1rem]" />
                        <h3 className="font-bold text-2xl my-6 mx-4">SUPORTE TÉCNICO</h3>
                        <p className="mx-4">Entre em contato para soluções personalizadas!</p>
                    </div>
                    <div className="bg-slate-100 rounded-md pl-8 py-1 my-4 px-4 mx-4">
                        <p className="flex items-center text-indigo-600 font-semibold">Entrar em contato<ArrowSmRightIcon className="w-16 p-3"/></p>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Support