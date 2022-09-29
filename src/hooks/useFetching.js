import { useState } from "react";


// хук запроса
export const useFetching = (callback) => {
    const [isLoading, setIsLoading] =useState(false);
    const [error, setError] = useState('');

    const fetchElem = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false)
        }
    }

    return [fetchElem, isLoading, error]
};