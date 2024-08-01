import profilePicture from './assets/profileImage.jpg';
import myLogo from './assets/logo/mylogo.png';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
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
                <p>About</p>
                </a>
            </li>
            </ul>
             )}
        </nav>
       

        <div className="content">
        <div className="content__profileImage">
                <div className="profileImg">
                    <img src={profilePicture} alt="ProfileImage" className="intro_profileImg"></img>
                </div>
            </div>
            <div className="content__intro">
                <h4>Hello, my name is</h4>
                <h1>Mpho Matli</h1>
                <h3>And I'm a <span>Frontend/Backend</span> Developer</h3>
                <a href="" className="resumeBtn">Download Resume</a>
            </div>
        </div>
    </div>
    </>
    );
}

export default Header;