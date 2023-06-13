import React from "react";
import {useForm} from "react-hook-form";
import "../loginForm.css"

export default function Register(props) {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = e => {
        console.log(e)
        fetch('http://127.0.0.1:8000/api/auth/register/', {
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
                    window.location.replace('http://localhost:3000/dashboard');
                } else {
                    localStorage.clear();

                }
            });
    };
    return (
        <div className="form">


            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label> Username </label>

                    <input {...register("username", {required: true})} />
                    {errors.username && "Username is required"}

                     <label> First Name: </label>
                    <input {...register("first_name")}/>
                     {errors.password1 && "Password is required"}

                     <label> Last Name: </label>
                    <input  {...register("last_name")}/>
                     {errors.password1 && "Password is required"}

                     <label> Email: </label>
                    <input type="email" {...register("email")}/>
                     {errors.password1 && "Password is required"}

                    <label> Password: </label>
                    <input type="password" {...register("password1")}/>
                     {errors.password1 && "Password is required"}

                    <label> Confirm your password: </label>
                    <input type="password" {...register("password2")}/>
                     {errors.password2 && "Confirmation of password is required"}


                </div>
                <input type="submit"/>
            </form>
        </div>
    );
}
