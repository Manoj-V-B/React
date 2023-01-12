import React from "react";
import './home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Menu } from "../MENU/menu";




export function Home(){
    return(
        <>
        <Menu/>
       
            <h1 className="text-danger">I am Kiran</h1>
            
           
       
        </>
    );
}