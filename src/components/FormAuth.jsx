import React, { useState, useContext } from "react";
import bgTransaction from "../assets/undraw_investment_data_re_sh9x.svg";
import Axios from "axios"
import { AuthContext } from "../contexts/auth"



const FormAuth = () => {

// - constantes de estado
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const { authenticated, login, user } = useContext(AuthContext);

Axios.defaults.withCredentials = false;

// - função para processar o login
const handleSubmit = (e) => {
  e.preventDefault();
  login(email, password);
};

  return (
    <div
      name="home"
      className="w-full md:h-screen bg-slate-800 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-screen-2xl m-auto items-center">
        {/* column 1 */}

        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div class="max-w-md w-full space-y-8">
          {/* --- logo --- */} 
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              {/* --- heading --- */} 
              <h2 className="mt-6 text-slate-200 text-center text-3xl font-extrabold text-black-900">
                Gerenciador de operações financeiras. Entre na sua conta
              </h2>
              {/* --- link para criar novo cadastro --- */} 
              <p className="mt-2 text-center text-sm">
                <a
                  href="/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Não é registrado? Crie uma conta gratuitamente.
                </a>
              </p>
            </div>






            <p>{String(authenticated)}</p>
            {/* --- form para login --- */} 
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                




                {/* --- e-mail --- */} 
                  <label for="email-address" class="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Endereço de E-mail"
                    onChange={(e) => {setEmail(e.target.value);}}
                  />
                </div>
                <div>




                {/* --- senha --- */} 
                  <label for="password" className="sr-only">
                    Senha
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Senha"
                    onChange={(e) => {setPassword(e.target.value);}}
                  />
                </div>
              </div>





              {/* --- lembrar senha --- */} 
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    for="remember-me"
                    className="ml-2 block text-sm text-white"
                  >
                    Lembrar
                  </label>
                </div>





                {/* --- recuperar senha --- */} 
                <div className="text-sm">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>





              {/* --- submit button--- */} 
              <div>
                <button
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
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
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* column 2 */}
        <div>
          <img className="w-full" src={bgTransaction} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FormAuth;
