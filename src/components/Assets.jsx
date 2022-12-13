import React, { useState, useEffect, useContext } from 'react'
import { OperationContext } from "../contexts/operationContext"
import { quotePrice } from '../services/api'


const Assets = () => {

  const [loading, setLoading] = useState(true)

  const { operationData } = useContext(OperationContext);

  const [ assets, setAssets ] = useState(null);
  console.log("foda-se curintia")
  const [hasUpdated, setHasUpdated] = useState(false);
  var assetsDict = {}

  const createAssets =operationData.map((operation) => {
    if(!(assetsDict[operation.symbol])){
      var currentAsset = {
        symbol: operation.symbol,
        currentPrice: 0,
        meanPrice: 0,
        balance: 0,
        totalBought: 0,
        totalQuantityBought: 0
      }
      assetsDict = {...assetsDict, [operation.symbol]: currentAsset}
    }
  })

  

  const meanPrice = operationData.map((operation) => {
    var currentAsset = assetsDict[operation.symbol]
    if(operation.type == "COMPRAR"){
      currentAsset.totalBought =+ operation.cost * operation.quantity
      currentAsset.totalQuantityBought =+ operation.quantity
      currentAsset.meanPrice = currentAsset.totalBought / currentAsset.totalQuantityBought
      assetsDict = {...assetsDict, [operation.symbol]: currentAsset}
      
    } 
    
  })

   // -- quantity balance
   const updateBalance = operationData.map((operation) => {
    var currentAsset = assetsDict[operation.symbol]
    let updatedBalance = 0
    if(operation.type == "COMPRAR"){
      updatedBalance =+ operation.quantity
    } else {
      updatedBalance =+ operation.quantity
    }
    currentAsset.balance = updatedBalance
    assetsDict = {...assetsDict, [operation.symbol]: currentAsset}
    
  })



  useEffect(() => {

    // console.log("foda-se curintia")
    (async () => { 
 
    const currentPrice = await operationData.map(async (operation) => {
      var currentAsset = assetsDict[operation.symbol]
      try {
        var lastPrice = await quotePrice(operation.symbol)
      } catch (error) {
        console.log("erro na requisição de current price:")
        console.log(error)
      }
      if(lastPrice){
        console.log("last updated price: " + lastPrice)
        operation.currentPrice = lastPrice;
        currentAsset.currentPrice = parseFloat(lastPrice);
      } else if (operation.currentPrice){
        currentAsset.currentPrice = parseFloat(operation.currentPrice)
      } else {
        console.log("no updated current price for this asset.")
      }

      assetsDict = {...assetsDict, [operation.symbol]: currentAsset}  
      setAssets(assetsDict)
    }) 

    }
    
    )()
  }, [])


  if (assets === null) {
    return <div className='loading text-slate-300'>Carregando dados...</div>
  }

  
  const rows = Object.entries(assets).map((asset) => (
    <tr className='bg-slate-400 dark:border-gray-700 hover:bg-slate-500 rounded-md'>
      <td scope='row' className='py-4 px-6 font-medium text-slate-200 whitespace-nowrap text-center'>
        {asset[1].symbol}
      </td>
      <td className='py-4 px-6 text-center'>USD${asset[1].currentPrice}</td>
      <td className='py-4 px-6 text-center'>{asset[1].balance}</td>
      <td className='py-4 px-6 text-center'>USD${asset[1].meanPrice}</td>
      <td className='py-4 px-6 text-center'>USD${parseFloat(asset[1].currentPrice*asset[1].balance)}</td>
      <td className='py-4 px-6 text-center'>%{(((asset[1].meanPrice / asset[1].currentPrice)-1)*100).toFixed(2)}</td>
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
                ASSET
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                QUOTE
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                QUANTITY
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                MEAN PRICE
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                TOTAL
              </th>
              <th scope="col" class="py-3 px-6 text-center">
                RESULT
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