import React from "react";
import "./Title.scss";

const Title = ({title, suptitle, className}) => {
    return(
        <div className={`title ${className}`}>
            <h3 className="title__suptitle">{suptitle}</h3>
            <h2 className="title__title">{title}</h2>
        </div>
    );
}

export default Title;