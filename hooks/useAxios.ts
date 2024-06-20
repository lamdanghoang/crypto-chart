"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface ResponseType {
    coins?: any[];
}

export const useAxios = (param: string) => {
    const [response, setResponse] = useState<ResponseType | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

    async function fetchData(param: string) {
        try {
            setIsLoading(true);
            const res = await axios(param);
            setResponse(res.data)
        } catch (error) {
            setError('Fetching failed!')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData(param)
    }, [])

    return { response, isLoading, error }
}