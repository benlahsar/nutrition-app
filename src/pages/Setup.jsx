import { useState } from "react";
import api from "../services/api";
import useAuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Setup() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [goal_weight, setGoal_weight] = useState("");
    const [unit, setUnit] = useState("metric");
    const [goal, setGoal] = useState("");
    const [bmi, setbmi] = useState();

    const { user, getUser } = useAuthContext();

    const navigate = useNavigate();

    const activityFactor = [
        {
            activity: "sedentary",
            value: 1.2,
        },
        {
            activity: "lightly active",
            value: 1.375,
        },
        {
            activity: "moderate acitve",
            value: 1.55,
        },
        {
            activity: "very active",
            value: 1.725,
        },
        {
            activity: "super active",
            value: 1.9,
        },
    ];

    const calculateBMR = () => {
        if (unit === "us") {
            let heightInCm = (Number(height) * 30.48).toFixed(2);
            let weightInKg = (Number(weight) * 0.45).toFixed(2);
            if (user.sexe == "male") {
                const BMR = 10 * weightInKg + 6.25 * heightInCm + 5;
                console.log(BMR);
                return BMR;
            } else {
                const BMR = 10 * weightInKg + 6.25 * heightInCm - 161;
                console.log(BMR);
                return BMR;
            }
        } else {
            if (user.sexe == "male") {
                const BMR = 10 * weight + 6.25 * height + 5;
                console.log(BMR);
                return BMR;
            } else {
                const BMR = 10 * weight + 6.25 * height - 161;
                console.log(BMR);
                return BMR;
            }
        }
    };

    const calculateTDEE = () => {
        let calcedBMR = calculateBMR();
        let TDEE;

        switch (activityFactor.activity) {
            case "sedentary":
                TDEE = calcedBMR * 1.2;
                break;
            case "lightly_active":
                TDEE = calcedBMR * 1.375;
                break;
            case "moderately_active":
                TDEE = calcedBMR * 1.55;
                break;
            case "very_active":
                TDEE = calcedBMR * 1.725;
                break;
            case "super_active":
                TDEE = calcedBMR * 1.9;
                break;
            default:
                TDEE = calcedBMR;
        }

        console.log(TDEE);
        return TDEE;
    };

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

        try {
            await api.get("/sanctum/csrf-cookie");
            await getUser();
            const response = await api.post("/api/bodyInfo", {
                goal,
                weight,
                height,
                bmi,
                goal_weight,
                user_id: user.id,
            });
            if (response.status === 204) {
                navigate("/");
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center items-center h-[100vh]">
        <div className="border border-black rounded-2xl shadow-lg shadow-gray-400 w-[55vw] h-[90vh]">
            <form className="grid grid-rows-7 items-center h-full mx-5" onSubmit={handleSubmit}>
                <div className="flex w-full items-center justify-around">
                    <span className="w-full">I want to</span>
                    <select className="form-select" value={goal} onChange={e => setGoal(e.target.value)}>
                        <option value="">Choose your objective</option>
                        <option value="gain weight">Gain weight</option>
                        <option value="gain muscles">Gain muscles</option>
                        <option value="lose weight">Lose weight</option>
                    </select>
                </div>
                <div className="w-full flex items-center justify-between">
                    <span className="w-full">Preferred Units</span>
                    <div className="w-full flex  justify-around">
                        <label htmlFor="">
                            U.S Units
                            <input
                                className="ml-2"
                                type="radio"
                                name="unit"
                                value="us"
                                checked={unit == "us"}
                                onChange={e => setUnit(e.target.value)}
                            />
                        </label>
                        <label htmlFor="">
                            Metrics
                            <input
                                className="ml-2"
                                type="radio"
                                name="unit"
                                value="metric"
                                checked={unit == "metric"}
                                onChange={e => setUnit(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                {unit === "metric" ? (
                    <>
                        <div className="w-full flex items-center justify-between">
                            <label className="my-3">Weight</label>
                            <div>
                                <input
                                    className="border-[2px]"
                                    type="text"
                                    value={weight}
                                    onChange={e => setWeight(e.target.value)}
                                    placeholder="Enter your weight"
                                />
                                <span className="ml-2">kg</span>
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between">
                            <label className="my-3">Height</label>
                            <div>
                                <input
                                    className="border-[2px]"
                                    type="text"
                                    value={height}
                                    onChange={e => setHeight(e.target.value)}
                                    placeholder="Enter your height"
                                />
                                <span className="ml-2">cm</span>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <label htmlFor="">Set goal weight</label>
                            <div>
                                <input
                                    className="border-[2px]"
                                    type="text"
                                    value={goal_weight}
                                    onChange={e => setGoal_weight(e.target.value)}
                                    placeholder="Set your goal weight"
                                />
                                <label className="ml-2">kg</label>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-full flex items-center justify-between">
                            <label className="my-3">Weight</label>
                            <div>
                                <input
                                    className="border-[2px]"
                                    type="text"
                                    value={weight}
                                    onChange={e => setWeight(e.target.value)}
                                    placeholder="Enter your weight"
                                />
                                <span className="ml-2">lbs</span>
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between">
                            <label className="my-3">Height</label>
                            <div>
                                <input
                                    className="border-[2px]"
                                    type="text"
                                    value={height}
                                    onChange={e => setHeight(e.target.value)}
                                    placeholder="Enter your height"
                                />
                                <label className="ml-2">ft</label>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <label htmlFor="">Set goal weight</label>
                            <div>
                                <input
                                    className="border-[2px]"
                                    type="text"
                                    value={goal_weight}
                                    onChange={e => setGoal_weight(e.target.value)}
                                    placeholder="Set goal weight"
                                />
                                <label className="ml-2">lbs</label>
                            </div>
                        </div>
                    </>
                )}
                <div className="w-full flex items-center justify-center">
                    <button
                        onClick={calculateBMI}
                        className="text-white justify-center bg-green-600 w-[140px] h-[55px] my-6 rounded"
                    >
                        Calculate
                    </button>
                    <button
                        onClick={calculateTDEE}
                        className="text-white justify-center bg-green-600 w-[140px] h-[55px] my-6 mx-4 rounded"
                    >
                        Calculate calories
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
}
