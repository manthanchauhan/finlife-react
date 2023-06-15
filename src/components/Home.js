import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {getLoggedInUserName, isLoggedIn} from "../utils";
import CustomSidebar from "./CustomSidebar";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/about");
        }
    });

    return (
        <div className={"d-flex"}>
            <div className={"flex-fill"}>
                <CustomSidebar/>
            </div>
            <div className={"flex-fill"}>
                <div className={"container"}>
                    <h1>
                        Hi {getLoggedInUserName()}, this is home.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
