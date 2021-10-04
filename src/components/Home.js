import React, {useState, useEffect} from "react";
import API from '../API.js';
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMG_BASE_URL, API_KEY, IMAGE_BASE_URL } from '../config';
//Components
import HeroImage from "./HeroImage/HeroImage.component";
//Hook
import {useHomeFetch} from '../hooks/useHomeFetch'
//Img
import NoImage from '../images/no_image.jpg'


const Home = () => {
    const {state, loading, error} = useHomeFetch();
    console.log(state)

    return (
    <>
        {state.results[0] ?
        <HeroImage  
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
        /> 
        : null
        }
    </>
    );
}

export default Home;