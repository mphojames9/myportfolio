import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';

function Footer_sec(){

    return (
      <Fade>
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
              <h4>Portfolio Projects</h4>
              <ul>
                <li><a href="#footer">Library</a></li>
                <li><a href="#footer">Battle-ship game</a></li>
                <li><a href="#footer">Cv builder</a></li>
                <li><a href="#footer">Shop-cat</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow me</h4>
              <Zoom>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/mpho-james-413661196"><i className="fa fa-linkedin"></i></a>
                <a href="https://www.twitter.com/MphoJam95368804"><i className="fa fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/mpho-james-413661196"><i className="fa fa-linkedin"></i></a>
              </div>
              </Zoom>
            </div>
          </div>
        </div>
    </footer>
    </Fade>
    )
}

export default Footer_sec