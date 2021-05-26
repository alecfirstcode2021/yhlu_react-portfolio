import React from "react";
import MeinTokyo from "../../img/alecfirstcode.jpg";
import "./style.css";

function About() {

    return (
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md about-left">
                    <img src={MeinTokyo} className="about-photo img-fluid" alt="Me"></img>
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">I'm an entry-level software engineer with a background in Process Integration Engineer. I'm eager to blend my engineering experience with my web development skills to solve requirements for world and enhance users interact. All about innovation, collaboration, and customers trust.</p>
                        <p className="bio"><span className="skillHeader">Some skills I bring to the table:</span>
                            <ul className=" skillList text-center">
                                <li className="skill">HTML, CSS</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">ReactJS</li>
                                <li className="skill">HTML & CSS</li>
                                <li className="skill">Node.js & OOP</li>
                                <li className="skill">Express</li>
                                <li className="skill">SQL / ORM & MVC</li>
                                <li className="skill">Mongoose & IndexedDB</li>
                                <li className="skill">React</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;