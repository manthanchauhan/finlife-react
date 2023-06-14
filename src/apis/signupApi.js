import {api} from "./config/axiosConfig";

export const signupApi = {
    signup: async function(userInfo) {
        const response = await api.request({
            url: "/api/v1/signup",
            method: "POST",
            data: userInfo
        })

        return response.data;
    }
}