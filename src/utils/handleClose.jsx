// -- react
import React, { useState } from "react";

 export const handleClose = (e, show) => {
    
    while(show === false){
        if(e.target.id !== 'addOperation' && 'editOperation') {
            console.log('aqui')
            return false
        } else {
            return true
        }
    }
    while(show !== false){
        if(e.target.id !== 'Modal'){
            return false;
        } else {
            return true;
        }
    }
    
}
