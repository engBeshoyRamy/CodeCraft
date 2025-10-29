/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00D9FF',
                secondary: '#1A1A2E',
                accent: '#FFA500',
            }
        },
    },
    plugins: [],
}