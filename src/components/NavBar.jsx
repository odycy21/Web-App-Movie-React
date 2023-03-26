import React, {Fragment, useState} from "react";
import { HiSearch } from "react-icons/hi";
import '../styles/navbar-style.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Trending from "./Trending";
import streamHaus from './streamHaus.png';

export const Container = React.createContext()

function NavBar() {

    const [toggle, setToggle] = useState(true);
    const [inputValue, setInputValue] = useState('');

    return ( 

        <Container.Provider value={{toggle, inputValue}}>
            <Fragment>
                <nav id={toggle ? '' : 'navBarColor'}>
                    
                    <div className="nav-options">
                        <NavLink to="/" >
                            <img className="movie-logo" src={streamHaus} alt="Logo" />
                        </NavLink>

                        <NavLink to="/" style={({isActive}) => {return {color:isActive ? "#fff" : "#FF5858"}}}>
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
                        </NavLink>

                        <NavLink  to="/Tv-Shows" style={({isActive}) => {return {color:isActive ? "#fff" : "#FF5858"}}}>
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>TV Shows</span>
                        </NavLink>

                        <NavLink to="/Trending" style={({isActive}) => {return {color:isActive ? "#fff" : "#FF5858"}}}>
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
                        </NavLink>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Search here..." onChange={(e) => setInputValue(e.target.value)}/>
                        <HiSearch id="search" font-size = {21} color = "green" />
                        <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                            <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Movies/>}/>
                    <Route path="Tv-Shows" element={<TvShows/>}/>
                    <Route path="Trending" element={<Trending/>}/>
                </Routes>
            </Fragment>
        </Container.Provider>

     );
}
 
export default NavBar;