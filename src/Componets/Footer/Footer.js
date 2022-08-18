import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div className='Container'>
            <div class='row bg-blue rowStyle'>
                <div class="col-md-4 footerList">
                    <h3>ABOUT</h3>
                    <hr />
                    <Link to='/home'><li>Our Company</li></Link>
                    <Link to='/home'><li>Abaut Us</li></Link>
                    <Link to='/home'><li>Terms of Services</li></Link>
                    <Link to='/home'><li>Our Team</li></Link>
                </div>
                <div class="col-md-4 footerList">
                    <h3>CONTACT</h3>
                    <hr />
                    <Link to='/home'><li>Contact Marketing</li></Link>
                    <Link to='/home'><li>Contact Sales</li></Link>
                    <Link to='/home'><li>Contact HR</li></Link>
                    <Link to='/home'><li>Contact Admin</li></Link>
                </div>
                <div class="col-md-4 footerList">
                    <h3>SUBSCRIBE US</h3>
                    <hr />

                    <form>
                    <input type="email" placeholder='Email' class="form-control" />
                        <br />
                        <button class='btn btn-primary' type='submit'>Subscribe</button>
                    </form>


                    <div className="social">
                        <a href="https://www.facebook.com/mehedifbid"><span><FacebookIcon fontSize='large' /></span></a>
                        <a href="https://www.instagram.com/mehedifbid/"><span><InstagramIcon fontSize='large' /></span></a>
                        <a href="https://twitter.com/"><span><TwitterIcon fontSize='large' /></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;