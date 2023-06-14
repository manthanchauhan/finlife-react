import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import NavbarContext from "../contexts/navbar/NavbarContext";

const Navbar = () => {
    const context = useContext(NavbarContext);
    const {showNav} = context;

    const navigate = useNavigate();
    const onClickLogin = ()=>{
        navigate("/login")
    }

    const onClickSignup = ()=>{
        navigate("/signup")
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
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/about">About</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    {localStorage.getItem("authToken") == null && <li className="nav-item mx-2">
                        <button className="btn nav-btn" onClick={onClickLogin}>Log in</button>
                    </li>}
                    {localStorage.getItem("authToken") == null && <li className="nav-item">
                        <button className="btn btn-outline nav-btn-outline" onClick={onClickSignup}>Sign up</button>
                    </li>}
                </ul>
            </div>
        </div>
    </nav>}
        </>
    );
};

export default Navbar;
