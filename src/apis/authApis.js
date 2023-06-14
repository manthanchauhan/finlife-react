import {api} from "./config/axiosConfig";

export const authApi = {
    login: async function(credentials) {
        const response = await api.request({
            url: "/api/v1/auth/login",
            method: "POST",
            data: credentials
        })

        return response.data;
    }
}