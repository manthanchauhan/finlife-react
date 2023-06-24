import React, {useEffect, useRef, useState} from 'react';
import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";
import {investmentsApi} from "../apis/investmentsApi";
import {getAssetUUIDMap} from "../utils";

const CustomSidebar = () => {
    const [state, setState] = useState({investments: []});

    const assetUUIDMap = useRef({});

    useEffect(() => {
        assetUUIDMap.current = getAssetUUIDMap();
        console.log(assetUUIDMap.current)

        investmentsApi.list()
            .then((data) => {
                setState({investments: data.data.investments})
            })
            .catch((error) => {
                console.log(error.response)
                alert(error.response.data.message)
            });
    }, []);

    return (
        <Sidebar style={{height: "93vh", display: "flex", flexDirection: "column"}}>
            <Menu>
                <SubMenu label={"Investments"}>
                    {state.investments.map((investment) => {
                        const assetName = assetUUIDMap.current[investment.assetUUID]
                        return (<MenuItem key={investment.assetUUID}>{assetName}</MenuItem>)
                    })}
                </SubMenu>
                <MenuItem> Line charts </MenuItem>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default CustomSidebar;
