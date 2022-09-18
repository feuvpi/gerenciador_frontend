import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, createSession} from '../services/api'

// -- export AuthContext
export const AuthContext = createContext();

// -- export AuthProvider
export const AuthProvider = ({ children }) => {

    // -- states
    const [loading, setLoading] = useState(true) // -- loading state
    const navigate = useNavigate(); // -- navigate state
    const [user, setUser] = useState(null); // -- user state

    // -- useEffect
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user')

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false);
    }, []);

      // -- login handle
      const login = async (email, password) => {
        let statusMessage = '';
        const response = await createSession(email, password)
        if(!response.data.user){
            //console.log('authentication error')
            //statusMessage = { status: false, message:'Credenciais de autenticação invalida. Verifique seu e-mail e sua senha.'}
            return response;
        } else {
            const loggedUser = {
                name: response.data.user.name,
                _id: response.data.user._id,
                email: response.data.user.email,
                token: `Bearer ${response.data.token}`
            }
            setUser(loggedUser);
            api.defaults.headers.Authorization = loggedUser.token
            localStorage.setItem('user', JSON.stringify(loggedUser))
            navigate('/main')
        }
    }

    // -- logout handle
    const logout = () => {
        setUser(null)
        api.defaults.headers.Authorization = null;
        localStorage.removeItem('user')
        console.log("logged out!")
        navigate('/')
    };

      return(
        <AuthContext.Provider
         value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
         </AuthContext.Provider>
      )


}


