import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Menu } from "../MENU/menu";



export function Count() {

    const[button,setButton]=useState(0);
    return(

        
        <>
    <Menu/>
    <div>

    <h1>{button}</h1>
    <input type="button" value="Incerment" onClick={()=>setButton(button+1)}/>
    <input type="button" value="decerment" onClick={()=>setButton(button-1)}/>
    <input type="button" value="reset" onClick={()=>setButton(button*0)}/>
    </div>
    </>
    
    );
}