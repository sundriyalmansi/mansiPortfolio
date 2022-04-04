import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import Resume from './Mansi Sundriyal UI Engineer Resume.pdf'

const Header = () => {
    return (
        <div className="header-wraper" id="homepage">
        <Particles 
            params={{
            // particles: {
            //     number: {
            //     value: 40,
            //     density: {
            //         enable: true, 
            //         value_area: 900
            //         }
            //     },
            //     shape: {
            //         type: "circle",
            //         stroke: {
            //            width: 5,
            //            color: "#1e1e1e"
            //         }
            //       }
            // },
            "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#b6b2b2"
                  }
                },
                "opacity": {
                  "value": 0.5211089197812949,
                  "random": false,
                  "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 8.017060304327615,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 12.181158184520175,
                    "size_min": 0.1,
                    "sync": true
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#c8c8c8",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 1,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "bounce",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": false,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              }
        }} />
            <div className="main-info vertical-center">
                <h2 className="endtext">Hi! I am Mansi <img src="https://img.icons8.com/emoji/24/000000/waving-hand-emoji.png"/></h2>
                <div>
                    <Typed className="typed-text"
                    strings={["UX Designer.", "Front-End Developer."]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop 
                    />
                </div>
                 
                
                <a className="btn btn-outline-primary downloadcv" href={Resume} download="Mansi_Resume">Download CV </a>
                <div className="socialmedialinks">    
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item linksocial"><a href="https://www.linkedin.com/in/sundriyalm/">LinkedIn </a></li>
                        <li className="breadcrumb-item linksocial"><a target='blank' href="https://www.figma.com/proto/ZxJyGeMCFJAOAYQrFBsbDK/Mansi-UXD-Portfolio?page-id=0%3A1&node-id=0%3A4&viewport=241%2C48%2C0.42&scaling=min-zoom">Design Portfolio</a></li>
                        <li className="breadcrumb-item linksocial"><a href="https://github.com/sundriyalmansi">GitHub</a></li>
                    </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;
