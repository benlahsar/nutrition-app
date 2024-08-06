import { useState } from "react";
import GeneratedResponse from "../components/GeneratedResponse";

export default function About() {
    const [prompt, setPrompt] = useState("");

    return (
        <>
            <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} />
            <GeneratedResponse prompt={prompt} />
        </>
    );
}
