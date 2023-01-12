import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import strawbery from '../image/strawberry1.jpg';
import vegetable from '../image/vegetable1.jpg';
import greenleaf from '../image/greenleaf.jpg';
import '../Products/productcss.css';


import { Menu } from "../../MENU/menu";


export function Products() {
    return(
        <>
        <div className="container-fluid text-center bg-light ">
            <div className=" bg-success">
                <div className="row">
                <div className="col-lg-1">&nbsp;</div>
                    
                    <div className="col-lg-3 bg-light">
                        <img className="Proimg"  src={strawbery}/>
                        <h3>Fresh Fruits</h3>
                        <p>The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit.</p>
                        <h1 className="btn">LEARN MORE</h1>

                    </div>

                    <div className="col-lg-3 bg-light">
                        <img className="Proimg" src={vegetable}/>
                        <h3>Vegetables</h3>
                        <p>The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds.</p>
                        <h1 className="btn">LEARN MORE</h1>


                    </div>
                    <div className="col-lg-3 bg-light">
                         <img className="Proimg" src={greenleaf}/>
                         <h4>Salad Leaves</h4>
                         <p>Lettuce (Lactuca sativa) is an annual plant of the family Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds.</p>
                         <h1 className="btn justify-content-bottom">LEARN MORE</h1>


                    </div>

                    <div className="col-lg-1">&nbsp;</div>
                </div>
            </div>
            <h1>Image by <span className="  dt">Freepik</span></h1>
        </div>
        
       
        </>
    );
    
}