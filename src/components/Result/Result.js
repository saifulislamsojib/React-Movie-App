import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Movie from '../Movie/Movie';

const Result = ({inputs}) => {

    const baseUrl = "http://www.omdbapi.com/";
    const apiKey = "&apikey=89082208";

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}?s=${inputs}${apiKey}`)
            .then(res => res.json())
            .then(data => setMovies(data.Search || []))
            .catch(err => console.log(err))
      }, [inputs]);

       const color = movies.length ? "text-center my-5" :  "text-center my-5 text-danger";

    return (
        <Container>
            <h1 className={color}>Search Results: {movies.length ? movies.length : "Not Found"}</h1>
            {
                movies.map(movie => <Movie movie={movie} key={movie.imdbID} />)
            }
        </Container>
    );
};

export default Result;