import Header from './header';
import AboutMe from './about';
import Skills from './skills';
import Projects from './mywork';
import Footer_sec from './footer';
import ContactForm from './Contact-me';
import React from 'react';
import './App.css';

function App() {
  return(
    <>
    <Header></Header>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Projects></Projects>
    <ContactForm></ContactForm>
    <Footer_sec></Footer_sec>
    </>
  );
  
}

export default App
