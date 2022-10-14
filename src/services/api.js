import axios from 'axios';
const config = require('../config.json')

//const BASE_URL= config.API_URL || 'http://localhost:3000'

const BASE_URL = 'http://localhost:3000'

//configurando a URL base do Axios
export const api = axios.create({
    //baseURL: "https://gestorportfolio-backend.herokuapp.com/",
    baseURL: BASE_URL,
});

// - Serviços relacionados ao User Model

    // -- requisição para criação de usuário --
    export const createUser = async (name, email, password, _id) => {
        return api.post('/auth/register', { name, email, password, _id });
        }

    // -- requisição para autenticação
    export const createSession = async (email, password) => {
        console.log(BASE_URL)
        return api.post('/auth/authenticate', { email, password });
    }

    // -- requisição para edição de dados do usuario
    export const editUser = async(name, email, oldPassword, password, _id) => {
        return api.post('/auth/user', { name, email, oldPassword, password, _id})
    }


// serviços relacionados ao Model Operações

// -- requisição para buscar (GET) todas as operações salvas por um determinado usuario
export const getOperations = async (user) => {
    //console.log("user: " + user)
    //console.log(JSON.parse(localStorage.getItem('user')).token)
    //console.log("token2: " + api.defaults.headers.Authorization)
    try {
        const response = await api.post('/operations', {user: user})
            return response.data;
    } catch (err) {
        console.log(err)
    }
    
}

// -- requisição para criação de nova operação
export const postOperation = async(operation) => {

    try {
        const res = await api.post('/operations/operation', {
            symbol: operation.symbol,
            cost: operation.cost,
            quantity: operation.quantity,
            type: operation.type,
        })
        console.log(res)
    } catch (err) {
        if(err.response){
            console.log(err.response.status);
        } else if (err.request){
            console.log(err.request.status)
        }
        }
        
    }

// -- requisição para atualizar uma Operação
export const updateOperation = async(operation) => {

    try {
        const res = await api.put('/operations/operation', {
            _id: operation._id,
            symbol: operation.symbol,
            cost: operation.cost,
            quantity: operation.quantity,
            type: operation.type,
            user: operation.user
        })
        console.log(res)
    } catch (err) {
        if(err.response){
            console.log(err.response.status);
        } else if (err.request){
            console.log(err.request.status)
        }
        }
        
    }

// -- requisção para deletar uma operação
export const deleteOperation = async(id) => {
    
    try {
        console.log(id)
        const res = await api.delete(`/operations/operation/${id}`)
        console.log(res)
        return res
    } catch (error) {
        console.log(error.response.message)
    }
}



export const quotePrice = async(symbol) => {
    let str = ""
    try {
        const response = await api.post('/stock/quote', {symbol: symbol})
        str = response.data
            let replace = str.replaceAll(':', '$').replaceAll(',', '$')
            let currentPriceString = replace.split('$', 2);
            let currentPrice = parseFloat(currentPriceString[1])
            return currentPrice
    } catch (err) {
        console.log(err.response.message)
    }


}
