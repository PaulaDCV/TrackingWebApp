import {ProSidebar, SidebarHeader, SidebarFooter, SidebarContent} from 'react-pro-sidebar';
import {Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import {BsPeopleCircle, BsCalendarFill} from "react-icons/bs";
import React from "react";

export function Navigation(props) {


    return (

        <ProSidebar>
            <SidebarHeader>
                <br/>
                <br/>
                <button onClick={props.onClick}>Log in</button>
                <br/>

            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem>Dashboard</MenuItem>
                    <MenuItem> <BsCalendarFill/> Component 1</MenuItem>
                    <MenuItem> <BsPeopleCircle/> Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>

                </Menu>
            </SidebarContent>
            <SidebarFooter>
                {/**
                 *  You can add a footer for the sidebar ex: copyright
                 */}
            </SidebarFooter>

        </ProSidebar>


    );
}