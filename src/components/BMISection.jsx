import { useState } from "react";
import api from "../services/api";
import useAuthContext from "../context/AuthContext";

export default function BMISection() {
    const [unit, setUnit] = useState("metrics");
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [bmi, setbmi] = useState();

    const { user, getUser } = useAuthContext();

    // const showForm = () => {
    //     let div = document.querySelector("");
    //     div.style.overflow = "block";
    // };

    const calculateBMI = () => {
        if (unit === "us") {
            let heightInCm = (height * 30.48).toFixed(2);
            let weightInCm = (weight * 0.45).toFixed(2);
            let squaredHeight = (heightInCm / 100) ** 2;
            let BMIInUs = (Number(weightInCm) / Number(squaredHeight)).toFixed(2);
            setbmi(BMIInUs);
        } else {
            let squaredHeight = (height / 100) ** 2;
            let BMIInM = (Number(weight) / Number(squaredHeight)).toFixed(2);
            setbmi(BMIInM);
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await api.get("/sanctum/csrf-cookie");
        await getUser();
        if (user) {
            const request = await api.post("/api/bodyInfo", {
                goal: "none",
                weight,
                height,
                bmi,
                user_id: user.id,
            });
            console.log(request);
        } else {
            const request = await api.post("/api/anonymousBodyInfo", { weight, height, bmi });
            console.log(request);
        }
    };

    return (
        <section className="flex bg-lime-100 h-[530px] p-7">
            <div className="w-full">
                <h1 className="ml-6 text-4xl text-wrap">CALCULATE YOUR BODY MASS INDEX (BMI)</h1>
                <form className="flex flex-col items-center mt-4 w-full" onSubmit={handleSubmit}>
                    <div className="my-3">
                        <label>US units</label>
                        <input
                            className="ml-1"
                            type="radio"
                            name="unit"
                            value="us"
                            checked={unit == "us"}
                            onChange={e => setUnit(e.target.value)}
                        />
                        <label className="ml-4">Metrics</label>
                        <input
                            className="ml-1"
                            type="radio"
                            name="unit"
                            value="metrics"
                            checked={unit == "metrics"}
                            onChange={e => setUnit(e.target.value)}
                        />
                    </div>
                    <div className="my-4">
                        <label>Height</label>
                        <br />
                        <input
                            className="px-7"
                            type="text"
                            min={0}
                            value={height}
                            placeholder="Enter your height"
                            onChange={e => setHeight(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Weight</label>
                        <br />
                        <input
                            className="px-7"
                            type="text"
                            min={0}
                            value={weight}
                            placeholder="Enter your weight"
                            onChange={e => setWeight(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={calculateBMI}
                        className="text-white justify-center mt-5 bg-primary-color w-[100px] h-[45px] rounded"
                    >
                        calculate
                    </button>
                    <p>{bmi}</p>
                </form>
            </div>
            <img src="src/assets/images/food.jpg" width="500px" />
        </section>
    );
}
