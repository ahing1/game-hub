import axios from "axios";

export interface FetchResponse <T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '1f515dda61854f98a213ac2399b4e3c9'
    }
})