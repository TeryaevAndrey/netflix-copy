import React from "react";
import axios from "axios";

export const useHttp = () => {
    const [loading, setLoading] = React.useState<boolean>(false);

    const request = React.useCallback(async(url: string) => {
        setLoading(true);

        try {
            const res = await axios.get(url, {
                headers: {
                    'X-API-KEY': process.env.API_KEY,
                    'Content-Type': 'application/json',
                }
            });

            const data = await res.data;

            setLoading(false);
    
            return data;
        } catch(err) {
            return console.log(err);
        }
    }, []);

    return {request, loading};
};