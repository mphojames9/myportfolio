//My skills

function Skills(){
    return(
        <section className="my-services" id="services">
        <h2 className="section__title section__tittle--services">My skills</h2>
        <div className="services">
        <div className="service">
        <h3>Websites</h3>
        <p>I develope websites using JavaScript, React.js, Node.js for Backend, HTML
             and CSS for a great UI that allow users to
              access and interact with the site.
        </p>
        </div>

        <div className="service">
        <h3>Apps/games</h3>
        <p>I develop applications for personal use, educational apps 
            for kids and fun games that you may love to play.
             This hepls me a lot in improving my javascript skills.
        </p>
        </div>

        <div className="service">
        <h3>Github</h3>
        <p>I'm working on open source software which is the awesome way to learn new skills 
             and collaborate with bright programmers from whom I can learn a lot.
        </p>
        </div>
        </div>
        <a href="#myWork" className="btn">My work</a>
</section>
    );
}

export default Skills;
