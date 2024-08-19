import { useState } from "react";
import getButtonStyling from "./getButtonStyle";


function Button({text, styleType, buttonType, onClick}){


    function onClickHandler(){
        console.log("button clicked");   
    }
    return (
        <>
        <button 
        className={`px-4 py-2 ${getButtonStyling(styleType)}  text-white  rounded-md transition-all`}
        // style = {`${style}`} 
        buttonType = {buttonType}
        onClick = {onClickHandler}
        
        >
            {text}
        </button>
        </>

    );
}

export default Button;