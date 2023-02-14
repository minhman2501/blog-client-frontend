/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            "primary-1": {
                DEFAULT: "#fc0",
                500: "#fff5cf"
            },
            "primary-2": "#f16363"
        },
        extend: {}
    },
    plugins: []
}
