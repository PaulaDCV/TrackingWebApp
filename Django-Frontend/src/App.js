import 'react-pro-sidebar/dist/css/styles.css';
import './App.css';
import React, {useState} from "react";
import {Navigation} from "./components/NavBar.js"
import "./styles/NavBar.css"
import "./components/forms/Authentication/ModalCustom.css"

import ModalCustom from "./components/forms/Authentication/ModalCustom.js";
import {Content} from "./components/content/Content";
import {Alert} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Dashboard} from "./components/content/pages/Dashboard";
import {Calendar} from "./components/content/pages/Calendar";

function App() {
    const [showResults, setShowResults] = React.useState(false)
    const handleShow = () => setShowResults(true);
    const handleClose = () => setShowResults(false);
    const [successLogin, setSuccessLogin] = useState(false);
    const handleSuccessLogin = () => {setSuccessLogin(true); console.log('hi');};


  return (

    <div className="App">
        <Navigation onClick={handleShow}  ></Navigation>


    <div className={"d"}>
                <ModalCustom show={showResults} onHide={handleClose} onSuccess={handleSuccessLogin} success={successLogin}></ModalCustom>
        </div>
    <Content/>








    </div>

  );
}



export default App;


