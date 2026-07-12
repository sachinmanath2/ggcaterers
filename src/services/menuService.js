import api from "./api";

class MenuService {
    async getMenu() {
        const { data } = await api.get("/menu");
        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    }

    async refreshMenu() {
        const { data } = await api.get("/refresh-menu");
        if (!data.success) {
            throw new Error(data.message);
        }

        return data;
    }
}

export default new MenuService();