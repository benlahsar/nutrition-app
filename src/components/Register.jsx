import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

export default function Register() {
    const [name, setName] = useState("");
    const [sexe, setSexe] = useState("");
    const [email, setEmail] = useState("");
    const [birth_date, setBirth] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfirm] = useState("");
    const { register, errors } = useAuthContext();

    const navigate = useNavigate();

    const handleLogin = async e => {
        e.preventDefault();
        register({ name, email, sexe, birth_date, password, password_confirmation });
    };

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div id="form-container" className="border-[2px] border-gray-200 rounded flex flex-col w-[50vw]">
                <span className="text-center text-5xl font-bold my-[15px]">Register</span>
                <form className="flex flex-col justify-center items-center" onSubmit={handleLogin}>
                    <input
                        className="border my-[20px] p-[8px] w-[80%]"
                        placeholder="Enter your Name"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    {errors.name && <span className="text-red-500">{errors.name[0]}</span>}
                    <div className="flex items-center w-full pl-[70px] pr-[50px] my-3">
                        <span className="w-full">I am</span>
                        <div className="w-full flex  justify-around">
                            <label>
                                Male
                                <input
                                    className="ml-2"
                                    type="radio"
                                    name="sexe"
                                    value="male"
                                    checked={sexe == "male"}
                                    onChange={e => setSexe(e.target.value)}
                                />
                            </label>

                            <label>
                                Female
                                <input
                                    className="ml-2"
                                    type="radio"
                                    name="sexe"
                                    value="female"
                                    checked={sexe == "female"}
                                    onChange={e => setSexe(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="w-full flex justify-around items-center my-3">
                        <label>Choose your birth date</label>
                        <input type="date" value={birth_date} onChange={e => setBirth(e.target.value)} />
                    </div>
                    {errors.birth_date && <span className="text-red-500">{errors.birth_date[0]}</span>}
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
                        type="text"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {errors.password && <span className="text-red-500">{errors.password[0]}</span>}
                    <input
                        className="border my-[20px] p-[8px] w-[80%]"
                        type="text"
                        name="confirm_password"
                        placeholder="Enter your password"
                        value={password_confirmation}
                        onChange={e => setConfirm(e.target.value)}
                    />
                    {errors.password_confirmation && (
                        <span className="text-red-500 mb-3">{errors.password_confirmation[0]}</span>
                    )}

                    <p className="text-blue-500 cursor-pointer" onClick={() => navigate("/login")}>
                        I already have an account yet
                    </p>
                    <button type="submit" className="text-white bg-green-600 w-[140px] h-[55px] my-6 rounded">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
