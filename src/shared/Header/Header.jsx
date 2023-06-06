import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid d-flex">
                    <h3 className="navbar-brand fw-bold fs-3">QuadB Tech</h3>
                    <div className='d-flex'>
                        <p className='me-5'><Link to="/">Home</Link></p>
                        <p><Link to="/bookedMovies">Booked Movies</Link></p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;