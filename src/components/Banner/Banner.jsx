import React from 'react';
import banner from '../../assets/71mUK6cPosL.jpg'
const Banner = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="position-relative">
                    <img
                        src={banner}
                        alt="Movie Poster"
                        className="img-fluid  "
                    />
                </div>
                <div className="col-md-6 position-absolute shadow p-4 bg-blue bg-opacity-50 rounded  text-white text-center" style={{top:'420px',left:'400px',margin:'auto'}}>
                    <div className="banner-content">
                        <h2 className="mb-4">Beyond the Horizon: A Tale of Destiny</h2>
                        <p className="mb-4">Prepare for an epic adventure unlike anything you've ever witnessed! In a world where imagination knows no bounds, journey with us through the realms of magic, mystery, and mayhem</p>
                        <button className="btn btn-primary">Watch Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;