import React, { useState, useContext } from 'react';
import { postOperation, updateOperation } from '../services/api';
import { AuthContext } from '../contexts/auth'

export const ModalOperation = props => {

    // -- states
    const { user } = useContext(AuthContext)
    const [symbol, setSymbol] = useState(props.symbol);
    const [cost, setCost] = useState(props.cost);
    const [quantity, setQuantity] = useState(props.quantity);
    const [type, setType] = useState("");
    const [total, setTotal] = useState((props.quantity)*(props.cost))

    
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

    // -- handling select value
    const handleSelect = () => {

    }

    // -- handleSubmit
    const handleSubmit = () => {
        if(props.edit == true){

        } else {

        }
    }

    // -- method for calling the create operation service
    const addOperation = async () => {
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

        // caso seja uma operação de atualização
        if(props.edit === true){
            operationData._id = props.parentId;
            try {
                const save = await updateOperation(operationData)
                if (save){
                    console.log("Operação atualizada com sucesso!")
                    console.log(save)
                }
            } catch (error) {
                console.log(error)
            }


        // caso seja a criação de uma nova operação
        } else {
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
    }

    // // -- method for edit operation
    // const editOperation = async (e) = {

    // }

    //api.defaults.headers.Authorization = user.token
    //console.log(api.defaults.headers.Authorization)

    if (!props.show){
        return null
    }

    return(
        <div id="Modal" className="modal m-6 h-fit modal p-2 w-72 border-2 border-indigo-500 rounded-md bg-slate-500 justify-self-center place-self-center self-center self-middle absolute">
            <div id="Modal" className="modal-content">
                <div id="Modal" className="modal-header py-4 align-center text-indigo-700 font-bold justify-center align-center">
                    <h4 id="Modal" className="text-center">NOVA OPERAÇÃO</h4>
                </div>
                <div id="Modal" className="modal-body">
                    <form id="Modal" className="flex flex-col px-2">
                        <input value={props.parentId} type="text" name="id" hidden/>
                        <label id="Modal" className="pt-2 text-indigo-700 font-semibold">CÓDIGO:</label>
                        <input id="Modal" value={symbol} onChange={(e) => {setSymbol(e.target.value)}} className="border-2 border-black rounded-md" type="string" name="symbol" placeholder="CÓDIGO" required/>
                        <label id="Modal" className="pt-2  text-indigo-700 font-semibold">PREÇO:</label>
                        <input id="Modal" value={cost} onChange={(e) => {calc1(e)}} className="border-2 border-black rounded-md" type="text" name="cost" placeholder="PREÇO" required/>
                        <label id="Modal" className="pt-2  text-indigo-700 font-semibold">QUANTIDADE:</label>
                        <input id="Modal" value={quantity} onChange={(e) => {calc2(e)}} className="border-2 border-black rounded-md" type="number" name="quantity" placeholder="QUANTIDADE" required/>
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

export default ModalOperation;