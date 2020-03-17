import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import Button from "../Button/Button";
import Image from "../Image/Image";
import pictoPlay from "../../images/play.svg";

const Hero = () => {
    return(
        <header className="hero">
            <h1 className="hero__title">You will need no<br/> other platform</h1>
            <Image
                src={pictoPlay}
                alt="Hero"
                className="hero__picto" />
            <Link to="/about"  className="hero__btn">
                <Button
                    type="button"
                    text="Try now" />
            </Link>
            <span className="hero__legend">* No need to add cards details</span>
        </header>
    );
}

export default Hero;