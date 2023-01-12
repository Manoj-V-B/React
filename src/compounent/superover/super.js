import React from "react";
import './super.css';
import Cskimg from '../../images/csk-img.png';
import rcbimg from '../../images/rcb-img.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from "../MENU/menu";


export function SuperOver() {

    return(
        <>
        <Menu/>
            <div className="bg-dark pt-5 pb-5 bg-color-black text-center" >

                <h1 className="text-light">Super Over league</h1>
                <div className="container-fluid pt-5 pb-5">
                    <div className="row justify-content-center">

                        

                           <img src={Cskimg} width="100rem" />

                            <img src={rcbimg} width="100 rem" />
                        
                    </div>
                     
                    </div>
                </div>
                
        </>
    );
}