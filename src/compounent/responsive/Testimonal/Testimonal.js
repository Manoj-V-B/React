import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import cow from '../image/cow.jpg';
import { Menu } from "../../MENU/menu";



export function Testimonal() {
    return(
        <>
       
        <div className="container row">
            <div className="col-lg-6">
                <img className="col-lg-12" src={cow}/>
            </div>
            <div className="col-lg-6">
                <h4 className=" text-success">HAPPY FARMING</h4>
                <h1 className="text-warning">Happy animals</h1>
                <p>Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move, can reproduce sexually, and go through an ontogenetic stage in which their body consists of a hollow sphere of cells, the blastula, during embryonic development.</p>
                <button className="bg-warning p-2">LEARN MORE</button>
            </div>

        </div>
        </>
    );
    
}