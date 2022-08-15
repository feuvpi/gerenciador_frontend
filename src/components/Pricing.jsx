import React from 'react'

import { CheckIcon } from '@heroicons/react/solid'

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white bg-zinc-200">
        <div className="w-full bg-slate-900 mix-blend-overlay py-24">


            <div className="max-w-[1240px] mx-auto py-12">

                <div className="text-center py-8 text-slate-300">
                    <h2 className="text-3xl uppercase">Pricing</h2>
                    <h3 className="text-5xl font-bold text-white py-8">The right price for your research.</h3>
                    <p className="text-3xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam.</p>
                </div>

                <div className="grid md:grid-cols-2">
                    <div className="bg-white text-slate-700 m-4 p-8 rounded-xl shadow-2xl">
                        <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-800 rounded-2xl text-sm">Standard</span>
                        <div>
                            <p className="text-4xl font-bold py-1">$59<span className="text-xl text-slate-600 flex-col justify-end">/mo</span></p>
                        </div>
                        <p className="text-xl text-slate-600 py-2 pb-4 font-bold">Lorem ipsum dolor sit.</p>
                        <div className="text-xl font-semibold">
                            <p className="flex flex-row py-4"><CheckIcon className="w-8 mr-5 text-green-500"/>Lorem ipsum dolor sit amet.</p>
                            <p className="flex flex-row py-4"><CheckIcon className="w-8 mr-5 text-green-500"/>Lorem ipsum dolor sit amet.</p>
                            <p className="flex flex-row py-4"><CheckIcon className="w-8 mr-5 text-green-500"/>Lorem ipsum dolor sit amet.</p>
                            <p className="flex flex-row py-4"><CheckIcon className="w-8 mr-5 text-green-500"/>Lorem ipsum dolor sit amet.</p>
                            <p className="flex flex-row py-4"><CheckIcon className="w-8 mr-5 text-green-500"/>Lorem ipsum dolor sit amet.</p>
                            <p className="flex flex-row py-4"><CheckIcon className="w-8 mr-5 text-green-500"/>Lorem ipsum dolor sit amet.</p>
                            <button className="mt-4 w-full py-4 my-4">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing