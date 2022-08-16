import axios from 'axios';


export const api = axios.create({
    baseURL: "https://gestorportfolio-backend.herokuapp.com/",
    //baseURL: "http://localhost:3000",
});

// -- requisição para autenticação
export const createSession = async (email, password) => {
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
            console.log(err.response.data);
            console.log(err.response.headers)
        } else if (err.request){
            console.log(err.request.status)
            console.log(err.request.data)
            console.log(err)
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