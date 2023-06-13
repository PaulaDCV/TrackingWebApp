import React, {useState} from "react";
import {useForm} from "react-hook-form";
import "../loginForm.css"
import {Alert} from "react-bootstrap";

export default function Login(props) {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [requestError, setRequestError] = useState(false);
    const onSubmit = e => {
        console.log(e)


        fetch('http://127.0.0.1:8000/api/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(e)
        })
            .then(res => res.json())
            .then(data => {
                if (data.key) {
                    localStorage.clear();
                    localStorage.setItem('token', data.key);
                    window.location.replace('http://localhost:3000');



                } else {

                    setRequestError(true);
                    window.setTimeout(()=>{setRequestError(false)},2000);
                    localStorage.clear();

                }
            });
    };
    return (

        <div className="form">
                {requestError &&
                     <Alert variant={"warning"}> Wrong email or password</Alert>
                    }



            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label> Email </label>
                    <input {...register("email")} />
                    <label> Password</label>
                    <input type="password" {...register("password")}/>
                    <input type="submit"/>
                </div>
            </form>



        </div>
    );
}
