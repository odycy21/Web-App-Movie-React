import React from "react";
import '../styles/footer-style.css';

function Footer() {

    //To Show current year

    const year = new Date().getFullYear();

    return(
       
            <div className="footer_main">

                <div className="footer_links">

                    <ul>
                        <li>Home</li> 
                        <li>Movies</li>
                        <li>TV Shows</li>
                        <li>Trending</li>
                    </ul>

                    <p className="footer_txt"> &copy; Stream Haus | {year} All Rights Reserved</p>

                </div>
            </div>
    )
}
 
export default Footer;