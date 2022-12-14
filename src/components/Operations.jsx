import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../contexts/auth'
import { PencilIcon, XIcon } from '@heroicons/react/solid'
import { getOperations, deleteOperation } from '../services/api'

import { OperationContext } from "../contexts/operationContext"


export const Operations = props => {

  const { operationData, setOperationData } = useContext(OperationContext);

    const { user } = useContext(AuthContext)
    const [operations, setOperations] = useState([])
    const [loading, setLoading] = useState(true)
    const pass = true;
   

    useEffect(() => {
        (async () => {
          try {
            const response = await getOperations(user._id)
            setOperations(response)
            setOperationData(response)
            setLoading(false)
          } catch (error) {
            console.log("error ao realizar requisição para API interna.", error)
          }
          
        })()
      }, [props.show])

      const handleDelete = (id) => {
        deleteOperation(id)
        const updated = operations.filter(u => u._id !== id)
        setOperations(updated)
      }

      if (loading || operations === undefined ) {
        return <div className='loading text-slate-300'>Carregando dados...</div>
      }

      const rows = operations.map((operation) => (
        <tr className='bg-slate-400 dark:border-gray-700 hover:bg-slate-500 rounded-md'>
          <td className='py-4 px-6 text-center' value={operation._id} hidden>{operation._id}</td>
          <td
            scope='row'
            className='py-4 px-6 font-medium text-slate-200 whitespace-nowrap'
          >
            {operation.symbol}
          </td>
          <td className='py-4 px-6 text-center'>{operation.type}</td>
          <td className='py-4 px-6 text-center'>R${operation.cost}</td>
          <td className='py-4 px-6 text-center'>{operation.quantity}</td>
          <td className='py-4 px-6 text-center'>R${parseFloat(operation.cost*operation.quantity)}</td>
          <td className='py-4 px-6 text-center'>{operation.operationDate}</td>
          
          <td id="editOperation" className='py-4 px-6 text-center'>
            <button id="editOperation" onClick={() => props.childrenToParent(pass, operation._id, operation.symbol, operation.type, operation.cost, operation.quantity, operation.operationDate)} 
              className='h-8 hover:bg-indigo-400 align-center justify-center text-center place-content-center place-items-center'>
              <PencilIcon id="editOperation"  className='h-4 text-slate-200' />
            </button>
          </td>
          <td id="deleteOperation" className='py-4 px-6 text-center'>
            <button id="deleteOperation" onClick={() => handleDelete(operation._id)}
              className='h-8 hover:bg-indigo-400 align-center justify-center text-center place-content-center place-items-center'>
              <XIcon id="deleteOperation"  className='h-4 text-slate-200' />
            </button>
          </td>
        </tr>
      ))



  return (
    <div id="Operations" className='ld ld-bounce-in overflow-x-auto overflow-y-visible h-full relative rounded-lg'>
            <table className='w-full text-sm text-left text-slate-200 rounded-lg'>
              <thead className='text-xs text-gray-700 uppercase bg-indigo-500 dark:text-white'>
                <tr className=''>
                <th scope='col' className='py-3 px-6' hidden>
                    USER.ID
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    ASSET
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    TYPE
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    COST
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    QUANTITY
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    TOTAL
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    DATE
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    EDIT
                  </th>
                  <th scope='col' className='py-3 px-6 text-center'>
                    DELETE
                  </th>
                </tr>
              </thead>
              <tbody className='rounded-lg'>
                {rows}
              </tbody>
            </table>
          </div>
  )
}

export default Operations
