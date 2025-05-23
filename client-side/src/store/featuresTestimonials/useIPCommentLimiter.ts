import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../services/api";

type IPCheckResult = {
    ip: string;
    hasCommented: boolean;
    loading: boolean;
};

export const useIPCommented = (): IPCheckResult => {
    const [ip, setIp] = useState("");
    const [hasCommented, setHasCommented] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIPAndCheck = async () => {
            try {
                // IP adresini al
                const ipResponse = await axios.get("https://api64.ipify.org?format=json");
                const userIp = ipResponse.data.ip;
                setIp(userIp);

                // IP ile backend'e istekte bulun
                const checkResponse = await api.get(`/testimonials/check-ip/${userIp}`);
                setHasCommented(checkResponse.data.hasCommented);
            } catch (error) {
                console.error("IP kontrolü yapılırken hata oluştu:", error);
                // Varsayılan olarak yorum yapmamış varsay
                setHasCommented(false);
            } finally {
                setLoading(false);
            }
        };

        fetchIPAndCheck();
    }, []);

    return { ip, hasCommented, loading };
};
