import React, { useState, useContext } from 'react'
import { MenuIcon, XIcon, ChartBarIcon } from '@heroicons/react/outline'
import {
  Link as LinkScroll,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'
import { Link } from 'react-router-dom'
import { AuthContext } from "../contexts/auth";
import ModalPerfil from '../components/ModalPerfil';

// -- utils
import { handleClose } from "../utils/handleClose";

const Navbar = () => {
  
  const { logout } = useContext(AuthContext)
  const [nav, setNav] = useState(false) //AppBar state
  
  // - show state for modal opening/closing
  const [show, setShow] = useState(false);
  const handleClick = () => setNav(!nav)

  const [showPerfil, setShowPerfil] = useState(false);

  const handleClose = (e) => {
    if(e.target.id === "closePerfil"){
      setShow(false);
    }
  }

  return (
    <div className='w-screen h-12 z-100 bg-indigo-600 border-b border-indigo-300 fixed drop-shadow-xs flex content-center z-50'>
      <div className='px-4 flex justify-between items-center content-end w-full h-full'>
        <div className='flex'>
          <Link to='/'>
            <div className='flex self-end'>
              <ChartBarIcon className='w-10 mr-2 text-zinc-200' />
            </div>
          </Link>
        </div>
        <div className='flex hidden md:flex pr-4 items-center self-center'>
            <button onClick={() => {setShow(true)}} className='flex bg-zinc-100 text-indigo-700 hover:bg-zinc-300 w-16 h-8 text-sm inline-flex place-content-center place-items-center'>PERFIL</button>
            <button onClick={logout} className="bg-zinc-100 text-indigo-700 hover:bg-zinc-300 inline-flex h-8 text-sm w-16 place-content-center place-items-center">SAIR</button>
            <ModalPerfil show={show}/>
        </div>
        {/* Collapsable Menu */}
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-8' /> : <XIcon className='w-8' />}
        </div>
        
      </div>
      

      <ul
        className={
          !nav
            ? 'hidden'
            : 'md:hidden mt-12 flex flex-col absolute bg-zinc-200 w-full px-8 justify-items-end'
        }
      >
        <div id="onClose" className='flex flex-col py-2'>
          <button onClick={() => {setShow(true)}} className="w-22">PERFIL</button>
          <button onClick={logout}>SAIR</button>
          
        </div>
      </ul>
      {show && <ModalPerfil onClick={(e) => {setShow(handleClose(e))}} id="Modal" show={show}/>}
    </div>
  )
}


export default Navbar
