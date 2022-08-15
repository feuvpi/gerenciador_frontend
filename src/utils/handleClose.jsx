// -- react
import React, { useState } from "react";

 export const handleClose = (e, show) => {
    if(e.target.id === "Modal"){
        return true;
    }
    if(e.target.id !== "addOperation"){
        if(!show){
            return false
        } else{
            return null
        }
    }
    if(!show){
        //console.log("aqui2")
        return true;
        
    } else{
        //console.log("aqui3")
        return false
    }
}
