import React, {useContext, useEffect, useState} from 'react';
import NavbarContext from "../contexts/navbar/NavbarContext";
import {Link, useNavigate} from "react-router-dom";
import {signupApi} from "../apis/signupApi";

const Signup = () => {
    const context = useContext(NavbarContext);
    const {setShowNav} = context;

    const navigate = useNavigate();

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

    const [state, setState] = useState({firstName: "", lastName: "", email: "", password: ""});

    const onChange = (e) => {
        setState({...state, [e.target.id]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();

        signupApi.signup(state)
            .then((userInfo) => {
                console.log(userInfo)
                navigate("/login")
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    return (
        <div className={"container col-lg-6 mx-auto"} style={{marginTop: "150px"}}>
            <h3 style={{textAlign: "center"}} className={"my-3"}>Sign up to <Link to={"/"}
                                                                                  className={"underline-on-hover"}>Finlife</Link>
            </h3>
            <div className="card" style={{backgroundColor: "#F6F8FA"}}>
                <div style={{margin: "15px"}}>
                    <form>
                        <div className={"row align-items-center"}>
                            <div className="mb-3 col-12 col-md-6">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" onChange={onChange}
                                       value={state.firstName}/>
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" onChange={onChange}
                                       value={state.lastName}/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email"
                                   aria-describedby="emailHelp" onChange={onChange}
                                   value={state.email}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={onChange}
                                   value={state.password}/>
                        </div>
                        <div className={"container"} style={{textAlign: "center"}}>
                            <button type="submit" className="btn btn-success" style={{width: "125px"}}
                                    onClick={onSubmit}>Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={"card my-4"}>
                <p style={{margin: "5px"}} className={"mx-auto"}>Existing user? <Link to={"/login"}
                                                                                      className={"underline-on-hover"}>Log
                    in</Link>.</p>
            </div>
        </div>
    );
};

export default Signup;
