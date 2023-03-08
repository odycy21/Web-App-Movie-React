import React from "react";
import '../styles/FooterStyle.css';

function Footer() {
    
    const today = new Date();
    const year = today.getFullYear();

    return(
       
        <p className="footer-Container">  Stream Haus | {year} All Rights Reserved</p>

    )
}
 
export default Footer;