import { useEffect } from "react";
import useAuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AdviceSection from "../components/AdviceSection";
import WhySection from "../components/WhySection";
import BMISection from "../components/BMISection";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
    const { user, getUser } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, [user, getUser]);

    return (
        <>
            <NavBar />
            <section className="mt-48">
                <h1 className="text-6xl">Hello {user?.name} 🍐</h1>
                <button
                    onClick={() => navigate("/setup")}
                    className="text-white bg-primary-color w-[140px] h-[55px] my-6 rounded"
                >
                    Start
                </button>
            </section>
            <AdviceSection />
            <BMISection />
            <WhySection />
            <Footer />
        </>
    );
}
