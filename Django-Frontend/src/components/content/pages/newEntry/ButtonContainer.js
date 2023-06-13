import React, {useEffect, useState} from "react";
import "../Dashboard.css";
import './ButtonContainer.css';

import {RoundEntryButton} from "./RoundEntryButton";
import axios from "axios";


export function ButtonContainer(props) {

    const [types,setTypes] = useState(true);
    const [data,setData] = useState([]);
    const [events, setEvents] = useState([]);

    const handleBack =() => { setTypes(!types);setEvents([]);};
    const handleClickType= e =>{ setTypes(!types)
    const fetchData = async () => {
         setEvents([]);
      const result = await axios({ method: "post",
          url: 'http://127.0.0.1:8000/api/preferences/event',
          data: {type: e.target.id },
          headers:{"Authorization": "token "+ localStorage.getItem("token")}}



      );





        if(result.data.length>0){
           setEvents(result.data);
        }


    };

    fetchData();

  }

        useEffect(() => {
    const fetchData = async () => {
      const result = await axios({ method: "post",
              url: 'http://127.0.0.1:8000/api/preferences/type',
              headers:{"Authorization": "token "+ localStorage.getItem("token")}}



      );

      setData(result.data);
    };

    fetchData();
  }, []);
    return (
        <div className={"new-entry-container"}>
        <h2>Add data</h2><br/>
            <div className={ "buttons-container"}>
                {types ?
                  data.map(item => (
                      <div className={"button-container"}>
             <RoundEntryButton  name={item.name}  icon={item.icon} onClick={handleClickType}/>

                      </div>
              ))

                :  <div className={"buttons-container"}><RoundEntryButton name={"Back"} onClick = {handleBack}></RoundEntryButton>
                        {events && events.map(item => (
                      <div className={"button-container"}>
             <RoundEntryButton name={item.name}icon={item.icon} onClick={props.handleClickEvent}/>

                      </div>
                        ))}
                </div>}
            </div>
        </div>

    )
}