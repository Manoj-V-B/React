import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import sheep from '../image/sheep.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import strawberry from '../image/strawberry.jpg';
import { faCow } from "@fortawesome/free-solid-svg-icons";
import vegetable from '../image/vegeTable.jpg';
import { faTractor } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../../MENU/menu";


export function Work() {
    return(
        <>



        
        <div className="bg-success text-center ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <h1 className="text-light"> How it Works?</h1>
                        <p className="text-light p-5 ">Organic farming is the production of food without the use of synthetic chemicals or genetically modified components. Organic foods are not necessarily completely chemical free, but the pesticide residues will be considerably lower than those found in produce manufactured with synthetic chemicals.</p>
                    </div>
           
                </div>
            </div>
            <div className="container ">
                <div className="row">
                   
                    
                    <div className="col-lg-4">
                        <img className="col-lg-12" src={sheep}/>
                    </div>
                  
                    <div className="col-lg-4 pt-4 bg-light ">
                        <FontAwesomeIcon className="text-success "  icon={faLeaf}/>
                        <h3> Organic Farming</h3>
                        <p className="small">Organic farming, also known as ecological farming or biological farming, is an agricultural  organic origin such as  manure, green manure, and bone meal and places emphasis  such as crop rotation and companion planting</p>
                    </div>
                    
                    <div className="col-lg-4  ">
                        <img className=" col-lg-12"  src={strawberry}/>
                    </div>

                

                </div>
                <div className="container m">
                    <div className="row">
                    <div className="col-lg-4 pt-5 mt-5 bg-light  ">
                        <FontAwesomeIcon className="text-success" icon={faCow}/>
                        <h3>Animal husbandry</h3>
                        <p className="small">Breeding animals which are strong and robust and adapted to the local important both for health promotion and disease prevention. Traditional breeds of farm animals may be a good starting point for organic animal breeding.</p>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <img className="col-lg-12"  src={vegetable}/>
                    </div>
                    <div className="col-lg-4 pt-4 mt-5 bg-light ">
                        <FontAwesomeIcon className="text-success" icon={faTractor}/>
                        <h3>Arable Farming</h3>
                        <p>Arable ground-truth data, powerful agronomic models, and intuitive design help businesses across the ag and food value chain optimize decisions, improve efficiency, and deliver greater levels of sustainability.</p>
                    </div>
              
                    </div>
                </div>
               
            </div>
            
            


        </div>
       
        </>
    );
    
}