import { useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

export default function NavBar() {
    const {user, logout} = useAuthContext()
    const navigate = useNavigate();

    return (
        <nav className="flex justify-between items-center shadow-black bg-primary-color text-fourth-color fixed top-0 w-full h-14 z-50">
            <div className="logo mx-3">
                <img src="" alt="🍎" />
            </div>
            <div className="pages">
                <ul className="flex *:cursor-pointer">
                    <li className="mx-4" onClick={() => navigate('/')}>Home</li>

                    <li className="mx-4" onClick={() => navigate('/setup')}>Setup</li>

                    <li className="mx-4" onClick={() => navigate('/blog')}>Blog</li>

                    <li className="mx-4" onClick={() => navigate('/about')}>About</li>
                </ul>
            </div>
            {user ? (
                <button className="mx-5 border border-fourth-color rounded px-2 py-1 hover:bg-red-600 hover:text-white hover:border-red-600" onClick={logout}>
                    Logout
                </button>
            ) : (
                <div className="auth">
                    <button className="border border-third-color rounded px-2 py-1 hover:bg-third-color hover:text-primary-color " onClick={() => navigate("/login")}>
                        Login
                    </button>
                    <button className="mx-5 bg-fourth-color text-primary-color px-2 py-1 rounded hover:bg-secondary-color hover:text-fourth-color" onClick={() => navigate("/register")}>
                        Register
                    </button>
                </div>
            )}
        </nav>
    );
}
