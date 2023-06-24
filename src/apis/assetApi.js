import {api} from "./config/axiosConfig";
import {getAuthToken} from "../utils";

export const assetApi = {
    baseUrl: "/api/v1/assets",

    list: async function() {
        const response = await api.request({
            url: this.baseUrl,
            method: "GET",
            headers: {Authorization: getAuthToken()}
        })

        return response.data;
    }
}