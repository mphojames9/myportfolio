import facebookIcon from './assets/logo/facebook_icon.png';
import linkedIn from './assets/logo/linkedin_icon.png';
import twitterIcon from './assets/logo/twitter_icon.png';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

function Footer_sec(){
    return (
        <footer className="footer">
        <div className="container">
          <div className="row">
            <ScrollAnimation animateIn="zoomIn" className="footer-col">
              <h4>Contact me</h4>
              <ul>
                <li><a href="#footer">Phone: +2772 5320 406</a></li>
                <li><a href="#footer">Email: mphojames9@gmail.com</a></li>
              </ul>
            </ScrollAnimation>
            <ScrollAnimation animateIn="zoomIn" className="footer-col">
              <h4>Studied with:</h4>
              <ul>
                <li><a href="https://www.alxafrica.com/">ALX</a></li>
                <li><a href="https://www.theodinproject.com/">Odin projects</a></li>
              </ul>
            </ScrollAnimation>
            <ScrollAnimation animateIn="zoomIn" className="footer-col">
              <h4>Upcoming Portfolio Projects</h4>
              <ul>
                <li><a href="#footer">Battle-ship game React Vision</a></li>
                <li><a href="#footer">Resume Builder React Vision</a></li>
                <li><a href="#footer">Shop Cart React Vision</a></li>
                <li><a href="#footer">Realtime Chat App Vision</a></li>
              </ul>
            </ScrollAnimation>
            <ScrollAnimation animateIn="zoomIn" className="footer-col">
              <h4>follow me</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/mpho-james-413661196"><i className="fa fa-linkedin">
                  <img src={facebookIcon} alt="" /></i></a>
                <a href="https://www.twitter.com/MphoJam95368804"><i className="fa fa-linkedin">
                  <img src={twitterIcon} alt="" /></i></a>
                <a href="https://www.linkedin.com/in/mpho-james-413661196"><i className="fa fa-linkedin">
                   <img src={linkedIn} alt="" /></i></a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
    </footer>
    )
}

export default Footer_sec