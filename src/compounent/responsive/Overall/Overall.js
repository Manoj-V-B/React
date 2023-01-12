import React from "react";
import { Menu } from "../../MENU/menu";
import { SuperOver } from "../../superover/super";
import { About1 } from "../About/About";
import { Conclusion } from "../conclusion/conclusion";
import { Form } from "../Form/Form";
import { Home1 } from "../Home/Home1";
import { Products } from "../Products/Products";
import { Testimonal } from "../Testimonal/Testimonal";
import { Work } from "../Work/work";




export function Responsive() {
    return(
        <>
       <Menu/>
        <Home1/>
        <Work/>
     
        <Form/>
        <About1/>
        <Testimonal/>
        <Products/>
        <Conclusion/>
        </>
    );
    
}