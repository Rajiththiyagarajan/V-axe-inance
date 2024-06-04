import React from 'react'
import about from '../assets/images/about-img.jpg'


export const About = () => {
  return (
    
    <div className='fourth' style={{ backgroundColor: 'white' }}>
                <div className='container' style={{ marginBottom: '100px', marginTop: '100px' }}>
                    <div className='row'>
                        <div className='col-lg-6 col-12 '>
                            <h1>ABOUT US</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration in some form, by <br />injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available,<br /> but the majority have suffered alteration in some form, by<br /> injected humour, or randomised</p>
                            <button className='butt' style={{ borderStyle: 'none', fontSize: '25px', borderRadius: '12px', width: '150px', backgroundColor: '#0355cc', color: 'white' }}>Read more</button> {/* Changed style attribute to double curly braces */}

                        </div>


                        <div className='col-lg-6 col-12 ' style={{ textAlign: 'center' }}>

                            <img src={about} style={{ width: '100%' }} />

                        </div>
                    </div>
                </div>
            </div>
  )
}
                                                                                                                            
export default About;