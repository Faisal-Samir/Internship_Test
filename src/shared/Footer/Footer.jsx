import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="bg-dark text-light py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h5>About Us</h5>
                        <p>Book your movie tickets online with ease and convenience at our cutting-edge movie booking website. Discover the latest blockbusters, choose your preferred show times, and secure your seats with just a few clicks. Experience seamless ticket booking and enjoy a hassle-free movie-going experience like never before.</p>
                    </div>
                    <div class="col-md-3">
                        <h5>Quick Links</h5>
                        <ul class="list-unstyled">
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">Movies</Link></li>
                            <li><Link to="#">Tickets</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h5>Follow Us</h5>
                        <ul class="list-unstyled">
                            <li><Link to="#"><i class="fab fa-facebook-f"></i> Facebook</Link></li>
                            <li><Link to="#"><i class="fab fa-twitter"></i> Twitter</Link></li>
                            <li><Link to="#"><i class="fab fa-instagram"></i> Instagram</Link></li>
                            <li><Link to="#"><i class="fab fa-youtube"></i> YouTube</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div class="text-center">
                    <p>&copy; 2023 Movie Website. All rights reserved. | Designed by SAMIR FAISAL</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;