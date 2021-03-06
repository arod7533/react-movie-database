import react from "react";
import Thumb from '../Thumb/Thumb.component';

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import NoImage from '../../images/no_image.jpg';

import {Wrapper, Content, Text} from './MovieInfo.styles'

const MovieInfo =({movie}) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb image={
                movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            } 
            clickable={false}
            alt="movie-thumb"
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>Plot</h3>
                <p>{movie.overview}</p>

                <div classname="rating-director">
                    <div>
                        <h3>RATING</h3>
                        <div classname="score">{movie.vote_average}</div>
                    </div>
                    <div>
                        <div classname="director">
                            <h3>DIRECTOR{movie.directors.length > 1 ? 's' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
)

export default MovieInfo;
