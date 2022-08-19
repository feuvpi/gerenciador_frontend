import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { ChartBarIcon } from "@heroicons/react/outline";
import { AuthContext } from "../contexts/auth"
import { createUser } from '../services/api';

const FormRegister = () => {

  const { login } = useContext(AuthContext);

  // -- states
  const [emailReg, setEmailReg] = useState("");
  const [nameReg, setNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  // -- method for calling user registration service
  const register = async () => {
    if(passwordReg !== confirmPassword){
      setErrorMessage("Senhas não conferem.");
    } else {
      // -- cal the api service here
      setErrorMessage("");
      try {
        console.log(emailReg)
        console.log(nameReg)
        const userCreated = await createUser(nameReg, emailReg, passwordReg);
        if (userCreated){
          console.log("Usuário criado com sucesso:")
          console.log(userCreated)
          setNameReg("");
          setEmailReg("");
          setPasswordReg("");
          login(emailReg, passwordReg)
        }
      } catch (error) {
        
      }
      
    }
    }
  

  return (
    <div
      name="home"
      className="w-full md:h-screen bg-slate-800 flex flex-col justify-between py-16"
    >
      <div className="grid max-w-screen-2xl items-center">
        {/* column 1 */}

        <div class="w-screen flex items-center justify-center px-4 sm:px-6 lg:px-12">
          <div class="max-w-lg w-full space-y-6 border-2 border-indigo-600 rounded-md p-2 shadow-xl bg-slate-900">
            {/* FORM HEADER */}

            <div>
              <ChartBarIcon className="mx-auto h-16 w-auto text-indigo-600" />
              <h2 class="mt-6 text-center text-3xl font-extrabold text-slate-200">
                Crie uma nova conta
              </h2>
              <p class="mt-2 text-center text-sm text-slate-200">
                <a
                  href="/"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Ja possuí uma conta? Entrar agora.
                </a>
              </p>
            </div>

            {/* FORM */}
            <form
              id="Modal"
            >
              <input type="hidden" name="remember" value="true" />{" "}
              {/* VERIFICAR */}
              <div class="grid grid-cols-2 -space-y-px">

                {/* INSERIR NOME */}
                <div className="col-span-2 flex flex-row justify-center">
                  <div className="pr-1 py-2 w-full">
                    <label for="name" class="font-bold text-sm text-slate-300">
                      Olá, como você se chama?
                    </label>
                    <input
                      onChange={(e) => {setNameReg(e.target.value)}}
                      id="name"
                      name="name"
                      required
                      class="shadow-lg appearance-none rounded-md text-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Digite seu nome"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="col-span-2 flex flex-row justify-center">
                  <div className="pr-1 py-2 w-full">
                    <label for="email-address" class="font-bold text-sm text-slate-300">
                      Digite seu e-mail:
                    </label>
                    <input
                      onChange={(e) => {setEmailReg(e.target.value)}}
                      id="email-address"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      class="shadow-lg appearance-none rounded-md text-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Digite um Email"
                    />
                  </div>
                </div>

                {/* PASSWORD & CONFIRM */}
                <div className="col-span-2 flex flex-row justify-center">
                  <div className="pr-1 py-2 w-full">
                    <label for="password" class="font-bold text-sm text-slate-300">
                      Digite uma senha:
                    </label>
                    <input
                    onChange={(e) => {setPasswordReg(e.target.value)}}
                      id="password"
                      name="password"
                      type="password"
                      required
                      class="shadow-lg appearance-none text-sm rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Digita uma senha"
                    />
                  </div>

                  <div className="w-full pl-1 py-2">
                    <label for="confirm-password" class="font-bold text-sm text-slate-300">
                      Confirme sua senha:
                    </label>
                    <input
                      onChange={(e) => {setConfirmPassword(e.target.value)}}
                      id="confirm-password"
                      name="confirmm-password"
                      type="password"
                      required
                      class="shadow-lg appearance-none rounded-md text-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Confirme sua senha"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-red-500 pl-1 text-xs">{errorMessage}</p>
                </div>
              </div>
              <div className="flex justify-center text-slate-300">
                <p> - ou - </p>
              </div>
              <div className="flex justify-center py-4">
                <a href="#">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    className="w-12 shadow-lg rounded-3xl"
                  />
                </a>
              </div>
              <div>
                <button
                  type="button"
                  onClick={(e) => {register(emailReg, passwordReg)}}
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* column 2 */}
      </div>
    </div>
  );
};

export default FormRegister;
