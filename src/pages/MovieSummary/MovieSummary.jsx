import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../hooks/UseTitle';

const MovieSummary = () => {
    const movieDetails = useLoaderData();
    console.log(movieDetails);

    UseTitle("MovieSummary");
    return (
        <div>
            
        </div>
    );
};

export default MovieSummary;