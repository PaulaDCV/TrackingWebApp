import Modal from "react-bootstrap/Modal";
import Login from "./components/login/loginForm";
import React from "react";
import {Button} from "react-bootstrap";
import "./ModalCustom.css"
import Nav from "react-bootstrap/Nav";

export default function ModalCustom(props){

        const [login, setlogin] = React.useState(true);
        const handleSignIn = () => setlogin(true)
        const handleSignUp = () => setlogin(false)


return(

<Modal show={props.show} onHide={props.onHide}>
    <div className={"containerModal"}>
        <Modal.Header closeButton >
            <Nav  variant= "tabs" defaultActiveKey="first">
                <Nav.Item href="first">
                    <Nav.Link className="selectButton" onSelect= {handleSignIn} eventKey="first">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="selectButton" onSelect={handleSignUp} eventKey="#tw">Register</Nav.Link>
                </Nav.Item>
            </Nav>

        </Modal.Header>

        <Modal.Body>
            <Modal.Title></Modal.Title>

            <div className="containerForm">

            <Login login={login}></Login>
            </div>
   </Modal.Body>
    </div>
      </Modal>
);
}

