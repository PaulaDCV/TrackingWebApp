import React, {useEffect, useState} from "react";
import "./Dashboard.css";
import EntryForm from "../../forms/Entry/EntryForm";
import {GraphItem} from "./Graphs/GraphItem";
import {ButtonContainer} from "./newEntry/ButtonContainer";
import axios from "axios";

export function Dashboard(props) {

    const [entryForm, setEntryForm] = useState(false);
    const [formData, setFormData] = useState([]);
    const [graphData, setGraphData] = useState([]);


    const handleClose = () =>{setEntryForm(false); setFormData([])}
    const change = e => {

        setEntryForm(true);
        setFormData([]);
        const fetchData = async () => {
            const params = new URLSearchParams([['name', e.target.id]]);

            const result = await axios({
                    method: "GET",

                    url: 'http://127.0.0.1:8000/api/event', params
                }
            );

            console.log(result.data);
            setFormData(result.data);



        }
        console.log("hello", e.target.id);

        fetchData();
    }

     const onSubmit = e => {
        console.log(e)


        fetch('http://127.0.0.1:8000/api/event/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": "token "+ localStorage.getItem("token")
            },
            body: JSON.stringify(e)
        })



    };


        useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
              method: "post",
              url: 'http://127.0.0.1:8000/api/event/data/',
              headers: {"Authorization": "token " + localStorage.getItem("token")},
              data: {"name": "Mood"}
          }


      );



      const results = [{"id":"results", "data": result.data}]
      console.log(result.data)
      setGraphData(results);
    };

    fetchData();
  }, []);
    return (
        <div className={"content-Dashboard"}>

            <div className={"page-title"}>
                <h1>Your Dashboard</h1>
            </div>

            <ButtonContainer className={"dashboard-item"} handleClickEvent={change}/>


            {entryForm ?
                <div className={"display-form"}><EntryForm title = {formData.name}onSubmit = {onSubmit} name={formData.name} measurement1={formData.measurement1} close={handleClose}/>
                </div> : <div></div>}

            { <GraphItem bar={false} className={"content-item"} title={"example 1"} data = {graphData}/> }


        </div>
    )
}