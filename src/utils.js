import {assetApi} from "./apis/assetApi";

const isLoggedIn = () => {
    return getAuthToken() !== null;
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

const getAuthToken = () => {
    return localStorage.getItem("authToken")
}

const getAssetUUIDMap = () => {
    let assetUUIDMap = JSON.parse(localStorage.getItem("assetUUIDMap"))

    if (assetUUIDMap === null){
        assetUUIDMap = createAssetUUIDMap()
    }

    return assetUUIDMap
}

const createAssetUUIDMap = () => {
    let assetUUIDMap = {}

    assetApi.list()
        .then((response) => {
            for (let asset of response.data.assets){
                assetUUIDMap[asset.uuid] = asset.name
            }

            localStorage.setItem("assetUUIDMap", JSON.stringify(assetUUIDMap))
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    ;

    return assetUUIDMap;
}

export {isLoggedIn, getLoggedInUserName, getAuthToken, getAssetUUIDMap};