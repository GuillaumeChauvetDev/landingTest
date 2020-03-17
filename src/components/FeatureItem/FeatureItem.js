import React from "react";
import "./FeatureItem.scss";
import Image from "../Image/Image";

const FeatureItem = ({image, title, info}) => {
    return (
        <div className="featureItem">
            <Image
                src={image}
                alt={title}
                className="featureItem__image" />
            <h4 className="featureItem__title">{title}</h4>
            <p className="featureItem__info">{info}</p>
        </div>
    );
};

export default FeatureItem;