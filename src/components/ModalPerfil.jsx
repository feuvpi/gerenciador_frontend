import React, { useState, useContext } from 'react';
import { AuthContext } from "../contexts/auth";
import { editUser } from '../services/api';
import { XIcon } from '@heroicons/react/outline'

export const Modal = props => {

    const { user } = useContext(AuthContext)

    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [oldPassword, setOldPassword] = useState("password");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const _id = props.id

    const wait = () => {
        console.log("fechando modal...")
        props.modalPerfilToNav(false)
    }

    const handleSubmit = async () => {
        if(newPassword !== confirmPassword){
            setStatusMessage('As senhas não conferem!');
            return;
        }
        let password = newPassword
        if(newPassword === ""){
            password = oldPassword
        }
        const edit = await editUser(name, email, oldPassword, password, _id)
        console.log(edit)
        if(edit.data.message == 'Senha antiga não confere.'){
            setStatusMessage(edit.data.message)
            return
        } else {

            user.name = name;
            user.email = email;
            setStatusMessage("Atualizações realizadas com sucesso!")
            setTimeout(function(){
                wait({position:1})
             }.bind(this), 1500)
        }

    }

    if(!props.show){
        return null;
    }
    
    //document.querySelector('.modal').style.display = 'none'

    return(
        <div id="modal" className="w-72 modal top-8 right-0 m-6 h-fit p-1 border-2 border-indigo-500 absolute rounded-md md:self-right bg-slate-400 self-center">
            <div id="modal" className="modal-content">
                <div  id="modal" className="w-72 align-right justify-right">
                <XIcon id="modal" className='w-8'/>
                </div>
                <div id="modal" className="modal-header py-4 align-center text-indigo-700 font-bold justify-center align-center">
                    <h4 id="modal" className="text-center">EDITAR PERFIL</h4>
                </div>
                <div id="modal" className="modal-body">
                    <form id="modal" className="flex flex-col px-2">
                        <label id="modal" className="pt-2 text-indigo-700 font-semibold">NOME:</label>
                        <input id="modal" value={name} onChange={(e) => {setName(e.target.value)}} className="border-2 border-black rounded-md" type="string" name="name" placeholder="Nome" required/>
                        <label id="modal" className="pt-2  text-indigo-700 font-semibold">EMAIL:</label>
                        <input id="modal" value={email} onChange={(e) => {setEmail(e.target.value)}} className="border-2 border-black rounded-md" type="text" name="email" placeholder="E-mail" required/>
                        <label id="modal" className="pt-2  text-indigo-700 font-semibold">SENHA ATUAL:</label>
                        <input id="modal" onChange={(e) => {setOldPassword(e.target.value)}} className="border-2 border-black rounded-md" type="text" name="oldPassword" placeholder="Senha Atual" required/>
                        <label id="modal" className="pt-2 text-indigo-700 font-semibold">NOVA SENHA:</label>
                        <input id="modal" onChange={(e) => {setNewPassword(e.target.value)}} className="border-2 border-black rounded-md" type="text" name="password" placeholder="Nova Senha" required/>
                        <label id="modal" className="pt-2 text-indigo-700 font-semibold">CONFIRME A NOVA SENHA:</label>
                        <input id="modal" onChange={(e) => {setConfirmPassword(e.target.value)}} className="border-2 border-black rounded-md" type="text" name="password" placeholder="Nova Senha" required/>
                        <p className="pt-2 text-red-600 text-bold">{statusMessage}</p>
                        <button type="button" id="modal" onClick={handleSubmit} className="mt-6">SALVAR</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;