import { useEffect, useState, useCallback } from "react";
import menuService from "../services/menuService";

export default function useMenu() {

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadMenu = useCallback(async () => {

        try {

            setLoading(true);
            setError(null);

            const response = await menuService.getMenu();

            if (!response.success) {
                throw new Error(response.message);
            }

            setMenu(response.data);

        } catch (err) {

            setError(err.message);

        } finally {

            setLoading(false);

        }

    }, []);

    const refreshMenu = async () => {
        await menuService.refreshMenu(); // Clears Laravel cache
        await loadMenu();                // Fetches fresh menu
    };

    useEffect(() => {

        loadMenu();

    }, [loadMenu]);

    return {

        menu,

        loading,

        error,

        refreshMenu,

        refresh: loadMenu,

    };

}