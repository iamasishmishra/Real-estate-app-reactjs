import React from 'react';
import './GetStarted.css';


const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started</span>
                <span className='secondaryText'>Lets Get Started with us to find your Dream Villa By sending Email</span>

                <button className="button">
                    <a href="Send mail:asishkumarmishra688@gmail.com">Send Mail</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted