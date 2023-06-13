import "./Content.css"
import React from "react";
import {Route, Switch} from "react-router-dom";
import {Calendar} from "./pages/Calendar";
import {Dashboard} from "./pages/Dashboard";
import {Profile} from "./pages/Profile";
export function Content(props) {
    return(
        <div className={"content-container"}>
            <Switch>
                <Route path="/Calendar">
                    <Calendar />
                </Route>
                    <Route path="/Dashboard"><Dashboard/>
                </Route>
                <Route path="/Profile">
                    <Profile/>
                </Route>
            </Switch>
        </div>
    )
}