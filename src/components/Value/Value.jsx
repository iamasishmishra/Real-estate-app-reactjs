import React, { useState } from 'react';
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md';
import data from '../../utils/accordion';
import './Value.css';

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">

            {/* left  */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./h1.webp" alt="" />
                </div>
            </div>

            {/* right  */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Making Living spaces more beautiful</span>
                <span className='secondaryText'>With a decade of exp in the real estate and construction we were successfully completed more than 80 projects and fullfill dreams of 200's families</span>

                <Accordion className='accordion' allowMultipleExpanded={false}
                           preExpanded={[0]}>
                            {

                                data.map((item, i)=>
                                {
                                    const [className, setClassName] = useState(null)
                                    return(
                                        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton className='flexCenter accordionButton'>

                                                    <AccordionItemState>
                                                        {({expanded})=> expanded ? setClassName("expanded") : setClassName("collapsed")}
                                                    </AccordionItemState>

                                                    <div className="flexCenter icon">
                                                        {item.icon}
                                                    </div>
                                                    <span className='primaryText'>
                                                        {item.heading}
                                                    </span>

                                                    <div className="flexCenter icon">
                                                        <MdOutlineArrowDropDown size={20}/>
                                                    </div>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p className="secondaryText">
                                                    {item.detail}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })
                           
                            }
                </Accordion>
            </div>

        </div>
    </section>
  )
}

export default Value