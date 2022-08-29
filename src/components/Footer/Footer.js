import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-clean">
            <div className='main-footer'>
                <div className='container-lg main-footer-container'>
                    <div className='row' style={{
                        width:"90%",
                        padding: "2em 0em"
                    }}>
                        <div className='col-lg-4'>
                            <a href="/" style={{ width: '15%', marginRight: '3em' }}>
                                <img src="assets/img/LabQ-Logo-White.svg" style={{ width: '40%' }} />
                            </a>
                            <div className='row w-50' style={{marginTop: '1.5em'}}>
                                <div className='col-md-3'>
                                    <a className='logo-link' href="https://www.instagram.com/labqdx/">
                                        <FaInstagram />
                                    </a>
                                </div>
                                <div className='col-md-3'>
                                    <a className='logo-link' href="https://www.linkedin.com/company/skybro/">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                                <div className='col-md-3'>
                                    <a className='logo-link' href="https://www.facebook.com/labqdiagnostics">
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <div className='col-md-3'>
                                    <a className='logo-link'href="https://twitter.com/LabQ247">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <h5 style={{ fontSize: "1.5em", color: '#1C75BC', fontWeight: 'bold' }}>
                                Navigation
                            </h5>
                            {/* TODO: Fix styling pls */}
                            <ul style={{ listStyleType: "none", width: "80%"}}>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#1C75BC", textDecorationLine: 'none' }}>Home</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#FFFFFF", textDecorationLine: 'none' }}>Locations</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#FFFFFF", textDecorationLine: 'none' }}>About</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#FFFFFF", textDecorationLine: 'none' }}>News</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#FFFFFF", textDecorationLine: 'none' }}>Tests</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#FFFFFF", textDecorationLine: 'none' }}>Careers</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#FFFFFF", textDecorationLine: 'none' }}>Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4" style={{
                            justifyContent: "center"
                        }}>
                            <h5 style={{ fontSize: "1.5em", color: '#1C75BC', fontWeight: 'bold', marginBottom: '1em' }}>
                                Subscribe to our Newsletter
                            </h5>
                            <div className='container' style={{ alignItems: 'center' }}>
                                <input type='email' className="form-control" id='newsletterEmailInput' placeholder='Email' style={{ backgroundColor: "#FFFFFF", width: '80%', margin: '1em 0em'}}/>
                                <button className='btn btn-signup' style={{ textTransform: "none", fontSize: "1.05em", BackgroundColor: '#1C75BC', width: '80%'}}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className='hstack gap-3' style={{
                    color: '#0C3959',
                    textDecorationLine: 'none',
                    justifyContent: 'center',
                    margin: '1em 0'
                }}>
                    <span>&copy; LabQ Diagnostics. All Right Reserved 2022.</span>
                    <div className='vr'></div>
                    <a>Privacy Policy</a>
                    <div className='vr'></div>
                    <a>Terms & Conditions</a>
                    <div className='vr'></div>
                    <a>Accessibility Statement</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer