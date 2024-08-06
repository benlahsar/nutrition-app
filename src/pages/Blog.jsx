import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../components/NavBar";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Blog() {
    return (
        <>
            <NavBar />
            <div className="bg-teal-50 mt-16 w-full h-96 flex justify-between">
                <div className="flex flex-col justify-center items-center mx-auto">
                    <h1 className="text-4xl font-bold mb-3">OUR BLOG</h1>
                    <div className="bg-white text-center w-44 p-1 rounded">
                        <a href="/" className="">
                            <FontAwesomeIcon icon={faHome} />
                            <span className="font-bold ml-1">Home </span>
                        </a>
                        / OUR BLOG
                    </div>
                </div>
                <div className="">
                    <img src="src/assets/images/sports.jpeg" width="800px" />
                </div>
            </div>
            <div className="flex justify-center items-center min-h-screen my-4">
                <div className="grid grid-cols-3 grid-rows-2 gap-5 items-center justify-items-center max-w-[1250px]">
                    <Card
                        src="src/assets/images/food.jpg"
                        description="Fitness Recipes: Healthy Food for Any Workout"
                    />
                    <Card
                        src="src/assets/images/food.jpg"
                        description="Fitness Recipes: Healthy Food for Any Workout"
                    />
                    <Card
                        src="src/assets/images/food.jpg"
                        description="Fitness Recipes: Healthy Food for Any Workout"
                    />
                    <Card
                        src="src/assets/images/food.jpg"
                        description="Fitness Recipes: Healthy Food for Any Workout"
                    />
                    <Card
                        src="src/assets/images/food.jpg"
                        description="Fitness Recipes: Healthy Food for Any Workout"
                    />
                    <Card
                        src="src/assets/images/food.jpg"
                        description="Fitness Recipes: Healthy Food for Any Workout"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
