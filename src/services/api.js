import axios from 'axios';
const config = require('../config.json')

const BASE_URL= config.API_URL || 'http://localhost:3000'

//const BASE_URL = 'http://localhost:3000'


export const api = axios.create({
    //baseURL: "https://gestorportfolio-backend.herokuapp.com/",
    baseURL: BASE_URL,
});

// -- requisição para criação de usuário --
export const createUser = async (name, email, password) => {
    return api.post('/auth/register', { name, email, password });
    }

// -- requisição para autenticação
export const createSession = async (email, password) => {
    console.log(BASE_URL)
    return api.post('/auth/authenticate', { email, password });
}

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
    console.log("submiting:")
    console.log(operation)
    console.log("------------------------------------")

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
    console.log("updating...:")
    console.log(operation)
    console.log("------------------------------------")

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

/*  \

router.post("/operation", async (req, res) => {
  console.log(req.body);
  //res.send('should post a new operation in database')
  const operation = new Operation({
    symbol: req.body.symbol,
    unityCost: req.body.cost,
    quantity: req.body.quantity,
    totalCost: req.body.type,
  });

*/