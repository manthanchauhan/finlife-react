import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {getLoggedInUserName, isLoggedIn} from "../utils";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn()){
            navigate("/about");
        }
    });

    return (
        <h1>
            Hi {getLoggedInUserName()}, this is home.
        </h1>
    );
};

export default Home;
