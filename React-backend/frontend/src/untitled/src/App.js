import logo from './logo.svg';
import 'react-pro-sidebar/dist/css/styles.css';
import './App.css';
import React from "react";
import {Navigation} from "./components/NavBar.js"
import "./ModalCustom.css"

import ModalCustom from "./ModalCustom.js";
function App() {
    const [showResults, setShowResults] = React.useState(false)
    const handleShow = () => setShowResults(true);
    const handleClose = () => setShowResults(false);
    console.log(showResults);
  return (

    <div className="App">
        <Navigation onClick={handleShow} ></Navigation>

    <div className={"d"}>
      <ModalCustom show={showResults} onHide={handleClose}></ModalCustom>
    </div>
    </div>

  );
}




export default App;
