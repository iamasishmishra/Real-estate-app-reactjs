import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';



const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" }
    }
  }
  return (
    
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img src="./estatelogo.jpg" alt="logo" width={60} height={50} />

        <OutsideClickHandler onOutsideClick={()=>
        setMenuOpened(false)}>

          <div className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}>

            
            <a href="#houses">Houses</a>

            <a href="#value">Value</a>
            <a href="#contact">Contact Us</a>
            <a href="#getstarted">Get Started</a>
            {/* <button className='button'>
              <a href="">Contact</a>
            </button> */}

            
          </div>

        </OutsideClickHandler>

        {/* responsive menu icon  */}
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>

      </div>

      


    </section>
   
  )
}

export default Header