import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full bg-slate-800 text-gray-400 px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-500 py-8">
            <div>
                <h6 className="font-bold uppercase pt-2">Solutions</h6>
                <ul>
                    <li className="py-1">Marketing</li>
                    <li className="py-1">Analyrics</li>
                    <li className="py-1">Commerce</li>
                    <li className="py-1">Data</li>
                    <li className="py-1">Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold uppercase pt-2">Support</h6>
                <ul>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Documentation</li>
                    <li className="py-1">Guides</li>
                    <li className="py-1">API Status</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold uppercase pt-2">Company</h6>
                <ul>
                    <li className="py-1">About</li>
                    <li className="py-1">Blog</li>
                    <li className="py-1">Jobs</li>
                    <li className="py-1">press</li>
                    <li className="py-1">Partners</li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold uppercase pt-2">Legal</h6>
                <ul>
                    <li className="py-1">Claims</li>
                    <li className="py-1">privacy</li>
                    <li className="py-1">Terms</li>
                    <li className="py-1">Conditions</li>
                </ul>
            </div>
            <div className="col-span-2 pt-8 md:pt-2">
                <p className="font-bold uppercase text-justify">Subscribe to our newsletter</p>
                <p className="py-4">The latest resources sent to your inbox.</p>
                <form className="flex flex-col sm:flex-row">
                    <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" placeholder="Enter e-mail" />
                    <button className="p-2 mb-4">Subscribe</button>
                </form>
            </div>
        </div>

        <div className="flex max-w-[1240px] m-auto justify-between sm:flex-row text-center text-gray-400">
            <p className="py-2">2022. All rights reserved.</p>
            <div className="flex py-2 text-xl justify-between sm:2-[300px]">
                <FaFacebook className="mx-2"/>
                <FaTwitter className="mx-2"/>
                <FaInstagram className="mx-2"/>
                <FaTwitch className="mx-2"/>
            </div>
        </div>
        
    </div>
  )
}

export default Footer