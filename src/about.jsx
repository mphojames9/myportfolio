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

//!About me
function AboutMe(){
    return (
    <section className="about-me" id="about">
    <h2 className="section__title section__title--about">About me</h2>
    <div className="section__subtitle section__subtitle--about">
        <p className="section__subtitle section__subtitle--about-p">Experience, skills and dedication</p>
        </div>

    <div className="about-me__body">
    <p>I have experience as a senior manager for manufacturing
        company. My dedication to mentoring and helping others has
        helped me create successful teams that support each other.
    </p>
    <p>
    After 7years in manufacturing which includes 5-6 years in
    leadership
    I decided to do what my heart desires. changing my career
    was one of the best way to get a fresh start as a <strong>Software
    engineer</strong>.
    </p>
    <p><br/>
     I have strong critical thinking and problem solving
    skills with the ability to make suggestions that will help
    improve functionality in the technology industry. I have
    hands on experience learning to design software applications
    that meet the technical requirements and functionality with
    Odin projects and ALX Software Engineering programme
    and a qualified Full-Stack Web/software developer
    </p><br/>
    <p>
    I'm compitant with <strong>C, C++, Phython SQL data base </strong>and
    more confident with <strong>JavaScript, React.js, Node.js </strong>and ofcause <strong>
        HTML and CSS 
    </strong> for resposive <strong>UI</strong> Web Applications.
    </p>
</div>

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
