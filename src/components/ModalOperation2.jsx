import React, { useState, useEffect, useContext } from 'react';
import { getOperations, postOperation } from '../services/api';
import { AuthContext } from '../contexts/auth'

export const ModalOperation2 = props => {

    // -- states
    const { user } = useContext(AuthContext)
    const [symbol, setSymbol] = useState(props.parentSymbol);
    const [cost, setCost] = useState("");
    const [quantity, setQuantity] = useState("");
    const [type, setType] = useState("");
    const [total, setTotal] = useState("")

    
    // -- calculating operation total cost
    const calc1 = (e) => {
        setCost(e.target.value)
        setTotal(e.target.value * quantity)
    }

    // -- calculating operation total cost
    const calc2 = (e) => {
        setQuantity(e.target.value)
        setTotal(e.target.value * cost)
    }

    // -- method for calling the create operation service
    const addOperation = async (e) => {
        //console.log(api.defaults.headers.Authorization)
        const operationData = {
            symbol: symbol,
            cost: parseFloat(cost),
            quantity: parseFloat(quantity),
            type: type,
            user: user.id
        }
        console.log(operationData)
        //console.log(operation)
        try {
        const save = await postOperation(operationData)
        if(save){
            console.log("Operação salva com sucesso!")
            console.log(save)
        }
        } catch (error) {
            console.log(error)
        }
    }

    //api.defaults.headers.Authorization = user.token
    //console.log(api.defaults.headers.Authorization)

    if (!props.show){
        return null
    }

    return(





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






/*
        <div id="Modal" className="modal m-6 h-fit modal p-2 w-72 border-2 border-indigo-500 rounded-md bg-slate-500 justify-self-center place-self-center self-center self-middle absolute">
            <div id="Modal" className="modal-content">
                <div id="Modal" className="modal-header py-4 align-center text-indigo-700 font-bold justify-center align-center">
                    <h4 id="Modal" className="text-center">NOVA OPERAÇÃO</h4>
                </div>
                <div id="Modal" className="modal-body">
                    <form id="Modal" className="flex flex-col px-2">
                        <label id="Modal" className="pt-2 text-indigo-700 font-semibold">CÓDIGO:</label>
                        <input id="Modal" onChange={(e) => {setSymbol(e.target.value)}} className="border-2 border-black rounded-md" type="string" name="symbol" placeholder="CÓDIGO" required/>
                        <label id="Modal" className="pt-2  text-indigo-700 font-semibold">PREÇO:</label>
                        <input id="Modal" onChange={(e) => {calc1(e)}} className="border-2 border-black rounded-md" type="text" name="cost" placeholder="PREÇO" required/>
                        <label id="Modal" className="pt-2  text-indigo-700 font-semibold">QUANTIDADE:</label>
                        <input id="Modal" onChange={(e) => {calc2(e)}} className="border-2 border-black rounded-md" type="number" name="quantity" placeholder="QUANTIDADE" required/>
                        <label id="Modal" className="pt-2 text-indigo-700 font-semibold">TIPO DE OPERAÇÃO:</label>
                        <select onChange={(e) => {setType(e.target.value)}} id="Modal" className="border-2 rounded-md border-black">
                            <option selected="true" disabled="disabled">TIPO DE OPERAÇÃO</option>
                            <option id="Modal" value="COMPRAR">COMPRAR</option>
                            <option id="Modal" value="VENDER">VENDER</option>
                        </select>
                        <label id="Modal" className="pt-6 text-indigo-700 font-semibold text-right">TOTAL:</label>
                        <h3 id="Modal" className="text-xl text-right font-bold">R${total}</h3>
                        <button type="button" onClick={(e) => {addOperation(e)}} id="Modal" className="mt-6">SALVAR</button>
                    </form>
                </div>
            </div>
        </div>
        */
    )
}

export default ModalOperation2;