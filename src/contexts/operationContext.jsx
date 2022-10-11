import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


// -- export AuthContext

 const OperationContext = createContext();

 const OperationProvider = ({ children }) => {
    
   const [operationData, setOperationData] = useState(undefined)

   return(
      <OperationContext.Provider value={{ operationData, setOperationData}}>
         {children}
      </OperationContext.Provider>
   ) 
 }






 export { OperationContext, OperationProvider };

//export const OperationContext = createContext();