import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const AllInOne = () => {
  return (
    <div name="solutions" className="w-full my-32">
        <div className="max-w-[1240px] mx-auto px-2">
            <h2 className="text-5xl font-bold text-center">All in One Platform</h2>
            <p className="text-center text-2xl text-gray-500 py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam eaque fugit ullam doloribus ab ad fugiat illo, veritatis qui impedit totam enim distinctio molestiae!</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                <div className="flex">
                    <div>
                    <CheckIcon className="w-7 mr-4 text-green-600"/>
                    </div>
                       
                        <div>
                            <h3 className="text-lg font-bold">Notifications</h3>
                            <p className="text-lg pt-2 pb-4 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, magnam.</p>
                    </div>

                    
                </div>

                <div className="flex">
                    <div>
                    <CheckIcon className="w-7 mr-4 text-green-600"/>
                    </div>
                       
                        <div>
                            <h3 className="text-lg font-bold">Notifications</h3>
                            <p className="text-lg pt-2 pb-4 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, magnam.</p>
                    </div>

                    
                </div>

                <div className="flex">
                    <div>
                    <CheckIcon className="w-7 mr-4 text-green-600"/>
                    </div>
                       
                        <div>
                            <h3 className="text-lg font-bold">Notifications</h3>
                            <p className="text-lg pt-2 pb-4 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, magnam.</p>
                    </div>

                    
                </div>

                <div className="flex">
                    <div>
                    <CheckIcon className="w-7 mr-4 text-green-600"/>
                    </div>
                       
                        <div>
                            <h3 className="text-lg font-bold">Notifications</h3>
                            <p className="text-lg pt-2 pb-4 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, magnam.</p>
                    </div>

                    
                </div>


            </div>
        </div>
    </div>
  )
}

export default AllInOne