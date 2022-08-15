// -- react
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../contexts/auth'

// -- components
import Navbar from '../components/Navbar.jsx'
import ModalOperation from '../components/ModalOperation'

// -- utils
import { handleClose } from '../utils/handleClose'

// -- icons
import { PencilIcon } from '@heroicons/react/solid'

// -- navigate state
import { useNavigate } from 'react-router-dom'

import { getOperations } from '../services/api'

export const Operations = () => {
  const { user } = useContext(AuthContext)
  const [operations, setOperations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
    console.log("this: " + user.id)
      const response = await getOperations(user.id)
      console.log("response: " + response);
      //setOperations(response.data)
      setLoading(false)
    })()
  }, [])
  // - show state for modal opening/closing
  const [show, setShow] = useState(false)

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/assets')
  }

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

  if (loading) {
    return <div className='loading'>Carregando dados......</div>
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
        className='h-screen flex flex-col pt-28 px-8 bg-gray-700'
      >
        <div className='flex justify-center'>
          <div className='inline-flex'>
            <button
              onClick={handleClick}
              className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
            >
              CARTEIRA
            </button>
            <button
              className='bg-slate-500 hover:bg-slate-500 hover:text-gray-800 text-gray-800 font-bold py-2 px-4 rounded-r focus:outline-none disabled:opacity-75'
              disabled
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
                {operations.map(() => (
                  <tr className='bg-slate-400 dark:border-gray-700 hover:bg-slate-500'>
                    <th
                      scope='row'
                      className='py-4 px-6 font-medium text-slate-200 whitespace-nowrap'
                    >
                      PETR4
                    </th>
                    <td className='py-4 px-6 text-center'>COMPRA</td>
                    <td className='py-4 px-6 text-center'>R$10.00</td>
                    <td className='py-4 px-6 text-center'>2000</td>
                    <td className='py-4 px-6 text-center'>R$20000.00</td>
                    <td className='py-4 px-6 text-center'>07/08/2022</td>
                    <td className='py-4 px-6 text-center'>
                      <button className='h-8 hover:bg-indigo-400 align-center justify-center text-center place-content-center place-items-center'>
                        <PencilIcon className='h-4 text-slate-200' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {show && <ModalOperation id='ModalOperation' show={show} />}
      </div>
    </>
  )
}

export default Operations
