import profilePicture from './assets/profileImage.jpg';
import myLogo from './assets/logo/mylogo.png';
import React, { useState } from 'react';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';



function Header() {

    const [toggle, setToggle] = useState(true)

    return (
        <>
        <div className="hero" id="home">
                <div className="menu__button" onClick={() => setToggle(!toggle)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            
        <nav className="navigation">
            <img src={myLogo} className="mainLogo"></img>
            {toggle && (
            <ul>
                <li 
                ><a href="#home"><FontAwesomeIcon icon={faHouse}/>
                <p>Home</p>
                </a></li>
                <li><a href="#about"><FontAwesomeIcon icon={faAddressCard}/>
                <p>About</p>
                </a></li>
                <li><a href="#services"><FontAwesomeIcon icon={faBook}/>
                <p>Portfolio</p>
                </a></li>
                <li><a href="#container-contact"><FontAwesomeIcon icon={faPhone}/>
                <p>Contact-us</p>
                </a>
            </li>
            </ul>
             )}
        </nav>
       

        <div className="content">
        <div className="content__profileImage">
                <ScrollAnimation animateIn="fadeIn" className="profileImg">
                    <img src={profilePicture} alt="ProfileImage" className="intro_profileImg"></img>
                </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="fadeIn" className="content__intro">
                <h4>Hello, my name is</h4>
                <h1>Mpho Matli</h1>
                <h3>And I'm a <span>Frontend/Backend</span> Developer</h3>
                <a href="https://drive.google.com/file/d/1KPIKQ8pqU5uc78gbvErkEDMAm24FPuGH/view?usp=drive_link" className="resumeBtn">View Resume</a>
            </ScrollAnimation>
        </div>
    </div>
    </>
    );
}
export default Header;