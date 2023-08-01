import axios, { AxiosError } from "axios";
import { BASE_URL } from "./index";

const instance = axios.create({
    baseURL: BASE_URL,
});

export const axiosGet = async (url: string) => {
    try {
        const res = await instance.get(url);
        return res.data;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            throw error.message;
        }
    }
};
export const axiosPost = async (url: string, data: object) => {
    try {
        const res = await instance.post(url, data);
        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw error.response?.data;
        }
    }
};
export const axiosPut = async (url: string, data: object) => {
    try {
        const res = await instance.put(url, data);
        return res.data;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            throw error.message;
        }
    }
};
export const axiosDelete = async (url: string, data?: object) => {
    try {
        const res = await instance.delete(url, data);
        return res.data;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            throw error.message;
        }
    }
};
