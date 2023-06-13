import "../Content.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Label} from "semantic-ui-react";
import PasswordUpdate from "../../forms/Authentication/PasswordUpdate"
export function Profile(props) {
    const [userData, setUserData] = useState([])

    useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
              method: "post",
              url: 'http://127.0.0.1:8000/api/user/',
              headers: {"Authorization": "token " + localStorage.getItem("token")},

          }


      );

        console.log(result.data);
        setUserData(result.data);

    };

    fetchData();
  }, []);
    return (
        <div className={"content-Dashboard"}>
            <div className={"page-title"}>
                <h1>Your Profile</h1>
            </div>
            <div className={"content-Dashboard"}>
                <h1>Your details</h1>
                <label> Email : {userData.email}</label>
                <br/>
               <Label>First Name : {userData.first_name}</Label>
                <br/>
                <Label>Last Name : {userData.last_name}</Label>
            </div>

              <div className={"content-Dashboard"}>
                <h1>Change your Password </h1>
                <PasswordUpdate></PasswordUpdate>

            </div>

            <div className={"content-Dashboard"}>
                <h1>Change your Password </h1>


            </div>

            console.lo

        </div>
    )
}