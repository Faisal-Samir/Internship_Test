import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import UseTitle from '../../hooks/UseTitle';

const MovieSummary = () => {
    const movieDetails = useLoaderData();

    // for parse html tag from a text
    const removeTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    };
    const navigator = useNavigate();
    const movieId = movieDetails.id;
    const handleBookMovie = () =>{
        navigator(`/userInfoAdd/${movieId}`);
    }

    UseTitle("MovieSummary");
    return (
        <div className='mt-5 container d-flex align-items-center mb-5'>
            <img src={movieDetails.image.original} className='img-fluid' style={{ height: '600px' }} alt="" />
            <div className='ms-5'>
                <p className='fs-4 fw-bold'>Name: {movieDetails.name}</p>
                <p className='fs-5'>Official Site: <Link to={movieDetails.officialSite}>{movieDetails.officialSite ? movieDetails.officialSite : "No official site"}</Link></p>
                <p className='fs-5'>Premiered Date: {movieDetails.premiered}</p>
                <p className='fs-5'>Rating: {movieDetails.rating.average ? movieDetails.rating.average : "Rating is not available"}</p>
                <p className='text-justify'><span className='fs-4 fw-semibold'>Summary:</span> {removeTags(movieDetails.summary)}</p>
                <p className='fs-5'>Web Channel Name: {movieDetails.webChannel?.name ? movieDetails.webChannel?.name : "No Web channel"}</p>
                <button onClick={handleBookMovie} className='btn btn-success'>Book Movie Ticket</button>
            </div>
        </div>
    );
};

export default MovieSummary;