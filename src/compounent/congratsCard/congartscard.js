import React from "react";
import './congartscard.css';
import card from '../../images/congrats-card-profile-img.png';
import watch from '../../images/congrats-watch-img.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Menu } from "../MENU/menu";

export default function Congartscard() {
    return(
        <>
        <Menu/>
        <div className="background-image text-center">
        <h1 >congratulations</h1>
        <div className="bg-primary ml-5 mr-5 rounded">
            <img src={card} className="mt-5"/>
            <h3>Kiran V</h3>
            <p>he is a visual studio editor and has 4+ of years experinces</p>
                
                <img src={watch} className=""/>
                <div className="watch-image"></div>

        </div>

        </div>
        </>
    );
    
}