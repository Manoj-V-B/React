import React from "react";
import './login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import img from '../../images/img.png'
import { Menu } from "../MENU/menu";

export function Login() {
    return(
        <>
        <Menu/>
        <div className="bgcolor p-5  ">
            <div className="bg-light container row p-5 ">

                <div className="col-lg-6">
                    <img src={img} className="col-lg-8"/>
                </div>


                <div className="col-lg-6 text-center ">
                    <h1>Member login</h1>
                    <div className="d-flex">
                    <FontAwesomeIcon icon={faEnvelope} className="mt-3  bg-light "/>
                    <input type="Email" placeholder="Email" className=" m-2 col-lg-9 bg-light  "></input><br></br>
                    </div>


                    <div className="d-flex ">
                        <FontAwesomeIcon icon={faLock} className="mt-3"/>
                    <input type="Password" placeholder="password" className=" m-2 col-lg-9 bg-light"></input><br></br>
                    </div>
                    <div >

                    <button type="submit" className="  pl-5 pr-5  bg-success rounded text-light" >LOGIN</button>
                    <br></br><br></br>
                    <h6>Forgot <span className="text-success">Username/Password?</span></h6>
                    <br></br>
                    <h6 className="text-success">create your account</h6>
                    </div>

                </div>

            </div>


        </div>
        </>
    );
    
}