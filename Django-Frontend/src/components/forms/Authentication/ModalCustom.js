import Modal from "react-bootstrap/Modal";
import Login from "./loginForm";
import React, {useState} from "react";
import "./ModalCustom.css"
import Nav from "react-bootstrap/Nav";
import Register from "./registrationForm";
import {useHistory, useRouteMatch} from "react-router-dom";

export default function ModalCustom(props){

        const [login, setlogin] = useState(true);
        const handleSignIn = () => setlogin(true);
        const handleSignUp = () => setlogin(false);


    return(

<Modal  show={props.show} onHide={props.onHide}  onEnter={handleSignIn}>
    <div className={"containerModal"}>
        <Modal.Header closeButton >
            <Nav  variant= "tabs" defaultActiveKey="Login" >
                <Nav.Item href="Login">
                    <Nav.Link  className="selectButton" onSelect= {handleSignIn} eventKey="Login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item href="Register">
                    <Nav.Link className="selectButton" onSelect={handleSignUp} eventKey="Register">Register</Nav.Link>
                </Nav.Item>
            </Nav>

        </Modal.Header>

        <Modal.Body>
            <div className="containerForm">
                {login ? <Login handleSuccess ={ props.onSuccess} success={props.success}/> : <Register/>}
            </div>
       </Modal.Body>
        </div>
          </Modal>
);
}

