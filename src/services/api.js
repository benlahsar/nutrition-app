import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    withXSRFToken: true,
});

export const foodApi = axios.create({
    baseURL: "https://api.calorieninjas.com/v1/nutrition",
    headers: {
        "x-api-key": "6L/m+0+gYX5dyl9svb3+SQ==bmrU7PxzW6nHv1iE",
    },
});

export const mealApi = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1",
});


export default api;
