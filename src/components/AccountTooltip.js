import React from 'react';
import {Tooltip} from "react-bootstrap";

const AccountTooltip = (props) => {
    const {onClickLogout} = props
    return (
            <Tooltip id="nav-account-tooltip" style={{opacity: "100%", padding: "0px", borderRadius: "0.3rem"}}>
                    <ul className="list-group">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item" onClick={onClickLogout}>Log out</li>
                    </ul>
            </Tooltip>
    );
};


export default AccountTooltip;
