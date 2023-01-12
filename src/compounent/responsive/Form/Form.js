import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import vegetable1 from '../image/vegetable1.jpg';
import { Menu } from "../../MENU/menu";


export function Form() {
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <img className="col-lg-12" src={vegetable1}/>
                </div>
                <div className="col-lg-6 text-center">
                    <h2 className="text-center ">ORGANIC FARM</h2>
                    <h2 className="text-warning">Our Promise</h2>
                    <p className="text-start">Vegetable crops when grown organically produce lesser yield. However due to its nutritive quality and storage attributes they are valued well than conventionally grown vegetables. Organoleptic studies have shown that vegetables like tomato and potato tastes better when grown organically.</p>
                    <button className=" btn-warning p-2 text-light " >LEARN MORE</button>
            
                </div>
            </div>
        </div>

        
       </>
    );
    
}

