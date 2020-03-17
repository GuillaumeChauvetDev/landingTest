import React from "react";
import {Link} from "react-router-dom";
import "./Footer.scss";
import Image from "../Image/Image";
import Newsletter from "../Newsletter/Newsletter";
import logo from '../../images/logo.svg';

const Footer = () => {
    return(
        <footer className="footer section">
            <div className="footer--container container">
                <div className="footer__item">
                    <Image
                        src={logo}
                        alt="logo"
                        className="footer__logo" />
                        <p className="footer__adress">Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.  USA &  CAN: 1-888-123-4567 Address: 34 Brokel Rd. NY</p>
                </div>
                <div className="footer__item">
                    <h4 className="footer__title">Support</h4>
                    <ul>
                        <li><Link to="/about" className="footer__link">Help Center</Link></li>
                        <li><Link to="/about" className="footer__link">Get started</Link></li>
                        <li><Link to="/about" className="footer__link">Contact us</Link></li>
                    </ul>
                </div>
                <div className="footer__item">
                    <h4 className="footer__title">About us</h4>
                    <ul>
                        <li><Link to="/about" className="footer__link">About us</Link></li>
                        <li><Link to="/about" className="footer__link">Terms of use</Link></li>
                        <li><Link to="/about" className="footer__link">Privacy police</Link></li>
                    </ul>
                </div>
                <div className="footer__item">
                    <h4 className="footer__title">Get Newsletter</h4>
                    <Newsletter />
                </div>
            </div>
        </footer>
    );
}

export default Footer;