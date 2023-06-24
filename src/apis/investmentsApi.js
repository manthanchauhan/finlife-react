import {api} from "./config/axiosConfig";
import {getAuthToken} from "../utils";

export const investmentsApi = {
    baseUrl: "/api/v1/investments",

    list: async function() {
        const response = await api.request({
            url: this.baseUrl,
            method: "GET",
            headers: {Authorization: getAuthToken()}
        })

        return response.data;
    }
}