import React, { Fragment } from "react";
import "../Footer/footer_style.css";


function Footer() {
    
    //To Show current year

    const year = new Date().getFullYear();

    return(
       
            <div className="footer_main">

                <div className="footer_links">
                    <ul>
                        <li>Home</li> 
                        <li>Movies</li>
                        <li>TvShows</li>
                        <li>Trending</li>
                    </ul>

                </div>

                <div className="footer_txt">
                    <p> &copy; Stream Haus | {year} All Rights Reserved</p>
                </div>

             
           
               

            </div>

    )
}
 
export default Footer;