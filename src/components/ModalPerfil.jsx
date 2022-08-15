import React, { useState, useContext } from 'react';

import { MenuIcon, XIcon, ChartBarIcon } from '@heroicons/react/outline'

export const Modal = props => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");

    if(!props.show){
        return null;
    }

    return(
        <div id="modal" className="w-72 modal top-8 right-0 m-6 h-fit p-1 border-2 border-indigo-500 absolute rounded-md md:self-right bg-slate-400 self-center">
            <div id="modal" className="modal-content">
                <div  id="closePerfil" className="w-72 align-right justify-right">
                <XIcon id="closePerfil" className='w-8'/>
                </div>
                <div id="modal" className="modal-header py-4 align-center text-indigo-700 font-bold justify-center align-center">
                    <h4 id="modal" className="text-center">EDITAR PERFIL</h4>
                </div>
                <div id="modal" className="modal-body">
                    <form id="modal" className="flex flex-col px-2">
                        <label id="modal" className="pt-2 text-indigo-700 font-semibold">NOME:</label>
                        <input id="modal" onChange={(e) => {setName(e.value.target)}} className="border-2 border-black rounded-md" type="string" name="name" placeholder="Nome" required/>
                        <label id="modal" className="pt-2  text-indigo-700 font-semibold">EMAIL:</label>
                        <input id="modal" onChange={(e) => {setEmail(e.value.target)}} className="border-2 border-black rounded-md" type="text" name="email" placeholder="E-mail" required/>
                        <label id="modal" className="pt-2  text-indigo-700 font-semibold">SENHA ATUAL:</label>
                        <input id="modal" onChange={(e) => {setOldPassword(e.value.target)}} className="border-2 border-black rounded-md" type="number" name="oldpassword" placeholder="Senha Atual" required/>
                        <label id="modal" className="pt-2 text-indigo-700 font-semibold">NOVA SENHA:</label>
                        <input id="modal" onChange={(e) => {setPassword(e.value.target)}} className="border-2 border-black rounded-md" type="number" name="password" placeholder="Nova Senha" required/>
                        <button id="modal" className="mt-6">SALVAR</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;