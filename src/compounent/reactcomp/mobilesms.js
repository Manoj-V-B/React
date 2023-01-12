import React from "react";

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../MENU/menu";

 

export function MobSms() {
    return(
        <>
        <Menu/>
        <div className="text-center ">
            <h1>Notifications</h1>
            <div className="contaner column">
                
            <div className=" row mt-3">

                <div className="col-lg-4">&nbsp;</div>

                <div className="bg-primary p-3 col-lg-4">

                <h3><FontAwesomeIcon icon={faCircleCheck}/> Information Message</h3>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div><br/>

            
            <div className="row">
            <div className="col-lg-4">&nbsp;</div>
            <div className="bg-success p-3 col-lg-4">

                <h3><FontAwesomeIcon icon={faCircleCheck}/> Success Message</h3>
            </div>
            <div className="col-lg-4">&nbsp;</div>
            </div><br/>

            <div className="row">
            <div className="col-lg-4">&nbsp;</div>
            <div className="bg-warning p-3 col-lg-4">

                <h3><FontAwesomeIcon icon={faBell} className="font"/> Waring Message</h3>
            </div>
            <div className="col-lg-4">&nbsp;</div>
                
            </div><br/>

            <div className="row">
            <div className="col-lg-4">&nbsp;</div>
            <div className="bg-danger p-3 col-lg-4">

                <h3><FontAwesomeIcon icon={faCircleExclamation}/> Error Message</h3>
            </div>
            <div className="col-lg-4">&nbsp;</div>
            </div>

            </div>
        </div>
        </>
    );
    
}