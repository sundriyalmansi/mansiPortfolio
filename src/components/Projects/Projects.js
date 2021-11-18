import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projectmain" id="Projects">
            <hr className="hr-border"></hr>
            <h1 className="projectTitle">Latest Projects</h1>
            <div className="row div-width">
                <div className="col-sm-6 mb-4">
                    <div className="card flip_card_container">
                        <div className="card-body flip_card">
                            <div className="frontface">
                                <h5 className="card-title"> CommonPaths, GIS Application for King County</h5>
                                <h6> DXC Technologies, New Orleans</h6>
                                <p className="card-text">JavaScript, Node.js, Pug, Express.js</p>
                                <ul>
                                    <li> As Lead UX Designer and Front-End developer i was responsible for entire look and feel with working functionalties of the award winning application.</li> <li> As Lead UX Designer and Front-End developer i was responsible for developing front end of application for highly visible King county project.</li>
                                    <li> Designed wireframes , conducted design thinking sessions, user interviews and interactive prototypes</li>
                                    <li> Interactive and Responsive UI.</li>
                                    <li> Developed GIS enabled user interface with leaflet javascript libraries.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card flip_card_container">
                        <div className="card-body flip_card">
                            <div className="front face">
                                <h5 className="card-title"> Demand Decision Management, DXC Administrative Application </h5>
                                <h6> DXC Technologies, New Orleans</h6>
                                <p className="card-text">Vue.js, Azure ChatBot, Bootstrap, Node.js  </p>
                                <ul>
                                    <li> As Lead UX Designer and Front-End developer i was responsible for entire look and feel with working functionalties of the award winning application.</li> <li> As Lead UX Designer and Front-End developer i was responsible for developing front end of application for highly visible King county project.</li>
                                    <li> Designed wireframes , conducted design thinking sessions, user interviews and interactive prototypes</li>
                                    <li> Developed fully responsive web application with Bootstrap</li>
                                    <li> Azure chatBot enabled application to automate data entry process.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-4">
                    <div className="card flip_card_container">
                        <div className="card-body flip_card">
                            <div className="frontface">
                                <h5 className="card-title"> Health Care Application </h5>
                                <h6> DXC Technologies, New Orleans</h6>
                                <p className="card-text">Figma, Miro, Invison, High-Fidelity Interactive Prototyping</p>
                                <ul>
                                    <li> Redesiging web application that provides intelligent clinical decision support,case management, estimates as well as evidence-based guidelines from the American College of Occupational and Environmental Medicine (ACOEM) for healthcare profrssionals.</li> 
                                    <li> Designed wireframes , conducted design thinking sessions, user interviews and interactive prototypes</li>
                                    <li> Worked on Accessibility and making application WCAG Compliant by following WCAG 2.0 and WCAG 2.1 A & AA compliant guidlines for design and providing guidance for front end development. </li>
                                    <li> Created Style tiles and design thinking sessions to gather user requirements and drive the theme of the application</li>
                                    
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