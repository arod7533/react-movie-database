import react from "react";
import { useParams } from "react-router";

import {IMAGE_BASE_URL, POSTER_SIZE} from '../config';

import { useMovieFetch } from "../hooks/userMovieFetch";

import Grid from './Grid/Grid.component'
import Spinner from './Spinner/Spinner.component'
import BreadCrumb from "./BreadCrumb/BreadCrumb.component";

import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const {movieId} = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong...</div>;

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}></BreadCrumb>
        </>
    );
};

export default Movie;