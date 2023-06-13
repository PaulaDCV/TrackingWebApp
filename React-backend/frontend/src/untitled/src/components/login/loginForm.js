import React from "react";
import { useForm } from "react-hook-form";
import "./loginForm.css"
export default function Login(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
      <div className="form">

        <form onSubmit={handleSubmit(onSubmit)}>
            {props.login ?
            <div>
                <label> Username </label>
                  <input {...register("UserName")} />
                                  <label> Password </label>

                  <input  {...register("Password")}/>

            </div>

            :<div>
                                    <label> Username </label>

                  <input {...register("firstName")} />
                                  <label> Username </label>

                  <input type="date" {...register("Date")}/>
                                  <label> Username </label>

                  <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
            </div>

            }
          <input type="submit" />
        </form>

      </div>
  );
}
