import chatAppNode_js from './assets/My work/chatAppNode_js.jpg';
import taskList from './assets/My work/taskList.jpg';
import memoryCardGame from './assets/My work/MemoryCardGame.jpg';
import weatherApp from './assets/My work/weatherApp.jpg';

function Projects(){
    return (
        <section className="my-work" id="myWork">
        <h2 className="section__title">My work</h2>
        <p className="section__subtitle--my-work">Some portion of my work</p>

        <div className="portfolio">
        <div href="" className="portfolio__iteam">
        <img src={memoryCardGame} className="vid">
           </img>
      <div className="buttons">
         <div className="button">
            <a href="https://github.com/mphojames9/memory-card-game.git">View code</a>
         </div>
         <div className="button">
            <a href="https://mphojames9.github.io/memory-card-game/">View App</a>
         </div>
      </div>
   </div>

   <div href="" className="portfolio__iteam">
        <img src={taskList} className="vid">
           </img>
      <div className="buttons">
         <div className="button">
            <a href="https://github.com/mphojames9/weather-app.git">View code</a>
         </div>
         <div className="button">
            <a href="#">View App</a>
         </div>
      </div>
   </div>


   <div href="" className="portfolio__iteam">
        <img src={weatherApp} className="vid">
           </img>
      <div className="buttons">
         <div className="button">
            <a href="#">View code</a>
         </div>
         <div className="button">
            <a href="#">View App</a>
         </div>
      </div>
   </div>


   <div href="" className="portfolio__iteam">
        <img src={chatAppNode_js} className="vid">
           </img>
      <div className="buttons">
         <div className="button">
            <a href="#">View code</a>
         </div>
         <div className="button">
            <a href="#">View App</a>
         </div>
      </div>
   </div>


   <div href="" className="portfolio__iteam">
        <img src={chatAppNode_js} className="vid">
           </img>
      <div className="buttons">
         <div className="button">
            <a href="#">View code</a>
         </div>
         <div className="button">
            <a href="#">View App</a>
         </div>
      </div>
   </div>


   <div href="" className="portfolio__iteam">
        <img src={chatAppNode_js} className="vid">
           </img>
      <div className="buttons">
         <div className="button">
            <a href="#">View code</a>
         </div>
         <div className="button">
            <a href="#">View App</a>
         </div>
      </div>
   </div>

   <div href="" className="portfolio__iteam">
        <img src={chatAppNode_js} className="vid">
           </img>
      <div className="buttons">
         <div className="button">
            <a href="#">View code</a>
         </div>
         <div className="button">
            <a href="#">View App</a>
         </div>
      </div>
   </div>

   <div href="" className="portfolio__iteam">
        <img src={chatAppNode_js} className="vid">
           </img>
      <div className="buttons">
         <div className="button">
            <a href="#">View code</a>
         </div>
         <div className="button">
            <a href="#">View App</a>
         </div>
      </div>
   </div>
    </div>

    </section>
    )
}

export default Projects