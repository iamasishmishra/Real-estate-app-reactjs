import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper" id='f-wrap'>
        <div className="paddings innerWidth flexCenter f-container">
            {/* left  */}
            <div className="flexColStart f-left">
                <img src="./estatelogo.jpg" alt=""  width={120}/>
                

                <span className="secondaryText">
                    Our group Provides you the affordable range of<br/> Premium Duplex Villas And also Plots in accross 8 Districts in Odisha.
                </span>
            </div>


            <div className="flexColStart f-right">
                <span className='primaryText'>Informtion</span>
                <span className='secondaryText'>Angul,India</span>
                <span className='secondaryText'>All Rights Reserved@ Privacy & Policy</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer