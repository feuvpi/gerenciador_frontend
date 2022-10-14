import { set } from 'date-fns'
import React, { useState, useEffect, useContext } from 'react'
import { OperationContext } from "../contexts/operationContext"
import { quotePrice } from '../services/api'

const Assets = props => {

  

  const { operationData, setOperationData } = useContext(OperationContext);
  const { responseData, setResponseData } = useState(undefined)

  useEffect(() => {
    (async () => {
      const data = await quotePrice('AAPL')
      console.log(data)
      
    })()
  })

  const rows = operationData.map((operation) => (
    <tr className='bg-slate-400 dark:border-gray-700 hover:bg-slate-500 rounded-md'>
      <td className='py-4 px-6 text-center' value={operation._id} hidden>{operation._id}</td>
      <td
        scope='row'
        className='py-4 px-6 font-medium text-slate-200 whitespace-nowrap'
      >
        {operation.symbol}
      </td>
      <td className='py-4 px-6 text-center'>R${operation.cost}</td>
      <td className='py-4 px-6 text-center'>{operation.quantity}</td>
      <td className='py-4 px-6 text-center'>R${operation.cost / operation.quantity}</td>
      <td className='py-4 px-6 text-center'>R${parseFloat(operation.cost*operation.quantity)}</td>
      <td className='py-4 px-6 text-center'>formula_rendimento</td>
     
    </tr>
  ))

  return (
      <>
      <div className="w-full md:h-screen flex flex-col justify-between pt-4 rounded-lg">
      <div class="overflow-x-auto relative rounded-lg">
        <table class="w-full text-sm text-left text-slate-200">
          <thead class="text-xs text-gray-700 uppercase bg-indigo-500 dark:text-white">
            <tr>
              <th scope="col" class="py-3 px-6 text-center">
                ATIVO
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                COTAÇÃO
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                QUANTIDADE
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                PREÇO MÉDIO
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                TOTAL
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                RENDIMENTO
              </th>
            </tr>
          </thead>
          <tbody>
              {rows}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Assets