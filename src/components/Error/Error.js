import React from "react";
import "./Error.scss";

const Error = ({message, action}) => {
    return(
        <div className="error">
            <div className="js-errorClose errorClose" onClick={action}>X</div>
            {message}
        </div>
    );
}

export default Error;