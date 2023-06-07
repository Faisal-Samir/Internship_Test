import React, { useEffect, useState } from 'react';
import UseTitle from '../../hooks/UseTitle';

const BookedMovies = () => {
    UseTitle("BookedMovies");
    const [movieCart, setMovieCart] = useState([]);
    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem('Movie-cart')) || [];
        setMovieCart(existingData);
    }, []);
    console.log(movieCart);
    return (
        <div className='container mb-5 pt-5'>
            <p className='text-center fs-4 fw-bold mt-4'>Total Movie added to the cart:{movieCart.length}</p>
            <div className='row'>
                {
                    movieCart.map ? movieCart.map((item, index) => (
                        <div key={index} className="col-3">
                            <div className="card mb-2">
                                <div className="card-body">
                                    <h5 className="card-title">{item.movie}</h5>
                                    <p className="card-text">Name: {item.name}</p>
                                    <p className="card-text">Phone: {item.phone}</p>
                                    <p className="card-text">Email: {item.email}</p>
                                </div>
                            </div>
                        </div>
                    )) : <p className='text-center mt-2'>No data found yet</p>
                }
            </div>
        </div>
    );
};

export default BookedMovies;
UseTitle("BookedMovies");