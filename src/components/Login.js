import React, {useContext, useEffect} from 'react';
import NavbarContext from "../contexts/navbar/NavbarContext";

const Login = () => {
    const context = useContext(NavbarContext);
    const {setShowNav} = context;

    useEffect(() => {
        setShowNav(false);
    }, );

    useEffect(() => {
        return () => {
            setShowNav(true);
        }
    }, )

    return (
        <div className={"container col-lg-4 mx-auto"} style={{marginTop: "150px"}}>
            <h3 style={{textAlign: "center"}} className={"my-3"}>Log in to Finlife</h3>
            <div className="card" style={{backgroundColor: "#F6F8FA"}}>
                <div style={{margin: "20px"}}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                            </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className={"container"} style={{textAlign: "center"}}>
                    <button type="submit" className="btn btn-success" style={{width: "125px"}}>Log in</button>
                    </div>
                </form>
                </div>

            </div>
        </div>
    );
};

export default Login;
