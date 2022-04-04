import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projectmain" id="Projects">
            <hr className="hr-border"></hr>
            <h1 className="projectTitle">Latest Projects</h1>
            <div className="row div-width">
                <div className="col-6 mb-4">
                    <div className="card flip_card_container">
                        <div className="card-body flip_card">
                            <div className="frontface">
                                <h5 className="card-title"> CommonPaths, GIS Application for King County</h5>
                                <h6> DXC Technologies, New Orleans</h6>
                                <p className="card-text">JavaScript, Node.js, Pug, Express.js</p>
                                <ul>
                                    <li> As Lead UX Designer responsible for entire user-friendly interface.</li> 
                                    <li> Conducted design thinking sessions, user interviews and created interactive prototypes</li>
                                    <li> Designed wireframes for 40 screens for desktop and tablet devices.</li>
                                    <li> Developed functional responsive UI components </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-4">
                    <div className="card flip_card_container">
                        <div className="card-body flip_card">
                            <div className="front face">
                                <h5 className="card-title"> Demand Decision Management, DXC Corporate App </h5>
                                <h6> DXC Technologies, New Orleans</h6>
                                <p className="card-text">Vue.js, Azure ChatBot, Bootstrap, Node.js  </p>
                                <ul>
                                    <li> Designed Wireframes & mockups for fully responsive web application including chatbot design. </li> 
                                    <li> Craeted ease to use interface whcih reduced user time by 30%. </li> 
                                    <li> Developed modular componentsi with HTML5, CSS3, JavaScript and Bootstrap.</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 mb-4">
                    <div className="card flip_card_container">
                        <div className="card-body flip_card">
                            <div className="frontface">
                                <h5 className="card-title"> Health Care Application </h5>
                                <h6> DXC Technologies, New Orleans</h6>
                                <p className="card-text">Figma, Miro, Invison, High-Fidelity Interactive Prototyping</p>
                                <ul>
                                    <li> Redesiging web application that provides intelligent clinical decision support.</li> 
                                    <li> Created Style tiles and design thinking sessions to gather user requirements.</li>
                                    <li> Designed wireframes , conducted design thinking sessions, user interviews and interactive prototypes.</li>
                                    <li> Designed for Accessisilibility, WCAG Compliant by following WCAG 2.0 and WCAG 2.1 A & AA.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
 


            </div>
            
        </div>
    )
}

export default Projects;