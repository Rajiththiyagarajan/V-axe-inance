import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import slidImage from './assets/images/slid.png';

import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import about from './assets/images/about-img.jpg'
import pro from './assets/images/pro-img.png'
import s1 from './assets/images/s1.png'
import s2 from './assets/images/s2.png'
import s3 from './assets/images/s3.png'
import client1 from './assets/images/client-1.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CgArrowLongRight } from "react-icons/cg";
import { CgArrowLeft } from "react-icons/cg";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";

import About from './components/About';



























export const One = () => {
    return (

        <div className='bod'>
            <div className='header'>
                <div className='h1logo'>
                    <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: '25px', color: 'orange', transform: 'rotate(90deg)' }} />
                    <p>call:919876543210</p>

                </div>

                <div className='h2logo'>
                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '25px', color: 'orange' }} />



                    <p>E-mail:Mail@domain.com</p>
                </div>
            </div>

            <div className='had'>
                <h1>V-axe</h1>
                <ul>
                    <li><Link to={'/Home'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/service'}>service</Link></li>
                    <li><Link to={'/contacts'}>Contact</Link></li>




                </ul>

            </div>



            <div className='two'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-12'>
                            <div className='call' style={{ fontSize: '40px', marginTop: '60px' }}>
                                <h1 style={{ color: 'white' }}>Repair and<br />
                                    Maintenance<br />
                                    Services</h1>
                                <p className='callp' style={{ fontSize: '15px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem<br /> adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta <br />hic praesentium mollitia consequatur beatae, aspernatur culpa.</p> {/* Corrected "bootstarp" to "bootstrap" */}
                                <button className='butt' style={{ borderStyle: 'none', fontSize: '25px', borderRadius: '12px', width: '150px', backgroundColor: '#ff8a1d', color: 'white' }}>Contact us</button> {/* Changed style attribute to double curly braces */}
                            </div>
                        </div>

                        <div className='col-lg-6 col-12' style={{ textAlign: 'center' }}>
                            <img src={slidImage} style={{ width: '50%' }} alt="Slide" />
                        </div>
                    </div>
                </div>
            </div>



            <div className='three' style={{ marginTop: '50px' }}>
                <div className='row' style={{ padding: '30px', textAlign: 'center', margin: '0 auto', maxWidth: '1200px' }}>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                        <div className='card c3' style={{ height: '200px', boxShadow: '0 0 10px rgba(0,0,0,0.3' }} >
                            <div className='card-body' style={{ marginTop: '36px' }}>
                                <FontAwesomeIcon icon={faExclamationCircle} style={{ fontSize: '50px' }} />
                                <h1 className='card-title' style={{ fontSize: '26px', marginTop: '20px' }}>REPAIR</h1>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                        <div className='card c1' style={{ height: '200px', boxShadow: '0 0 10px rgba(0,0,0,0.3', }}>
                            <div className='card-body' style={{ marginTop: '36px' }}>
                                <FontAwesomeIcon icon={faCogs} style={{ fontSize: '50px', color: 'black' }} />
                                <h1 className='card-title' style={{ fontSize: '26px', marginTop: '20px' }}>IMPROVEMENT</h1>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                        <div className='card c2' style={{ height: '200px', boxShadow: '0 0 10px rgba(0,0,0,0.3' }}>
                            <div className='card-body' style={{ marginTop: '36px' }}>
                                <FontAwesomeIcon icon={faCog} style={{ fontSize: '50px' }} />
                                <h1 className='card-title' style={{ fontSize: '26px', marginTop: '20px' }}>Maintenance</h1>

                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <About />







            <div className='fifth' style={{ backgroundColor: '#d1e3ff', paddingTop: '50px' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-12 ' style={{ textAlign: 'center' }}>
                            <img src={pro} style={{ width: '80%' }} />


                        </div>

                        <div className='col-lg-6 col-12 ' style={{ textAlign: 'left', alignItems: 'center', marginTop: '80px' }}>
                            <h1>WE PROVIDE PROFESSIONAL,<br />
                                HOME SERVICES.</h1>

                            <p>randomised words which don't look even slightly believable. If you are going to<br /> use a passage of Lorem Ipsum, you need to be sure there isn't anything<br /> embarrassing hidden in the middle of text. All randomised words which don't,<br /> look even slightly</p>
                            <button className='butt' style={{ borderStyle: 'none', fontSize: '25px', borderRadius: '12px', width: '150px', backgroundColor: '#ff8a1d', color: 'white' }}>Contact us</button> {/* Changed style attribute to double curly braces */}


                        </div>


                    </div>
                </div>
            </div>


            <div className='sixth' style={{ marginTop: '50px', marginBottom: '50px' }}>
                <div className='row' style={{ textAlign: 'center', margin: '0 auto', maxWidth: '1200px' }}>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                        <div className='crd'>
                            <div className='card-body a1' style={{ boxShadow: '0 0 10px rgba(0,0,0,0.3' }}>
                                <img src={s1} style={{ width: '100px', height: '100px' }} />
                                <h1 className='card-title' style={{ fontSize: '20px', height: '50px', width: '230px', marginLeft: '65px' }}>Maintenance</h1>
                                <p style={{ fontSize: '20px' }}>when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                        <div className='crd'>
                            <div className='card-body a2' style={{ boxShadow: '0 0 10px rgba(0,0,0,0.3' }}>
                                <img src={s2} style={{ width: '100px', height: '100px' }} />

                                <h1 className='card-title ' style={{ fontSize: '20px', height: '50px', width: '230px', marginLeft: '65px' }}>Electrical</h1>
                                <p style={{ fontSize: '20px' }}>when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal</p>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                        <div className='crd'>
                            <div className='card-body a3' style={{ boxShadow: '0 0 10px rgba(0,0,0,0.3' }}>
                                <img src={s3} style={{ width: '100px', height: '100px' }} />

                                <h1 className='card-title ' style={{ fontSize: '20px', height: '50px', width: '230px', marginLeft: '65px' }}>Plumbing</h1>
                                <p style={{ fontSize: '20px' }}>when looking at its layout. The point of using Lorem Ipsum isthat it has a more-or-less normal</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='extra' style={{ backgroundColor: 'white', textAlign: 'center', padding: '30px' }}>
                <button className='butt' style={{ borderStyle: 'none', fontSize: '25px', borderRadius: '12px', width: '150px', backgroundColor: '#ff8a1d', color: 'white' }}>Contact us</button> {/* Changed style attribute to double curly braces */}


            </div>




            <div className='eleventh'>
                <div className='container ' style={{ marginBottom: '50px' }}>
                    <div className='row'>
                        <div className='col-lg-6 col-12 ' >

                            <div className='cord' style={{ boxShadow: '0 0 10px rgba(0,0,0,0.3', padding: '10px' }}>
                                <div className='conflict'>
                                    <div className='onee'>
                                        <img src={client1} style={{ width: '100px', height: '100px', borderRadius: '50% ' }} />
                                    </div>

                                    <div className='twoo'>
                                        <h1 style={{ fontSize: '16px' }}>Jorch morik</h1>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>


                                </div>

                                <p>chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum</p>
                            </div>
                        </div>







                        <div className='col-lg-6 col-12'>
                            <div className='cord' style={{ boxShadow: '0 0 10px rgba(0,0,0,0.3', padding: '10px' }}>
                                <div className='conflict'>
                                    <div className='onee'>
                                        <img src={client1} style={{ width: '100px', height: '100px', borderRadius: '50% ' }} />
                                    </div>

                                    <div className='twoo'>
                                        <h1 style={{ fontSize: '16px' }}>Jorch morik</h1>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                    </div>


                                </div>

                                <p>chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='coo'>
                    <div className='container  ' style={{ marginBottom: '40px', textAlign: 'center' }}>


                        <button style={{ backgroundColor: '#0355cc' }}><CgArrowLongRight /></button>                        <button style={{ backgroundColor: '#0355cc' }}><CgArrowLeft /></button>


                    </div>
                </div>

            </div>



            <div className='eight' style={{ marginBottom: '50px', }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-12 ' style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            <input type="text" id="username" name="username" placeholder="Enter your username" ></input>
                            <input type="text" id="username" name="number" placeholder="Enter your number"></input>
                            <input type="text" id="username" name="email" placeholder="Enter your email"></input>


                            <input type="text" id="username" name="message" placeholder="Enter your message" style={{ height: '100%' }}></input>

                        </div>

                        <div className='col-lg-6 col-12  '>

                            <iframe
                                srcDoc={`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5083156.554297411!2d81.90002539061736!3d22.05534404470121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713024091992!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
                                title="Google Maps"
                                width="100%"
                                height="350px"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                </div>

                <div className='container'>
                    <button className='butt' style={{ borderStyle: 'none', fontSize: '25px', width: '150px', backgroundColor: '#0355cc', color: 'white', marginTop: '50px' }}>send</button> {/* Changed style attribute to double curly braces */}

                </div>

            </div>

            <div className='nineth' style={{ backgroundColor: '#0a0f43',padding:'50px'}}>
                <div className='container' style={{ maxWidth: '720px' }}>
                    <div className='row ra'> 
                        <div className='col-md-4 col-sm-12' style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: '30px', color: 'white', padding: '24px', backgroundColor: 'blue', borderRadius: '50%' }} />
                            <p>Australia</p>
                        </div>
                        <div className='col-md-4 col-sm-12' style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '24px', color: 'white', padding: '30px 33px ', backgroundColor: 'blue', borderRadius: '50%' }} />
                            <p>0+12346789</p>
                        </div>
                        <div className='col-md-4 col-sm-12' style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '30px', color: 'white', padding: '24px', backgroundColor: 'blue', borderRadius: '50%' }} />
                            <p>mail@domain.com</p>
                        </div>
                    </div>
                </div>


                <div className='final' style={{ textAlign: 'center', backgroundColor: 'rgb(10, 15, 67)' }}>



                    <div>
                        <h1 style={{ color: 'white', textAlign: 'center', marginTop: '30px' }}>Follow us</h1>

                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', padding: '5px 15px' }}>
                        <a href="https://www.facebook.com" style={{ backgroundColor: 'white', display: 'inline-block', padding: '3px' }}>
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" style={{ backgroundColor: 'white', display: 'inline-block', padding: '3px' }}>
                            <FaTwitter />
                        </a>
                        <a href="https://www.youtube.com" style={{ backgroundColor: 'white', display: 'inline-block', padding: '3px' }}>
                            <TfiYoutube />
                        </a>
                        <a href="https://www.instagram.com" style={{ backgroundColor: 'white', display: 'inline-block', padding: '3px' }}>
                            <FaInstagram />
                        </a>
                    </div>





                </div>

            </div>






            <div className='tenth' style={{ textAlign: 'center', backgroundColor: 'rgb(10, 15, 67)', color: 'white', padding: '20px' }} >
                <div className='container'>
                    <hr className='bold-line' style={{ borderStyle: 'solid', borderWidth: '2px' }} />
                </div>
                <p>© 2024 All rights reserved by html design</p>


            </div>





        </div>
    );
};

export default One;
