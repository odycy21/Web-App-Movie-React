import React, {Fragment, useState} from "react";
import { HiSearch } from "react-icons/hi";
import '../styles/navbar-style.css';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import TvShows from "./TvShows";
import Trending from "./Trending";
import streamHaus from '../Assets/streamHaus.png';

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
                            <span id={toggle ? 'Home' : 'MoviesLight'}>Home</span>
                        </NavLink>

                        <NavLink to="/movies" style={({isActive}) => {return {color:isActive ? "#fff" : "#FF5858"}}}>
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
                        </NavLink>

                        <NavLink  to="/tv-shows" style={({isActive}) => {return {color:isActive ? "#fff" : "#FF5858"}}}>
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>TV Shows</span>
                        </NavLink>

                        <NavLink to="/trending" style={({isActive}) => {return {color:isActive ? "#fff" : "#FF5858"}}}>
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
                        </NavLink>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Search here..." onChange={(e) => setInputValue(e.target.value)}/>
                        <HiSearch id="search" font-size = {21} color = "green" />
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="tv-shows" element={<TvShows/>}/>
                    <Route path="trending" element={<Trending/>}/>
                </Routes>
            </Fragment>
        </Container.Provider>

     );
}
 
export default NavBar;