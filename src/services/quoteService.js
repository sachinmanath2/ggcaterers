import api from "./api";

export async function submitQuote(data) {

    const response = await api.post("/quotes", data);

    return response.data;

}