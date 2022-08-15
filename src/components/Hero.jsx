import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import { Link } from 'react-router-dom'

import bgTransaction from "../assets/undraw_investment_data_re_sh9x.svg";

export const Hero = () => {
  return (
    <div name="home" className="w-full md:h-screen bg-slate-700 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-screen-2xl m-auto items-center">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          {" "}
          {/* Column 1 */}
          <p className="text-2xl pb-1 mt-16 md:mt-0">Analise e acompanhamento de ativos</p>
          <h1 className="py-3 pb-6 text-5xl md:text-7xl font-bold">
            CONTROLE DE PORTFOLIO
          </h1>
          <p className="text-2xl sm:w-[80%] text-justify">
            Informações atualizadas dos principais mercados do mundo.
          </p>
          
          <button className=" ml-0 py-3 px-3 sm:w-[80%] my-4 mb-0">
          <Link to='/register'>
            CRIE UMA CONTA GRATUITA
            </Link>
          </button>
          
          
        </div>
        <div>
          {/* column 2 */}
          <img className="w-full" src={bgTransaction} alt="" />
        </div>


          {/* BOTTOM */}
        <div className="md:absolute grid grid-cols-1 md:grid-cols-3 md:col-span-2 md:bottom-[-5%] mx-1 p-4 items-center justify-center transform justify-self-center">
        <div className="flex flex-col mx-4 my-2 py-6 md:min-w[760px] bottom-[-5%] bg-indigo-600 text-white borderborder-slate-300 rounded-xl text-center shadow-xl">
          <p className="text-xl">Forex & Crypto</p>
          <div>
            <p>Icon. Cotações atualizadas das principais Cryptomoedas.</p>
            <p>Icon. Suporte para forex.</p>
            <p>Icon. Interface minimalista.</p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap mx-4 my-2 py-6 md:min-w[760px] bottom-[-5%] bg-indigo-600 text-white borderborder-slate-300 rounded-xl text-center shadow-xl">
          <p className="text-xl">Cobertura Global</p>
          <div>
            <p>Icon. Sincronização com os principais mercados globais.</p>
            <p>Icon. Suporte para Criptoativos.</p>
            <p>Icon. Interface minimalista.</p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap my-2 py-6 md:min-w[760px] bottom-[-5%] bg-indigo-600 text-white borderborder-slate-300 rounded-xl text-center shadow-xxl">
          <p>Financial Assets</p>
          <div>
            <p>Icon. Informações atualizadas dos principais mercados globais.</p>
            <p>Icon. Suporte para Criptoativos.</p>
            <p>Icon. Interface minimalista.</p>
          </div>
        </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
