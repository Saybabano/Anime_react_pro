import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import GoogleIcon from '@mui/icons-material/Google'; 


function Footer() {
    return (
        <footer style={{backgroundColor:'black'}} className="text-white text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 style={{color:' rgb(11, 212, 247)'}}>Comics By 𝕬𝖓𝖎𝖒𝖊 </h5>
                        <p style={{color:' rgb(11, 212, 247)'}}>
                            Spend Less.Read More.
                        </p>
                        <a href="#!" className="text-white  align-items-center">
                            <FacebookIcon style={{ marginRight: '5px' }} />
                        </a>
                        <a href="#!" className="text-white align-items-center">
                            <TwitterIcon style={{ marginRight: '5px' }} />
                        </a>
                        <a href="#!" className="text-white align-items-center">
                            <InstagramIcon style={{ marginRight: '5px' }} />
                        </a>
                        <a href="#!" className="text-white align-items-center">
                            <LinkedInIcon style={{ marginRight: '5px' }} />
                        </a>
                        <a href="#!" className="text-white align-items-center">
                            <GoogleIcon style={{ marginRight: '5px' }} />
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Information</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a style={{color:' rgb(11, 212, 247)'}} href="#!">About Us</a>
                            </li>
                            <li>
                                <a style={{color:' rgb(11, 212, 247)'}} href="#!">Disclaimer</a>
                            </li>
                            <li>
                                <a style={{color:' rgb(11, 212, 247)'}} href="#!">Terms And Conditions</a>
                            </li>
                            <li>
                                <a style={{color:' rgb(11, 212, 247)'}} href="#!">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">customer</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" style={{color:' rgb(11, 212, 247)'}}>
                                    My orders
                                </a>
                            </li>
                            <li>
                                <a href="#!" style={{color:' rgb(11, 212, 247)'}}>
                                    Contact us
                                </a>
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Company Name. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
