import React from 'react'
import s1 from './assets/images/s1.png'
import s2 from './assets/images/s2.png'
import s3 from './assets/images/s3.png'
export const three = () => {
  return (
    <div>
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


            </div>    </div>
  )
}

export default three
