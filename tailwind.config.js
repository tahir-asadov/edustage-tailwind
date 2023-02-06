/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                'main': 'auto 350px',
            }
        },
        container: {
            center: true,
            padding: '1rem'
        },
        screens: {
            'sm': '600px',
            'md': '728px',
            'lg': '984px',
            'xl': '1140px',
        },
        colors: {
            'yellow': '#fdc632',
            'blue': '#002347',
            'gray': '#7b838a',
            'light-gray': '#eceaed',
            'sky': '#0056b3',
            'white': '#ffffff'
            // 'white': '#fff',
            // 'red': '#ff0000',
            // 'gray-transparent': 'rgba(0,0,0,.1)',
            // 'gray-050': '#e5e5e5',
            // 'gray-100': '#bfbfbf',
            // 'gray-200': '#666',
            // 'gray-300': '#424242',
            // 'gray-400': '#333',
            // 'gray-500': '#2f2f2f',
            // 'facebook-color': '#4267B2',
            // 'isntagram-color': '#C13584',
            // 'whatsapp-color': '#128C7E',
        },
        fontFamily: {
            nunito: ['Nunito', 'sans-serif'],
        },
        // fontSize: {
        //     // 'sm': '0.813rem',
        //     // 'base': '0.875rem',
        //     // 'xl': '1.125rem',
        //     // '2xl': '2rem',
        //     // '3xl': '1.953rem',
        //     // '4xl': '2.441rem',
        //     // '5xl': '3.052rem',
        // }
    },
    plugins: [],
}