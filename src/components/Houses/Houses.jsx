import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import './Houses.css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';


const Houses = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Supreme Living</span>
                <span className='primaryText'>Most Popular </span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons/>

                {
                    data.map((card, i)=>(
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />

                                <span className="secondaryText r-price">
                                    <span style={{color: "orange"}}>INR </span>
                                    <span>{card.price}</span>
                                </span>

                                <span className='prmaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Houses;

const SliderButtons = () =>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}