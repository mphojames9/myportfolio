import facebookIcon from './assets/logo/facebook_icon.png';
import linkedIn from './assets/logo/linkedin_icon.png';
import twitterIcon from './assets/logo/twitter_icon.png';

function Footer_sec(){
    return (
        <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Contact me</h4>
              <ul>
                <li><a href="#footer">Phone: +2772 5320 406</a></li>
                <li><a href="#footer">Email: mphojames9@gmail.com</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Studied with:</h4>
              <ul>
                <li><a href="https://www.alxafrica.com/">ALX</a></li>
                <li><a href="https://www.theodinproject.com/">Odin projects</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Top Portfolio Projects</h4>
              <ul>
                <li><a href="#footer">Battle-ship game</a></li>
                <li><a href="#footer">Resume Builder</a></li>
                <li><a href="#footer">Shop Cart</a></li>
                <li><a href="#footer">Realtime Chat App</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow me</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/mpho-james-413661196"><i className="fa fa-linkedin">
                  <img src={facebookIcon} alt="" /></i></a>
                <a href="https://www.twitter.com/MphoJam95368804"><i className="fa fa-twitter">
                  <img src={twitterIcon} alt="" /></i></a>
                <a href="https://www.linkedin.com/in/mpho-james-413661196"><i className="fa fa-linkedin">
                   <img src={linkedIn} alt="" /></i></a>
              </div>
            </div>
          </div>
        </div>
    </footer>
    )
}

export default Footer_sec