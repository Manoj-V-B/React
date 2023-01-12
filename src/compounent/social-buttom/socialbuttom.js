import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from "../MENU/menu";
import './socbottoncss.css';

export function SocialButtom() {
    return(
        <>
        <Menu/>
        <div className="bg-image justify-content-buttom text-center ">
            <h1 className="text-light text-monospace">Social Buttons</h1>
           
            <button type="submit" hraf="#" className="bg-warning btn m-2 text-light">like</button>
            <button type="submit" hraf="#" className="bg-light btn m-2 ">comment</button>
            <button type="submit" hraf="#" className="bg-primary btn m-2 text-light">share</button>
        </div>
        </>
    );    
}