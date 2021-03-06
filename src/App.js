import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Home/Home";

import Skills from "./components/Skills/Skills";
import Timeline from "./components/Timeline/Timeline";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Navbar/>
        <Header/>
        <Projects/>
        <Skills/>
        <Timeline/>
        

        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
