import React from "react";
import "./Button.scss";

const Error = ({type, text, className}) => {
    return(
        <button type={type} className={`button ${className}`}>
            {text}
        </button>
    );
}

export default Error;