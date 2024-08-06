import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/setup" element={<Setup />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;
