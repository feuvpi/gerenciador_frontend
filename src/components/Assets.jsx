import React, { useState, useEffect, useContext } from 'react'
import { OperationContext } from "../contexts/operationContext"
import { quotePrice } from '../services/api'

const Assets = props => {

  const [loading, setLoading] = useState(true)

  const { operationData } = useContext(OperationContext);

  const [ assets, setAssets ] = useState(null);

  

  useEffect(() => {

    
    (async () => { 

      var assetsDict = {}

      // -- cleaning assets state
      setAssets({})

      console.log(operationData)

      // -- create assets
      const createAssets = await operationData.map((operation) => {
        if(!(assetsDict[operation.symbol])){
         console.log("tem que entrar aqui ao menos 3x")
          var asset = {
            symbol: operation.symbol,
            currentPrice: 0,
            meanPrice: 0,
            balance: 0,
            totalBought: 0,
            totalQuantityBought: 0
          }
          assetsDict = {...assetsDict, [operation.symbol]: asset}
          //setAssets({...assets, [operation.symbol]: asset})
        }
        
      })

      

      // -- current price
      const currentPrice = await operationData.map(async (operation) => {
        var lastPrice = await quotePrice(operation.symbol)
        var currentAsset = assetsDict[operation.symbol]
        currentAsset.currentPrice = lastPrice
        assetsDict = {...assetsDict, [operation.symbol]: currentAsset}
      })

      

      

      // -- quantity balance
      const updateBalance = await operationData.map((operation) => {
        var currentAsset = assetsDict[operation.symbol]
        console.log(currentAsset)
        let updatedBalance = 0
        if(operation.type == "COMPRAR"){
          updatedBalance =+ operation.quantity
        } else {
          updatedBalance =+ operation.quantity
        }
        currentAsset.balance = updatedBalance
        
        assetsDict = {...assetsDict, [operation.symbol]: currentAsset}
      })

      console.log(assetsDict)

      // -- mean price
      const meanPrice = operationData.map((operation) => {
        var currentAsset = assetsDict[operation.symbol]
        if(operation.type == "COMPRAR"){
          currentAsset.totalBought =+ operation.cost * operation.quantity
          currentAsset.totalQuantityBought =+ operation.quantity
          currentAsset.meanPrice = currentAsset.totalBought / currentAsset.totalQuantityBought
          assetsDict = {...assetsDict, [operation.symbol]: currentAsset}

        } 
        
      })

      setAssets(assetsDict)

      // meanPrice()
      // updateBalance()
      setLoading(false)
    })()
  }, [])

  //CRIAR DICIONARIO
  //ADICIONAR ATIVOS AO DICIONARIO ITERANDO COM OPERATION DATA

  
  console.log(assets)

  if (loading) {
    return <div className='loading text-slate-300'>Carregando dados...</div>
  }

  const rows = Object.keys(assets).map((asset) => (
    <tr className='bg-slate-400 dark:border-gray-700 hover:bg-slate-500 rounded-md'>
      <td
        scope='row'
        className='py-4 px-6 font-medium text-slate-200 whitespace-nowrap'
      >
        {asset.symbol}
      </td>
      <td className='py-4 px-6 text-center'>R${asset.currentPrice}</td>
      <td className='py-4 px-6 text-center'>{asset.balance}</td>
      <td className='py-4 px-6 text-center'>R${asset.meanPrice}</td>
      <td className='py-4 px-6 text-center'>R${parseFloat(asset.currentPrice*asset.balance)}</td>
      <td className='py-4 px-6 text-center'>%{(((asset.meanPrice / asset.currentPrice)-1)*100).toFixed(2)}</td>
     
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