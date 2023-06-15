import React from 'react';
import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";

const CustomSidebar = () => {
    return (
        <Sidebar style={{height: "93vh", display: "flex", flexDirection: "column"}}>
            <Menu>
                <SubMenu label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default CustomSidebar;
