import React from 'react';
import './Contact.css';
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left  */}
            <div className="flexColStart c-left" id='c-left'>
                <span className='orangeText'>Contact Us</span>
                <span className='primaryText'>Easy Contact</span>
                <span className='secondaryText'>Get though your queries. Make a contact </span>


                <div className="flexCloStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>

                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>38746232837</span>
                                </div>
                            </div>

                            <div className="flexCenter button" id='btn'>
                                Call Now
                            </div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>

                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>38746232837</span>
                                </div>
                            </div>

                            <div className="flexCenter button" id='btn'>
                                Chat Now
                            </div>
                        </div>
                    </div>

                    {/* second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode" id='down'>
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>

                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>38746232837</span>
                                </div>
                            </div>

                            <div className="flexCenter button" id='btn'>
                                Video Call Now
                            </div>
                        </div>

                        <div className="flexColCenter mode" id='down'>
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>

                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>38746232837</span>
                                </div>
                            </div>

                            <div className="flexCenter button" id='btn'>
                                Message Now
                            </div>
                        </div>
                    </div>

                </div>
            </div>

{/* right  */}
            <div className="c-right">
                <div className="image-container" id='image'>
                    <img src="./h2.webp" alt="" id='img'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact