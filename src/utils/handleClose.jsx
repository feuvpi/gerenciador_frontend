// -- react
import React, { useState } from "react";

 export const handleClose = (e, show) => {
    
    // while(show === false){
    //     if((e.target.farthestViewportElement.id) && e.target.farthestViewportElement.id !== 'addOperation' && 'editOperation') {
    //         console.log(e.target.farthestViewportElement.id)
    //         return false
    //     } else {
    //         return true
    //     }
    // }
    while(show !== false && e.target.id !== 'editOperation'){
        if(e.target.id !== 'Modal'){
            return false;
        } else {
            return true;
        }
        
    }

    return null
    
}
