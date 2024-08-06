import { createContext, useContext, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const csrf = () => api.get("/sanctum/csrf-cookie");

    const getUser = async () => {
        const { data } = await api.get("/api/user");
        setUser(data);
    };

    const login = async ({ email, password }) => {
        await csrf();
        try {
            const response = await api.post("/login", { email, password });
            await getUser();
            if (response.status === 204) {
                navigate("/");
            }
        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
    };

    const register = async ({ name, email, sexe, birth_date, password, password_confirmation }) => {
        await csrf();
        try {
            const response = await api.post("/register", {
                name,
                email,
                sexe,
                birth_date,
                password,
                password_confirmation,
            });
            await getUser();
            if (response.status === 204) {
                navigate("/");
            }
            console.log(response);
        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
    };

    const logout = () => {
        try {
            const response = api.post("/logout");
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, errors, getUser, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default function useAuthContext() {
    return useContext(AuthContext);
}
