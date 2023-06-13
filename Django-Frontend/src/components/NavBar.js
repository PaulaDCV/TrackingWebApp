import {ProSidebar, SidebarHeader, SidebarFooter, SidebarContent} from 'react-pro-sidebar';
import {Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import {BsPeopleCircle, BsCalendarFill} from "react-icons/bs";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {GrLogin} from "react-icons/gr"

export function Navigation(props) {
  const [isAuth, setIsAuth] = useState(false);
  const handleLogout = () => {
      localStorage.clear();


      setIsAuth(false);

  }
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
        console.log('hi');
      setIsAuth(true);

  }}, [isAuth.toString]);

    return (

        <ProSidebar  breakPoint="md"   onToggle={props.handleToggle} >
            <SidebarHeader>
                {isAuth ?
                    <button className="authenticate" onClick={handleLogout}>LogOut </button>:
                    <button className="authenticate" onClick={props.onClick}>
                        <GrLogin/>Authenticate </button>

                }
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem>
                        Dashboard
                        <Link to="/Dashboard"/>
                    </MenuItem>
                    <MenuItem icon={ <BsCalendarFill/> }>
                        Profile
                        <Link to="/Profile"/>
                    </MenuItem>

                </Menu>
            </SidebarContent>
            <SidebarFooter>
                Paula del Castillo Vivero
            </SidebarFooter>

        </ProSidebar>


    );
}