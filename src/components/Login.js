import React, {useContext, useEffect, useState} from 'react';
import NavbarContext from "../contexts/navbar/NavbarContext";
import {Link, useNavigate} from "react-router-dom";
import {authApi} from "../apis/authApis";

const Login = () => {
    const context = useContext(NavbarContext);
    const {setShowNav} = context;

    useEffect(() => {
        if (localStorage.getItem("authToken") !== null){
            navigate("/");
        }
        setShowNav(false);
    },);

    useEffect(() => {
        return () => {
            setShowNav(true);
        }
    },)

    const [state, setState] = useState({email: "", password: ""});

    const onChange = (e) => {
        setState({...state, [e.target.id]: e.target.value});
    }

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        authApi.login(state).then((data) => {
            localStorage.setItem("authToken", data.data.authToken);
            localStorage.setItem("userProfile", JSON.stringify(data.data.user));
            navigate("/");
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }

    return (
        <div className={"container col-lg-4 mx-auto"} style={{marginTop: "150px"}}>
            <h3 style={{textAlign: "center"}} className={"my-3"}>Log in to <Link to={"/"}
                                                                                 className={"underline-on-hover"}>Finlife</Link>
            </h3>
            <div className="card" style={{backgroundColor: "#F6F8FA"}}>
                <div style={{margin: "15px"}}>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email"
                                   aria-describedby="emailHelp" onChange={onChange} value={state.email}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={onChange}
                                   value={state.password}/>
                        </div>
                        <div className={"container"} style={{textAlign: "center"}}>
                            <button type="submit" className="btn btn-success" style={{width: "125px"}} onClick={onSubmit}>Log in</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={"card my-4"}>
                <p style={{margin: "5px"}} className={"mx-auto"}>New user? <Link to={"/signup"}
                                                                                 className={"underline-on-hover"}>Create
                    account</Link>.</p>
            </div>
        </div>
    );
};

export default Login;
