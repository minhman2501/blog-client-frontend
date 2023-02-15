/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat']
            },
            colors: {
                'primary-1': '#fc0',
                'primary-2': '#f16363',
                'base-bg': '#fff5cf'
            }
        }
    },
    plugins: []
}
