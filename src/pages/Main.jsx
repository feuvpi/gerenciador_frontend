// -- react
import React, { useState, useEffect } from 'react';

// -- components
import Navbar from '../components/Navbar.jsx'
import Operations from '../components/Operations'
import Assets from '../components/Assets'
import { ModalOperation } from '../components/ModalOperation'

// -- utils
import { handleClose } from '../utils/handleClose'

export const Main = () => {

  // - show state for modal opening/closing
  const [show, setShow] = useState(false)
  const [buttons, setButtons] = useState(true)
  const [data, setData] = useState("")

  const [parentId, setParentId] = useState("")
  const [parentSymbol, setParentSymbol] = useState("")
  const [parentCost, setParentCost] = useState("")
  const [parentQuantity, setParentQuantity] = useState("")
  const [parentType, setParentType] = useState("")
  const [editing, setEditing] = useState("");


  const modalOpToMain = (show) => {
    console.log("entrei aqui")
    setShow(show)
  }

  const childrenToParent = (pass, id, symbol, type, cost, quantity, operationDate) => {
    console.log(symbol)
    console.log(id)
    setEditing(pass);
    setParentId(id)
    setParentSymbol(symbol)
    setParentType(type)
    setParentCost(cost)
    setParentQuantity(quantity)
    setShow(pass)
  }

  const viewOperations = () => {
    const buttonOperations = document.getElementById("operations");
    const buttonAssets = document.getElementById("assets");
    setButtons(true)
    buttonAssets.disabled = false;
    buttonOperations.disabled = true;
  }

  const viewAssets = () => {
    const buttonOperations = document.getElementById("operations");
    const buttonAssets = document.getElementById("assets");
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
        className='overflow-y-visible h-screen flex flex-col pt-28 px-8 bg-slate-800'
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


        <div className='w-full h-5/6 flex flex-col pt-4 px-0.5 md:px-8 rounded-lg'>
          <button
            onClick={() => {
              console.log(show)
              setParentId(null)
              setParentCost(null)
              setParentQuantity(null)
              setParentSymbol(null)
              setEditing(false)
              setShow(true)
              
            }}
            id='addOperation'
            data-bs-toggle="modalOperation2" data-bs-target="#exampleModalLg"
            type='button'
            className='mb-5 inline-block px-4 py-1.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          >
            +OPERAÇÃO
          </button>


          <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalLg" tabindex="-1" aria-labelledby="exampleModalLgLabel" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLgLabel">
          Large modal
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        ...
      </div>
    </div>
  </div>
</div>

            { buttons ? <Operations childrenToParent={childrenToParent} show={show} /> : <Assets/> }      

        </div>
        {show && <ModalOperation id='ModalOperation' modalOpToMain={modalOpToMain} show={show} parentId={parentId} symbol={parentSymbol} cost={parentCost} quantity={parentQuantity} edit={editing}/>}
      </div>
    </>
  )
}

export default Main

/*parseDouble(parseFloat(operation.cost) * parseFloat(operations.quantity))}*/