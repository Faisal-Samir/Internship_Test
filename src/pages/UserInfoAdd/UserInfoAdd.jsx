import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookedMovies from '../BookedMovies/BookedMovies';
import UseTitle from '../../hooks/UseTitle';

const UserInfoAdd = () => {
    UseTitle("MovieBooked");
    const movie = useLoaderData();
    
    const handleFrom = event => {
        event.preventDefault();
        const from = event.target;
        const movie = from.movieName.value;
        const name = from.personName.value;
        const phone = from.phoneNumber.value;
        const email = from.email.value;

        const movieBooked = { movie, name, phone, email }

        const existingData = JSON.parse(localStorage.getItem('Movie-cart')) || [];

        existingData.push(movieBooked);

        localStorage.setItem('Movie-cart', JSON.stringify(existingData));
        from.reset();
    }
    return (
        <div className='container mt-5 shadow p-5 mb-5 bg-white rounded'>
            <h3 className='text-center fs-3 fw-semibold mb-3'>Move Booked</h3>
            <form onSubmit={handleFrom}>
                <div className="mb-3">
                    <label htmlFor="movieName" className="form-label">Movie Name</label>
                    <input type="text" className="form-control" id="movieName" name="movieName" defaultValue={movie.name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="personName" className="form-label">Person Name</label>
                    <input type="text" className="form-control" id="personName" name="personName" placeholder='Enter your name' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phoneNumber" placeholder='Enter your phone number' name="phoneNumber" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder='Enter your email' required />
                </div>
                <div>
                    <input className='btn btn-primary' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default UserInfoAdd;