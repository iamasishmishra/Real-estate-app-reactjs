import React from 'react';
import "./Altos.css";
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from "react-countup";
import {motion} from 'framer-motion';

export const Altos = () => {
  return (
    
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

            {/* left side  */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="blue-circle"/>
                    <motion.h1
                    initial={{ y: "2rem", opacity: 0}}
                    animate={{ y: 0, opacity: 1}}
                    transition={{duration:5, type: "spring"}}
                    >
                        Let's Find <br/>
                        Your Perfect <br/>Home
                    </motion.h1>
                    <div className="blue-circle" style={{ position: "absolute", left: "-7%", top: "24%" }} />
                </div>
            

                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find your own house with us </span>
                    <span className='secondaryText'>We will help you until you get your home</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className="button" id="search-btn">Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={20} end={80} duration={4}></CountUp>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Projects</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={100} end={200} duration={2}></CountUp>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Villa Sold</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp  end={7} ></CountUp>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Years of Exp.</span>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="flexCenter hero-right">
                <motion.div
                initial={{ x: "7rem", opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{duration:5, type: "spring"}}               
                className="image-container">
                    <img src="./valuehouse.jpg" alt="" className="house-image"/>
                </motion.div>
            </div>
        </div>
    </section>
    
  )
}
