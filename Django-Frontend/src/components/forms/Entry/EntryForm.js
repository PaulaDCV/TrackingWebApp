import React, {useState} from "react";
import {useForm} from "react-hook-form";
import "../loginForm.css"
import {Alert} from "react-bootstrap";

export default function EntryForm(props) {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [requestError, setRequestError] = useState(false);
    const onSubmit = e => {

        fetch('http://127.0.0.1:8000/api/event/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': "token "+ localStorage.getItem("token")
            },

            body: JSON.stringify(e)
        })
          console.log(JSON.stringify(e));
    };
    return (

        <div className="form">
                {requestError &&
                     <Alert variant={"warning"}> Something went wrong!</Alert>
                    }



            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className={"close"}><button onClick={props.close}>Close</button></div>
                    <h1>{props.title}</h1>
                    <input type={"hidden"} value={props.title} {...register("name")}/>
                    <label>Date</label>
                    <input {...register("date")} />
                    {props.time &&
                    <div>
                        <label> Time </label>
                        <input type="date" {...register("time")}/>
                    </div>}


                    <label> Notes</label>
                    <input {...register("notes")}/>

                    {props.measurement1 &&
                    <div>
                        <label> {props.measurement1} </label>
                        <input type= "number"  {...register("value1")}/>
                    </div>}

                       {props.measurement2 &&
                    <div>
                        <label> props.measurement2 </label>
                        <input type="number" {...register("value2")}/>
                    </div>}
                       {props.measurement3 &&
                    <div>
                        <label> props.measurement2 </label>
                        <input type="number" {...register("value3")}/>
                    </div>}

                    <input type="submit"/>
                </div>
            </form>



        </div>
    );
}
