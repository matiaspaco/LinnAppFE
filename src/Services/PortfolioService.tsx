import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { PortfolioGet, PortfolioPost } from "../Models/Portfolio";

const api = "http://localhost:5029/api/portfolio";//My BE port locally

export const portfolioCreateApi = async (symbol: string) => {
    try {
        const data = await axios.post<PortfolioPost>(api + `?symbol=${symbol}`);
        return data;
    } catch (error) {
        handleError(error);//handle error is the custom handle for the errors
    }
}

export const portfolioDeleteApi = async (symbol: string) => {
    try {
        const data = await axios.delete<PortfolioPost>(api + `?symbol=${symbol}`);
        return data;
    } catch (error) {
        handleError(error);//handle error is the custom handle for the errors
    }
}

export const portfolioGetApi = async () => {
    try {
        const data = await axios.get<PortfolioGet[]>(api);
        return data;
    } catch (error) {
        handleError(error);//handle error is the custom handle for the errors
    }
}