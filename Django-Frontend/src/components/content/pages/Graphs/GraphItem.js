import React from "react";
import "../Dashboard.css";

import {BarGraph} from "./BarGraph";
import {LineGraph} from "./LineGraph";


export function GraphItem(props) {
    const data = [

]
    return (
        <div className={"dashboard-item"}>
           <h1>{props.title}</h1>
          {props.bar?
            <div className={"graph"}><BarGraph data={props.data
            }/></div>
          :
               <div className={"graph"}><LineGraph data={props.data
            }/></div>
          }

            <div> Recent entries</div>
        </div>
    )
}