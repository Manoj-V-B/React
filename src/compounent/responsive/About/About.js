import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import org from '../../responsive/image/org1.jpg';
import orga from '../image/org2.jpg';
import organ from '../image/org3.jpg';
import organi from '../image/org4.jpg';
import { Menu } from "../../MENU/menu";




export function About1() {
    return(
        <>

        <div className="container-fluid  text-center text-light bg-success">
            <div className="row ">
            <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-10">

                <h2 >About Our Farm</h2>
                <p>Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>

                <div className="col-lg-1">&nbsp;</div>
                
                <div className="col-lg-10">
                    <div className="row text-start text-dark">
                        <div className="col-lg-2 bg-light ">
                        <h4 className="text-success">VEGETABLES</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <img  src={org}/>
                    
                        </div>
                        <div className="col-lg-3  bg-light">
                        <h4 className="text-success">HOW IT WORKS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <img src={orga}/>
                        
                        </div>
                        <div className="col-lg-3 bg-light">
                        <h4 className="text-success">FLEXIBILITY</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <img  src={organ}/>
                      
                        </div>
                        <div className="col-lg-3 bg-light">
                        <h4 className="text-success">FARM PRODUCTS</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <img  src={organi}/>

                        
                        </div>
                    </div>
                </div>
                <div className="col-lg-1">&nbsp;</div>
            </div>
        </div>
       
        </>
    );
    
}