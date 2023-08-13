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
                  "value": ["#D9D9D9","#D9D9D9","D9D9D9","#D9D9D9","#D9D9D9"]
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
                <h1 className="endtext">Hi! I am Mansi <img src="https://img.icons8.com/emoji/24/000000/waving-hand-emoji.png"/></h1>
                <div>
                    <Typed className="typed-text"
                    strings={["UX Designer.", "UI Developer."]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop 
                    />
                </div>
                <div>
                  <h5>I have eye an for innovative and creative problem solving and developing amazing user experiences which makes customers and users satisfied when they are using products.
 
                  </h5>
                  <h5>I'm currently completing the Google UX Design Professional Certificate</h5>
                </div>
                 
                
                {/* <a className="btn btn-outline-primary downloadcv" href={Resume} download="Mansi_Resume">Download CV </a> */}
                <div className="socialmedialinks">    
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item linksocial"><a href="https://www.linkedin.com/in/sundriyalm/"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg></a></li>
                        <li className="breadcrumb-item linksocial"><a target='blank' href="https://www.figma.com/proto/ZxJyGeMCFJAOAYQrFBsbDK/Mansi-UXD-Portfolio?page-id=0%3A1&node-id=0%3A4&viewport=241%2C48%2C0.42&scaling=min-zoom">Design Portfolio</a></li>
                        <li className="breadcrumb-item linksocial"><a href="https://github.com/sundriyalmansi">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        </a></li>
                    </ol>
                    </nav>
                </div>
                <div>
                  <button className="btn btn-outline-primary downloadcv nav-link" href="#work">View Work</button>
                </div>
            </div>
        </div>
    )
}

export default Header;
