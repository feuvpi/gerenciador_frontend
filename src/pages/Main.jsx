// -- react
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../contexts/auth'

// -- components
import Navbar from '../components/Navbar.jsx'
import Operations from '../components/Operations'
import Assets from '../components/Assets'
import ModalOperation from '../components/ModalOperation'

// -- utils
import { handleClose } from '../utils/handleClose'

// -- navigate state
import { useNavigate } from 'react-router-dom'

// -- requests
import { getOperations } from '../services/api'

export const Main = () => {

  // - show state for modal opening/closing
  const [show, setShow] = useState(false)
  const [buttons, setButtons] = useState(true)

  const navigate = useNavigate()





  /*
  const handleClose = (e) => {
    if(e.target.id === "addOperation"){
        if(!show){
            return null 
        } else {
            console.log("aqui")
            return null
            
        }
    }
    if(e.target.id === "ModalOperation"){
        if(!show){
            return null
        } else {
            return null
        }
    }
    if(!show){
        return null;
    } else{
        setShow(false);
        console.log(show)
        console.log(e.target)
    }
}
*/

 /* if (loading) {
    return <div className='loading'>Carregando dados......</div>
  } */

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

  let operations = true;

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
  
          


          {/*
          <div className='overflow-x-auto relative rounded-lg'>
            <table className='w-full text-sm text-left text-slate-200'>
              <thead className='text-xs text-gray-700 uppercase bg-indigo-500 dark:text-white'>
                <tr className=''>
                  <th scope='col' className='py-3 px-6'>
                    ATIVO
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    TIPO
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    PREÇO
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    QUANTIDADE
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    TOTAL
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    DATA
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    EDITAR
                  </th>
                </tr>
              </thead>
              <tbody>
                {operations.map((operation) => (
                  <tr className='bg-slate-400 dark:border-gray-700 hover:bg-slate-500'>
                    <th
                      scope='row'
                      className='py-4 px-6 font-medium text-slate-200 whitespace-nowrap'
                    >
                      {operation.symbol}
                    </th>
                    <td className='py-4 px-6 text-center'>{operation.type}</td>
                    <td className='py-4 px-6 text-center'>{operation.cost}</td>
                    <td className='py-4 px-6 text-center'>{operation.quantity}</td>
                    <td className='py-4 px-6 text-center'>{parseFloat(operation.cost*operation.quantity)}</td>
                    <td className='py-4 px-6 text-center'>{operation.operationDate}</td>
                    <td className='py-4 px-6 text-center'>
                      <button className='h-8 hover:bg-indigo-400 align-center justify-center text-center place-content-center place-items-center'>
                        <PencilIcon className='h-4 text-slate-200' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
                </div>*/}
        </div>
        {show && <ModalOperation id='ModalOperation' show={show} />}
      </div>
    </>
  )
}

export default Main

/*parseDouble(parseFloat(operation.cost) * parseFloat(operations.quantity))}*/