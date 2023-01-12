import React from "react";
import scient from '../../images/scienctist.jpg';
import dotNet from '../../images/dotNet.jpg';
import vrdeve from '../../images/VRDeveloper.jpg';
import MLEng from '../../images/MLEngineer.png';
import './technology.css';
import { Menu } from "../MENU/menu";



export function Technology() {
    return(
        <>
        <Menu/>
        <div className=" container  ">
            <h1 className="text-center">Learn 4.0 Technologies</h1>
            <p className="pl-2">Search For Industry 4.0 Course at Topbrandsforyou.com. Find Industry 4.0 Course. Now with us! Attractive Results. Relevant Results. More Info. Get Latest Info. Get More Results.</p>
            <div className="container row">
                <div className="col-lg-6 col-sm-12 data-border">
                    <h2>Data Scientist</h2>
                    <p> A data scientist uses data to understand and explain the phenomena around them, and help organizations make better decisions.</p>
                    <img src={scient} className="float-right" />
                </div>
                <div className="col-lg-6  dot-border">
                    <h2>Dot Developer</h2>
                    <p>A .NET Software Developer is a software developer who specialises in building software for Microsoft's Windows platform</p>
                    <img  src={dotNet} className="float-right" />
                </div>
                <div className="col-lg-6  vr-border ">
                    <h2>VR Developer</h2>
                    <p>A VR developer creates whole new digital settings that users can see through a device like the Oculus headset, but an AR developer uses mobile apps to create a layer of digital experience in our reality, such as Pokemon Go, a game that uses this technology.</p>
                    <img src={vrdeve} className="float-right" />
                </div>
                <div className="col-lg-6  ml-border">
                    <h2>ML Engineer</h2>
                    <p>Machine learning engineers act as critical members of the data science team. Their tasks involve researching, building, and designing the artificial intelligence responsible for machine learning and maintaining and improving existing artificial intelligence systems.</p>
                    <img src={MLEng} className="float-right"/>
                </div>
            </div>

        </div>
        </>
    );
    
}