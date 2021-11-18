import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Header = () => {
    return (
        <div className="header-wraper" id="homepage">
        <Particles 
            params={{
            particles: {
                number: {
                value: 50,
                density: {
                    enable: true, 
                    value_area: 900
                    }
                },
                shape: {
                    type: "circle",
                    stroke: {
                       width: 5,
                       color: "#f9ab00"
                    }
                  }
            }
        }} />
            <div className="main-info vertical-center">
                <h2 className="starttext">I'm a </h2>
                <div>
                    <Typed className="typed-text"
                    strings={["UX Designer.", "Front-End Developer."]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop 
                    />
                </div>
                <h2 className="endtext">Hi! I am Mansi <img src="https://img.icons8.com/emoji/24/000000/waving-hand-emoji.png"/></h2> 
                
                <button type="button" className="btn btn-outline-primary downloadcv">Download CV</button>
                <div className="socialmedialinks">    
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item linksocial"><a href="https://www.linkedin.com/in/sundriyalm/">LinkdIn</a></li>
                        <li className="breadcrumb-item linksocial"><a href="https://www.behance.net/sundriyalmansi">Behance</a></li>
                        <li className="breadcrumb-item linksocial"><a href="https://www.behance.net/sundriyalmansi">GitHub</a></li>
                    </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;
