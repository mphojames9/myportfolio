import mainPicture from './assets/profile1.jpg';
import Marquee from "react-fast-marquee";
import gitIcon from './assets/logo/git.png';
import htmlIcon from './assets/logo/html.png';
import cssIcon from './assets/logo/css.png';
import jsIcon from './assets/logo/js.png';
import nodeJsIcon from './assets/logo/node.png';
import npmIcon from './assets/logo/npm.png';
import pythonIcon from './assets/logo/phython.png';
import cIcon from './assets/logo/c.png';
import cplusIcon from './assets/logo/c++.png';
import sqlIcon from './assets/logo/sql.png';
import reactIcon from './assets/logo/react.png';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

//!About me
function AboutMe(){
    return (
    <section className="about-me" id="about">
    <h2 className="section__title section__title--about">About me</h2>
    <ScrollAnimation animateIn="fadeIn" className="section__subtitle section__subtitle--about">
        <p className="section__subtitle section__subtitle--about-p">Experience, skills and dedication</p>
        </ScrollAnimation>

    <ScrollAnimation animateIn="fadeIn" className="about-me__body">
    <p>As a seasoned manufacturing leader with 7+ years of experience,
    I've driven high-performing teams through collaborative leadership.
    Now, I'm harnessing my passion for software engineering,
    leveraging transferable skills like problem-solving, leadership, and teamwork to fuel a successful transition.
    
    </p>
    <p>
    I'm excited to embark on this new chapter, applying my expertise in a fresh and challenging context.
    </p>
    <p><br/>
     I have strong critical thinking and problem solving
    skills with the ability to make suggestions that will help
    improve functionality in the technology industry. I have
    hands on experience learning to design software applications
    that meet the technical requirements and functionality with
    Odin projects and ALX Software Engineering programme
    and I'm a qualified Full-Stack Web/software developer
    </p><br/>
    <p>
    I'm compitant with <strong>C, C++, Python, MongoDB data base </strong>and
    more confident with <strong>JavaScript, React.js, Node.js </strong>and ofcause <strong>
        HTML and CSS 
    </strong> for resposive <strong>UI</strong> Web Applications.
    </p>
</ScrollAnimation>
<img src={mainPicture} alt="third image" className="about-me__img"></img>
<Marquee className="coodingLogo">
            <img src={cIcon}></img>
            <img src={cplusIcon}></img>
            <img src={htmlIcon}></img>
            <img src={cssIcon}></img>
            <img src={jsIcon}></img>
            <img src={reactIcon}></img>
            <img src={nodeJsIcon}></img>
            <img src={npmIcon}></img>
            <img src={sqlIcon}></img>
            <img src={pythonIcon}></img>
            <img src={gitIcon}></img>
</Marquee>
    </section>
    );
}

export default AboutMe;
