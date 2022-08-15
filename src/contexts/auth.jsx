import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
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
        console.log('requesting authorization... credentials: ' + {email, password});
        const response = await createSession(email, password)
        console.log(response.data)

        if(!response.data.user){
            console.log('authentication error')
            return null;
        } else {
            const loggedUser = {
                id: response.data.user._id,
                email: response.data.user.email,
                token: `Bearer ${response.data.token}`
            }
            setUser(loggedUser);
            api.defaults.headers.Authorization = loggedUser.token
            localStorage.setItem('user', JSON.stringify(loggedUser))
            navigate('/operations')
            console.log("caiu aqui")
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

  

   /* // -- login handle
    const login = (email, password) => {
        Axios.post("http://localhost:3000/auth/authenticate", {
        email: email,
        password: password,
      }).then((response) => {
        //console.log(response)
        if(!response.data.user){
            console.log("erro ao realizar requisição")
        } else {
            const loggedUser = {
                id: response.data.user._id,
                email: response.data.user.email,
                token: response.data.token

            }
            // -- salvando  o  usuario authenticado no localStorage
            localStorage.setItem("user", JSON.stringify(loggedUser))
            setUser(loggedUser)
            navigate('/operations');
          console.log(response.data.token);
          console.log(JSON.stringify(loggedUser))
        }
      });
      }
      */

      return(
        <AuthContext.Provider
         value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
         </AuthContext.Provider>
      )


}


