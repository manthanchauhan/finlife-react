const isLoggedIn = () => {
    return localStorage.getItem("authToken") !== null;
}

const getLoggedInUserName = () => {
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));

    if (userProfile === null){
        return "Stranger"
    }

    const firstName = userProfile.firstName;
    const lastName = userProfile.lastName;

    let name;

    if (firstName === null || firstName === ""){
        return "Stranger"
    }

    name = firstName;

    if (lastName !== null && lastName !== ""){
        name = name + " " + lastName
    }

    return name;
}

export {isLoggedIn, getLoggedInUserName};