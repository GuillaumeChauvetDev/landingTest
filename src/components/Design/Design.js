import React from "react";
import "./Design.scss";
import Image from "../Image/Image";
import Title from "../Title/Title";

const Design = ({title, info, img, className}) => {
    return (
        <section id="design" className="section">
            <div className="container">
                <div className={`design ${className}`}>
                    <div className="design__info">
                        <Title
                            title={title}
                            suptitle="New Design"
                            className="title--ellipsis" />
                        <p>{info}</p>
                    </div>
                    <div className="design__image">
                        <Image
                            src={img}
                            alt={title}
                            className="title--ellipsis" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Design;