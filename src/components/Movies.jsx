import React, {Fragment, useEffect, useState, useContext} from "react";
import axios from "axios";
import {AiOutlineClose} from 'react-icons/ai';
import {BsFillPlayBtnFill} from 'react-icons/bs';
import noImage from './noImage.jpeg';
import { Container } from "./NavBar";
import '../styles/Videos.css';
import { tmdbApi } from "../constants/index.js";
import { apiKey } from "../constants/index.js";


function Movies() {

    const {toggle, inputValue} = useContext(Container);
    const input = inputValue;
    const [moviesData, setMoviesData] = useState([])
    const [trailer, setTrailer] = useState(true);
    const [title, setTitle] = useState(true);
    
    const Shown = input ? 'search' : 'discover';
    const moviesApi = `${tmdbApi}${Shown}/movie`;
    const Images = "https://image.tmdb.org/t/p/w500";
    
    const MoviesCall = async () => {

        const data = await axios.get(moviesApi,{
            params: {
                api_key: apiKey,
                query: input
            }
        })
        const results = data.data.results;
        setMoviesData(results);
    }

    useEffect(()=> {
        MoviesCall()
    }, [input])
     // console.log(moviesData)

    const movieShowsTitle = (movie) => {
        setTitle(movie.name)
        setTrailer(!trailer)
    }

  
    
    return ( 
        <Fragment>
            <div className={toggle ? "mainBg" : "secondaryBg" }>
                <div className="main-container">
                {moviesData.map((movie) => {
                    return( 
                        <Fragment key={movie.id}> 
                                <div id={trailer ? 'container' : 'NoContainer'}>
                                <BsFillPlayBtnFill color="#fff" fontSize={40} id={trailer ? "playIcon" : "hide"} onClick = {() => movieShowsTitle(movie)}/>
                                        <img src={movie.poster_path ? `${Images}${movie.poster_path}` : noImage } alt = '' onClick = {() => movieShowsTitle(movie)}/>
                                        <h3 className={toggle ? 'DarkThemeColour' : 'LightThemeColour' }>{movie.title}</h3>
                                </div>
                        </Fragment>
                    )
                })}
                  <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkThemeColour' : 'LightThemeColour'} fontSize = {55} color="#FF5858" cursor = {'pointer'} onClick={() => setTrailer(true)}/>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Movies;