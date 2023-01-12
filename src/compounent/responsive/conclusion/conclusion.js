import React from "react";
import { Menu } from "../../MENU/menu";
import veghand from '../image/vegetable2.jpg';


export function Conclusion() {
    return(
        <>
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-lg-6">
                <h3>ORGANIC FARM</h3>
                <h1>Of Organic Food</h1>
                <p>Organic food, ecological food or biological food are food and drinks produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.</p>
                <button className="bg-warning btn">LEARN MORE</button>
            
                    
                </div>
                <div className="col-lg-6">
                <img className="col-lg-12" src={veghand} />

                </div>
            </div>
        </div>



   
        </>
    );
    
}


