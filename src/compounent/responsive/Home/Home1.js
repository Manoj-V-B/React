import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home1css.css';
import { Menu } from "../../MENU/menu";



export function Home1() {
    return(
        <>
  
        <div className="bg-HOME container-fluid text-light ">

            <div className=" row text-center  justify-content-center ">

                <div className="col-lg-6 mt-5 pt-5  ">
                    <h3 className="text-danger">FRESH FOOD</h3>
                    <h2 className="text=-warning">Organic</h2>
                    <p className="">How your food is grown or raised can have a major impact on your mental and emotional health as well as the environment</p>

                    <button type="submit" className="btn p-2 pl-4 pr-4 bg-success">Learn More</button>

                </div>
                <div className="col-lg-6">&nbsp;</div>
            </div>

        </div>
        </>
    );
    
}