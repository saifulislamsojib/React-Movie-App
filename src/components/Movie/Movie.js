import React from 'react';
import { Image } from 'react-bootstrap';

const Movie = ({movie}) => {
    const {Title, Year, Poster, imdbID} = movie;

    const MovieStyle = {
        border: '1px solid red',
        padding: '10px',
        margin: '15px 10px',
        borderRadius: '8px'
    }

    return (
        <div className='d-md-flex align-items-center text-center' style={MovieStyle}>
            <div>
                <Image src={Poster} fluid rounded thumbnail alt=""/>
            </div>
            <div className="mt-3 mt-md-0 ml-md-5">
                <h3>Movie Title: {Title}</h3>
                <h4>Release year: {Year}</h4>
                <h5>IMDB ID: {imdbID}</h5>
            </div>
        </div>
    );
};

export default Movie;