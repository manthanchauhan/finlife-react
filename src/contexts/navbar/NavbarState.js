import NavbarContext from "./NavbarContext";
import {useState} from "react";

const NavbarState = (props) => {
    const [showNav, setShowNav] = useState(true);

    return (
        <NavbarContext.Provider value={{showNav, setShowNav}}>
            {props.children}
        </NavbarContext.Provider>
    );
}

export default NavbarState;