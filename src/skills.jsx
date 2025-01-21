import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
//My skills

function Skills(){
    return(
        <section className="my-services" id="services">
        <h2 className="section__title section__tittle--services">My skills</h2>
        <div className="services">
        <ScrollAnimation animateIn="zoomIn" className="service">
        <h3>Websites</h3>
        <p>Highly skilled web developer utilizing JavaScript, React.js, and Node.js to craft robust backend solutions.
         Proficient in HTML and CSS, delivering visually stunning and user-friendly interfaces that provide seamless interactions and exceptional user experiences.
        </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" className="service">
        <h3>Apps/games</h3>
        <p>As a passionate developer, I create a range of applications, from personal projects to educational apps for kids and engaging games.
        This hands-on approach helps me continually refine my JavaScript skills, staying up-to-date with the latest technologies and best practices.
        </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" className="service">
        <h3>Github</h3>
        <p>I'm actively contributing to open-source software, which provides an incredible opportunity to acquire new skills, collaborate with talented developers,
        and learn from their expertise. This dynamic environment fosters growth, innovation, and community-driven development.
        </p>
        </ScrollAnimation>
        </div>
        <a href="#myWork" className="btn">My work</a>
</section>
    );
}

export default Skills;
