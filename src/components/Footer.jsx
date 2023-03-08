import React, { Fragment } from "react";
import '../styles/FooterStyle.css';

function Footer() {
    
    const today = new Date();
    const year = today.getFullYear();

    return(
       
        <Fragment>
            <p className="footer_txt"> &copy; Stream Haus | {year} All Rights Reserved</p>

            <div className="container">

                
            </div>
        </Fragment>



    )
}
 
export default Footer;