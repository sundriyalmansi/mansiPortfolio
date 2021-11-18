import React from 'react';
import './Skills.css';
import { Icon } from '@iconify/react';


const Skills = () => {
    return (
        <div className="skillsSection" id="skillspage">
            <div className="row">
                <div className="col-md-3 skillsSection">
                    <div className="Skills-tech">
                        <div>
                            <Icon className="iconsizing" icon="zondicons:education" />
                        </div>
                        <h6 className="educationTitle">Education</h6>
                        <div className="listitem">
                            <h6>University Of North texas</h6>
                            <p>Master of Science Comp.Sc.</p>

                        </div>
                        <div className="listitem">
                            <h6>University Of Delhi</h6>
                            <p>Bachelor of Science Comp.Sc.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 skillsSection">
                    <div className="Skills-tech">
                        <div>
                            <Icon className="iconsizing" icon="ant-design:code-filled" />
                        </div>
                        <h6 className="educationTitle">UI Developer</h6>
                        <div className="listitem">
                            <h6>Languages</h6>
                            <p>JavaScript, HTML, Pug, jQuery, CSS</p>
                            <h6>Tools and Libraries</h6>
                            <p>React, Vue, Bootstrap, Git, Azure</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 skillsSection">
                    <div className="Skills-tech">
                        <div>
                            <Icon className="iconsizing" icon="ant-design:code-filled" />
                        </div>
                        <h6 className="educationTitle">UX Designer</h6>
                        <div className="listitem">
                            <h6>Deliverables</h6>
                            <p>Wireframes, </p>
                            <h6>Tools</h6>
                            <p>Figma, AdobeXD, InVision</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 skillsSection">
                    <div className="Skills-tech">
                        <div>
                            <Icon className="iconsizing" icon="ant-design:code-filled" />
                        </div>
                        <h6 className="educationTitle">Skills</h6>

                        <div className="skill">
                            <h6>Full-stack Development
                                <span>70%</span>
                            </h6> 
                            
                            <div className="skills-progress">
                                <span className="sk1" data-value="90%"></span>
                            </div>
                        </div>
                        <div className="skill">
                            <h6>Web Development
                                <span>85%</span>
                            </h6>
                                
                            <div className="skills-progress">
                                <span className="sk1" data-value="90%"></span>
                            </div>
                        </div>
                        <div className="skill">
                            <h6>Cloud
                                <span>50%</span>
                            </h6>
                                
                            <div className="skills-progress">
                                <span className="sk1" data-value="90%"></span>
                            </div>
                        </div>
                        <div className="skill">
                            <h6>Design and Wireframing
                                <span>95%</span>
                            </h6>
                                
                            <div className="skills-progress">
                                <span className="sk1" data-value="90%"></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills;