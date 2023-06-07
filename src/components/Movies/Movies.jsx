import React from 'react';
import { useNavigate } from 'react-router-dom';
const Movies = ({ movie }) => {
    const { show } = movie;
    const movieId = show.id;
    const navigator = useNavigate();
    const handleShow = () =>{
        navigator(`/movieSummary/${movieId}`)
    }
    return (
        <div className='border-hover border-info-hover'>
            <div className="card mb-3 ">
                <img src={show.image.original} className="card-img-top img-fluid px-3 py-3" style={{ height: '400px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {show.name}</h5>
                    <p className='fs-5'>Genres: {show.genres[0]}</p>
                    <h4>{show.rating.average ? <p>Rating: {show.rating.average} </p> : <span>No rating</span>}</h4>
                    <button onClick={handleShow} className='btn btn-info text-white'>Shows</button>
                </div>
            </div>
        </div>
    );
};

export default Movies;