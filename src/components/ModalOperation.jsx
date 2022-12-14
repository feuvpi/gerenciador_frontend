import React, { useState, useContext, useEffect } from 'react';
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
    const [statusMessage, setStatusMessage] = useState("")

    
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

    const wait = () => {
        console.log("fechando modal...")
        props.modalOpToMain(false)
    }

    // -- method for calling the create operation service
    const handleSubmit = async () => {
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
                }
            } catch (error) {
                console.log(error)
                setStatusMessage(error.message)
                return
            }


        // caso seja a criação de uma nova operação
        } else {
            try {
                const save = await postOperation(operationData)
                if(save){
                    console.log("operação salva com sucesso")
                }
                } catch (error) {
                    console.log(error)
                    setStatusMessage(error.message)
                    return;
                }
                
                

        }
        console.log(statusMessage)

        if(props.edit === true){
            setStatusMessage("Operação atualizada com sucesso!");
        } else {
            setStatusMessage("Operation saved!")
        }

        setTimeout(function(){
            wait({position:1})
         }.bind(this), 2000)
        
    }

    if (!props.show){
        return null
    }

    return(
        <div id="Modal" className="modal m-6 h-fit modal p-2 w-72 border-2 border-indigo-500 rounded-md bg-slate-500 justify-self-center place-self-center self-center self-middle absolute">
            <div id="Modal" className="modal-content">
                <div id="Modal" className="modal-header py-4 align-center text-indigo-700 font-bold justify-center align-center">
                    <h4 id="Modal" className="text-center">ADD NEW OPERATION</h4>
                </div>
                <div id="Modal" className="modal-body">
                    <form id="Modal" className="flex flex-col px-2">
                        <input value={props.parentId} type="text" name="id" hidden/>
                        <label id="Modal" className="pt-2 text-indigo-700 font-semibold">STOCK:</label>
                        <input id="Modal" value={symbol} onChange={(e) => {setSymbol(e.target.value)}} className="border-2 border-black rounded-md" type="string" name="symbol" placeholder="CÓDIGO" required/>
                        <label id="Modal" className="pt-2  text-indigo-700 font-semibold">COST:</label>
                        <input id="Modal" value={cost} onChange={(e) => {calc1(e)}} className="border-2 border-black rounded-md" type="text" name="cost" placeholder="PREÇO" required/>
                        <label id="Modal" className="pt-2  text-indigo-700 font-semibold">QUANTITY:</label>
                        <input id="Modal" value={quantity} onChange={(e) => {calc2(e)}} className="border-2 border-black rounded-md" type="number" name="quantity" placeholder="QUANTIDADE" required/>
                        <label id="Modal" className="pt-2 text-indigo-700 font-semibold">OPERATION TYPE:</label>
                        <select onChange={(e) => {setType(e.target.value)}} id="Modal" className="border-2 rounded-md border-black">
                            <option selected="true" disabled="disabled">SELECT</option>
                            <option id="Modal" value="COMPRAR">BUY</option>
                            <option id="Modal" value="VENDER">SELL</option>
                        </select>
                        <p className="text-green-600 font-bold pt-.5">{statusMessage}</p>
                        <label id="Modal" className="pt-6 text-indigo-700 font-semibold text-right">TOTAL:</label>
                        <h3 id="Modal" className="text-xl text-right font-bold">R${total}</h3>
                        <button type="button" onClick={(e) => {handleSubmit(e)}} id="Modal" className="mt-6">SAVE</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalOperation;