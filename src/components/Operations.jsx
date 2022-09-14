import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import { PencilIcon, XIcon } from '@heroicons/react/solid'
import { getOperations } from '../services/api'


export default function Operations({childrenToParent}) {

    const { user } = useContext(AuthContext)
    const [operations, setOperations] = useState([])
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false)
    const [data, setData] = useState({})
    const pass = true;

    const editOperation = (id, symbol) => {
        //enviar sinal para parent abrir o modal juntamente com data para prenchimento dos campos

    }


    useEffect(() => {
        (async () => {
        console.log("this: " + user.id)
          const response = await getOperations(user.id)
          setOperations(response)
          console.log(response)
          //setOperations(response.data)
          setLoading(false)
        })()
      }, [])


    if (loading) {
        return <div className='loading text-slate-300'>Carregando dados......</div>
      }

  return (
    <div className='overflow-x-auto overflow-y-visible h-full relative rounded-lg'>
            <table className='w-full text-sm text-left text-slate-200 rounded-lg'>
              <thead className='text-xs text-gray-700 uppercase bg-indigo-500 dark:text-white'>
                <tr className=''>
                <th scope='col' className='py-3 px-6' hidden>
                    USER.ID
                  </th>
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
                  <th scope='col' className='py-3 px-6 text-center'>
                    DELETAR
                  </th>
                </tr>
              </thead>
              <tbody className='rounded-lg'>
                {operations.map((operation) => (
                  <tr className='bg-slate-400 dark:border-gray-700 hover:bg-slate-500 rounded-md'>
                    <td className='py-4 px-6 text-center' value={operation._id} hidden>{operation._id}</td>
                    <td
                      scope='row'
                      className='py-4 px-6 font-medium text-slate-200 whitespace-nowrap'
                    >
                      {operation.symbol}
                    </td>
                    <td className='py-4 px-6 text-center'>{operation.type}</td>
                    <td className='py-4 px-6 text-center'>{operation.cost}</td>
                    <td className='py-4 px-6 text-center'>{operation.quantity}</td>
                    <td className='py-4 px-6 text-center'>{parseFloat(operation.cost*operation.quantity)}</td>
                    <td className='py-4 px-6 text-center'>{operation.operationDate}</td>
                    
                    <td id="addOperation" className='py-4 px-6 text-center'>
                      <button id="addOperation" onClick={() => childrenToParent(pass, operation._id, operation.symbol, operation.type, operation.cost, operation.quantity, operation.operationDate)} 
                        className='h-8 hover:bg-indigo-400 align-center justify-center text-center place-content-center place-items-center'>
                        <PencilIcon id="addOperation"  className='h-4 text-slate-200' />
                      </button>
                    </td>
                    <td id="addOperation" className='py-4 px-6 text-center'>
                      <button id="addOperation"
                        className='h-8 hover:bg-indigo-400 align-center justify-center text-center place-content-center place-items-center'>
                        <XIcon id="addOperation"  className='h-4 text-slate-200' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  )
}

//export default Operations