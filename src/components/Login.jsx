import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import Button from "./Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, errors } = useAuthContext();

    const navigate = useNavigate();

    const handleLogin = async e => {
        e.preventDefault();
        login({ email, password });
    };

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div id="form-container" className="border-[2px] border-gray-200 rounded flex flex-col w-[50vw]">
                <span className="text-center text-5xl font-bold my-[15px]">Login</span>
                <form className="flex flex-col justify-center items-center" onSubmit={handleLogin}>
                    <input
                        className="border my-[20px] p-[8px] w-[80%]"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="text-red-500">{errors.email[0]}</span>}
                    <input
                        className="border my-[20px] p-[8px] w-[80%]"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {errors.password && <span className="text-red-500 mb-3">{errors.password[0]}</span>}
                    <p className="text-blue-500 cursor-pointer" onClick={() => navigate("/register")}>
                        I don't have an account yet
                    </p>
                    <Button title="Login" />
                </form>
            </div>
        </div>
    );
}
