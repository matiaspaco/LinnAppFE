import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { CommentGet, CommentPost } from "../Models/Comment";

const api = "http://localhost:5029/api/comment";//My BE port locally

export const createCommentApi = async (title: string, content: string, symbol: string) => {
    try {
        const data = await axios.post<CommentPost>(api + `/${symbol}`, {
            title: title,
            content: content,
        });
        return data;
    } catch (error) {
        handleError(error);//handle error is the custom handle for the errors
    }
}

export const getCommentApi = async (symbol: string) => {
    try {
        const data = await axios.get<CommentGet[]>(api + `?symbol=${symbol}`);
        return data;
    } catch (error) {
        handleError(error);//handle error is the custom handle for the errors
    }
}