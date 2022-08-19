// -- react
import React, { useState } from 'react'

// -- components
import Navbar from '../components/Navbar.jsx'
import Operations from '../components/Operations'
import Assets from '../components/Assets'
import ModalOperation from '../components/ModalOperation'

// -- utils
import { handleClose } from '../utils/handleClose'

export const Main = () => {

  // - show state for modal opening/closing
  const [show, setShow] = useState(false)
  const [buttons, setButtons] = useState(true)

  let buttonOperations = document.getElementById("operations");
  let buttonAssets = document.getElementById("assets");

  const viewOperations = () => {
    setButtons(true)
    buttonAssets.disabled = false;
    buttonOperations.disabled = true;
  }

  const viewAssets = () => {
    buttonOperations.disabled = false;
    buttonAssets.disabled = true;
    setButtons(false);
  }

  return (
    <>
      <Navbar
        onClick={e => {
          setShow(handleClose(e, show))
        }}
      />
      <div
        onClick={e => {
          setShow(handleClose(e, show))
        }}
        className='h-screen flex flex-col pt-28 px-8 bg-slate-800'
      >
        <div className='flex justify-center'>
          <div className='inline-flex'>
            <button
              onClick={viewAssets}
              className='bg-slate-300 hover:bg-slate-300 text-gray-800 font-bold hover:text-gray-800 py-2 px-4 focus:outline-none rounded-l disabled:opacity-75'
              id="assets"
            > 
              CARTEIRA
            </button>
            <button
              id="operations"
              onClick={viewOperations}
              className='bg-slate-300 hover:bg-slate-300 hover:text-gray-800 text-gray-800 font-bold py-2 px-4 rounded-r focus:outline-none disabled:opacity-75'
            > 
              OPERAÇÕES
            </button>
          </div>
        </div>

        <div className='w-full flex flex-col justify-between pt-4 px-0.5 md:px-8'>
          <button
            onClick={() => {
              setShow(true)
            }}
            id='addOperation'
            type='button'
            className='mb-5 inline-block px-4 py-1.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          >
            +OPERAÇÃO
          </button>

            { buttons ? <Operations/> : <Assets/> }      

        </div>
        {show && <ModalOperation id='ModalOperation' show={show} />}
      </div>
    </>
  )
}

export default Main

/*parseDouble(parseFloat(operation.cost) * parseFloat(operations.quantity))}*/