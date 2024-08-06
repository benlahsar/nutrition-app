import { useState } from "react";
import { FunctionDeclarationSchemaType, GoogleGenerativeAI } from "@google/generative-ai";
import Button from "../components/Button";
import Loading from "./Loading";
import { foodApi } from "../services/api";

const apiKey = "AIzaSyC5pd_NJrvjd0VXOoI8VXWL1l1J9tpUMtM";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
            type: FunctionDeclarationSchemaType.ARRAY,
            items: {
                type: FunctionDeclarationSchemaType.OBJECT,
                properties: {
                    recipe_name: {
                        type: FunctionDeclarationSchemaType.STRING,
                    },
                    meal_time: {
                        type: FunctionDeclarationSchemaType.STRING,
                    },
                    calories: {
                        type: FunctionDeclarationSchemaType.NUMBER,
                    },
                    serving_size_in_gram: {
                        type: FunctionDeclarationSchemaType.NUMBER
                    }
                },
            },
        },
    },
});

export default function GeneratedResponse({ prompt }) {
    const [generatedResponse, setGeneratedResponse] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendPrompt = async () => {
        setIsLoading(true);
        try {
            const result = await model.generateContent(prompt);
            const text = result.response.text();
            const data = JSON.parse(text);
            setGeneratedResponse(data);
        } catch (e) {
            setGeneratedResponse("An error occurred while generating the response.");
        } finally {
            setIsLoading(false);
        }
        sendQuery();
    };

    const sendQuery = async () => {
        let recipeName = [];
        generatedResponse.map(item => {
            recipeName.push(item.recipe_name, item.serving_size_in_gram);
        });
        let strData = recipeName.join(" ");
        setQuery(strData);
        const response = await foodApi.get(`?query=${query}`);
        console.log(response.data);
    };

    return (
        <>
            {/* <input type="text" value={query} onChange={e => setQuery(e.target.value)} /> */}
            {isLoading && <Loading />}
            <ul>
                {generatedResponse.map((item, index) => (
                    <li key={index}>
                        <strong>{item.meal_time}:</strong> <span>{item.recipe_name}</span> <span>{item.serving_size_in_gram} g</span> <span>{item.calories} cal</span>
                    </li>
                ))}
            </ul>
            <Button title="click" click={sendPrompt} />
        </>
    );
}
