import React, {useState, useEffect} from "react";
import API from '../API.js';
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMG_BASE_URL, API_KEY, IMAGE_BASE_URL } from '../config';
//Components
import HeroImage from "./HeroImage/HeroImage.component";
import Grid from './Grid/Grid.component'
import Thumb from './Thumb/Thumb.component'
import Spinner from './Spinner/Spinner.component'
import SearchBar from './SearchBar/SearchBar.component'
import Button from './Button/Button.component'
//Hook
import {useHomeFetch} from '../hooks/useHomeFetch'
//Img
import NoImage from '../images/no_image.jpg'


const Home = () => {
    const {state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore} = useHomeFetch();
    console.log(state)

    if(error) return <div> Something went wrong.</div>

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
        <SearchBar setSearchTerm={setSearchTerm}/>
        <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
            {state.results.map(movie => (
                <Thumb 
                    key={movie.id}
                    clickable
                    image={
                        movie.poster_path 
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path 
                        : NoImage

                    }
                    movieId={movie.id}
                />

            ))}
        </Grid>
        {loading && <Spinner/>}
        {state.page < state.total_pages && !loading && (
            <Button text="Load More" callback={() => setIsLoadingMore(true)}/>
        )}
    </>
    );
}

export default Home;