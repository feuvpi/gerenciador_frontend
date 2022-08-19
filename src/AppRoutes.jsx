import React, { useState, useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Main from './pages/Main.jsx';
import Home from './pages/Home.jsx';
import Assets from './pages/Assets.jsx';
import FormAuth from './components/FormAuth'
import FormRegister from './components/FormRegister.jsx';
import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {


    const Private = ({children}) => {
        // -- informações do contexto AuthContext
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated){
            return <Navigate to='/'/>;
        }

        return children;
    }

    return(

    <AuthProvider>
            <Routes>
                <Route path="/" element={<FormAuth/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<FormRegister/>}/>
                <Route path="/operations" element={<Private><Main/></Private>}/>
                <Route path="/assets" element={<Private><Assets/></Private>}/>
            </Routes>
    </AuthProvider>
       
    );
}

export default AppRoutes;