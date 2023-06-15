/* eslint-disable no-restricted-globals */
import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import NavbarContext from "../contexts/navbar/NavbarContext";
import {isLoggedIn} from "../utils";
import AccountTooltip from "./AccountTooltip";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Navbar = () => {
    const context = useContext(NavbarContext);
    const {showNav} = context;

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", updateWidth);

        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, [width]);


    const navigate = useNavigate();
    const onClickLogin = () => {
        navigate("/login")
    }

    const onClickSignup = () => {
        navigate("/signup")
    }

    const onClickLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login")
    }

    return (
        <>
            {showNav && <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Finlife</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                                      aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                                      aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            {localStorage.getItem("authToken") === null && <li className="nav-item">
                                <button className="btn nav-btn" onClick={onClickLogin}>Log in</button>
                            </li>}
                            {localStorage.getItem("authToken") === null && <li className="nav-item">
                                <button className="btn btn-outline nav-btn-outline" onClick={onClickSignup}>Sign up
                                </button>
                            </li>}

                            {isLoggedIn() && width > 992 && <li className="nav-item">
                                <OverlayTrigger
                                    trigger="focus"
                                    placement="bottom"
                                    overlay={AccountTooltip({onClickLogout})}>
                                    <Link className="nav-link active">Account</Link>
                                </OverlayTrigger>
                            </li>}

                            {isLoggedIn() && width <= 992 && <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Account</Link>
                            </li>}

                            {isLoggedIn() && width <= 992 && <li className="nav-item">
                                <Link className="nav-link" onClick={onClickLogout}>Log out</Link>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>}
        </>
    );
};

export default Navbar;
