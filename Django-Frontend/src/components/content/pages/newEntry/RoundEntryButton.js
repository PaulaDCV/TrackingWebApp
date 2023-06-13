import React from "react";
import "./RoundEntryButton.css";
import {CustomIcons} from "./../CustomIcons.js"


export function RoundEntryButton(props) {


  return (
        <div className={"dashboard-button"}>

            <button className={"add-button"} id={props.name} onClick={ props.onClick}  ><CustomIcons name = {props.icon}></CustomIcons></button>
            <a> {props.name}</a>
        </div>
    )
}