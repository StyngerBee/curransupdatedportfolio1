import React from 'react';
import './footer.css'
import {FaFacebook, FaTwitter} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a href={"#"} className={"footer__logo"}>Curran Duke</a>
            <ul className={"permalinks"}>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#experience"}>Experiences</a></li>
                {/* <li><a href={"#services"}>Services</a></li> */}
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#contact"}>Contact</a></li>
                
            </ul>

            <div className={"footer__socials"}>
                <a href={"https://www.facebook.com/curran.duke"} target={"_blank"}><FaFacebook /></a>
                <a href={"https://www.instagram.com/curranxavier/"} target={"_blank"}><FiInstagram /></a>
                <a href={"https://twitter.com/StyngerBee"} target={"_blank"}><FaTwitter /></a>
            </div>

            <div className={"footer__copyright"}>
                <small>&copy; Created by Curran Duke. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer