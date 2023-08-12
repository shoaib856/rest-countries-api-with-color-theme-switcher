/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], theme: {
        extend: {}, colors: {
            "dark-blue": "hsl(209, 23%, 22%)",
            "very-dark-blue-dark-mode": "hsl(207, 26%, 17%)",
            "very-dark-blue-light-mode": "hsl(200, 15%, 8%)",
            "dark-gray": "hsl(0, 0%, 52%)",
            "very-light-gray": "hsl(0, 0%, 98%)",
            "white": "hsl(0, 0%, 100%)",
        }
    }, plugins: [],
};
