import React, {Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import {AiOutlineClose} from 'react-icons/ai';
import {BsFillPlayBtnFill} from 'react-icons/bs';
import { Container } from "./NavBar";
import noImage from './noImage.jpeg';
import { tmdbApi } from "../constants";
import { apiKey } from "../constants";
import { trendsLink } from "../constants";



function Trending(){
    const {toggle} = useContext(Container)

    const [trendArray, setTrendArray] = useState([]);
    const [title, setTitle] = useState(true);
    const [trailer, setTrailer] = useState(true);

    const trendingApi = `${tmdbApi}${trendsLink}`;
    const Images = "https://image.tmdb.org/t/p/w500";

    const TrendingCall = async () => {
        const data = await axios.get(trendingApi, {
            params: {
                api_key: apiKey,
            }
        })

        const results = data.data.results;
        setTrendArray(results);
        //console.log(data.data.results)
    }

    useEffect(() => {
        TrendingCall()
    },[])



  const trendingShowsTitle = (trend) => {
    setTitle(trend.name)
    setTrailer(!trailer)
}

    return (  
       <Fragment>
            <div className={toggle ? "mainBg" : "secondaryBg"}>
                <div className="main-container">
                        {trendArray.map((trend)=> {
                            return(
                                <Fragment key={trend.id}> 
                                    <div id={trailer ? 'container' : 'NoContainer'}>
                                        <BsFillPlayBtnFill color="#fff" fontSize={40} id={trailer ? "playIcon" : "hide"} onClick = {() => trendingShowsTitle(trend)}/>
                                        <img src={trend.poster_path ? `${Images}${trend.poster_path}` : noImage } alt = '' onClick = {() => trendingShowsTitle(trend)}/>
                                            <h3 className={toggle ? 'DarkThemeColour' : 'LightThemeColour' }>{trend.title}</h3>
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
 
export default Trending;