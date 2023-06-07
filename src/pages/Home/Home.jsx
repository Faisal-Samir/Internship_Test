import React, { useEffect, useState } from 'react';
import UseTitle from '../../hooks/UseTitle';
import Movies from '../../components/Movies/Movies';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    UseTitle("Home");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
            .then(res => res.json())
            .then(movieData => {
                setMovies(movieData);
            })
    }, [])
    return (
        <div className='container mt-5 mb-5'>
            <Banner></Banner>
            <h3 className='text-center mb-5'>Movie List</h3>
            <div className='row'>
                {
                    movies.map(movie => <div  className='col-4' key={movie.show.id}>
                        <Movies   movie={movie}></Movies>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home; <h1>This is home page</h1>