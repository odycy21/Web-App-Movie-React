import React, {Fragment} from "react";
import './footer-style.css';
import { Routes, Route, NavLink } from "react-router-dom";

function Footer() {

    //To Show current year
    const year = new Date().getFullYear();

    return(

        <Fragment>
       
            <div className="footer_main">

                <div className="footer_links">

                    <ul>
                        
                        <li>
                            <NavLink to="/" style={({isActive}) => {return {color:isActive ? "#fff" : "#FF5858"}}}>
                            Home
                            </NavLink>
                        </li> 

                        <li>
                            <NavLink to="/movies" style={({isActive}) => {return {color:isActive ? "#fff" : "#FF5858"}}}>
                            Movies
                            </NavLink>
                        </li>

                        <li>
                            <NavLink  to="/tv-shows" style={({isActive}) => {return {color:isActive ? "#fff" : "#FF5858"}}}>
                            TV Shows
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/trending" style={({isActive}) => {return {color:isActive ? "#fff" : "#FF5858"}}}>   
                            Trending
                            </NavLink>
                        </li>
                        
                    </ul> 

                    <p className="footer_txt"> &copy; Stream Haus | {year} All Rights Reserved</p>

                </div>
                
            </div>

        </Fragment>
    )
}
 
export default Footer;