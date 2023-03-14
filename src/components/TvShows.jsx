import React, { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import {AiOutlineClose} from 'react-icons/ai';
import {BsFillPlayBtnFill} from 'react-icons/bs';
import { Container } from "./NavBar";
import noImage from './noImage.jpeg';
import '../styles/videos.css';
import { tmdbApi } from "../constants";
import { apiKey } from "../constants";
import { tvShowsLink } from "../constants";

function TvShows(){
    const {toggle} = useContext(Container)
    
    const [showData, setShowData] = useState([]);
    const [trailer, setTrailer] = useState(true);
    const [title, setTitle] = useState(true);

    const tvShowsApi = `${tmdbApi}${tvShowsLink}`;
    const Images = "https://image.tmdb.org/t/p/w500";


    const TvShowsCall = async () => {
        const data = await axios.get(tvShowsApi, {
            params: {
                api_key: apiKey,
            }
        })
       
        const results = data.data.results;
        setShowData(results)
         //console.log(data.data.results)
        //console.log(showData)
    }

    useEffect(() => {
        TvShowsCall()
    }, [])


    const TvShowsTitle = (shows) => {
        setTitle(shows.name)
        setTrailer(!trailer)
    }

    return ( 
        <Fragment> 
            <div className={toggle ? "mainBg" : "secondaryBg"}>
                <div className="main-container">
                    {showData.map((shows) => {
                        return(
                            <Fragment key={shows.id}> 
                                <div id={trailer ? 'container' : 'NoContainer'}>
                                <BsFillPlayBtnFill color="#fff" fontSize={30} id={trailer ? "playIcon" : "hide"} onClick = {() => TvShowsTitle(shows)}/>
                                                <img src={shows.poster_path ? `${Images}${shows.poster_path}` : noImage } alt = '' onClick = {() => TvShowsTitle(shows)}/>
                                                <h3 className={toggle ? 'DarkThemeColour' : 'LightThemeColour' }>{shows.name}</h3>
                                </div>
                            </Fragment>     
                        )
                    })}
                    <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkThemeColour' : 'LightThemeColour'} fontSize = {55} color="#FF5858" cursor = {'pointer'} onClick={() => setTrailer(true)}/>
                </div>
             </div>
        </Fragment>
     )
}
 
export default TvShows;