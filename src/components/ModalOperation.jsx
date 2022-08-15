import React, { useState, useEffect, useContext } from 'react';
import { getOperations, postOperation } from '../services/api';
import Axios from "axios"
import { api, createSession} from '../services/api'

import { AuthContext } from '../contexts/auth'

export const Modal = props => {

    // -- states
    const { user } = useContext(AuthContext)
    const [symbol, setSymbol] = useState("");
    const [cost, setCost] = useState("");
    const [quantity, setQuantity] = useState("");
    const [type, setType] = useState("");
    const [total, setTotal] = useState("")
    const [operation, setOperation] = useState({});

    
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

    const addOperation = async (e) => {
        //console.log(api.defaults.headers.Authorization)
        const operationData = {
            symbol: symbol,
            cost: parseFloat(cost),
            quantity: parseFloat(quantity),
            type: type,
            user: user.id
        }
        setOperation(operationData)
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
        <div id="Modal" className="modal m-6 h-fit modal p-2 w-72 border-2 border-indigo-500 rounded-md bg-slate-500 self-center self-middle absolute">
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
    )
}

export default Modal;