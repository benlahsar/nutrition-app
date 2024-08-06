/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-color": "#059212",
                "secondary-color": "#06D001",
                "third-color": "#9BEC00",
                "fourth-color": "#F3FF90",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
