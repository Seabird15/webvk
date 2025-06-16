/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          gobold: ['Gobold', 'sans-serif'],
          goboldText: ['Gobold Lowplus', 'sans-serif'],
        },
        colors: {
          primary: '#ffde59',
          secondary: '#FBBF24',
          accent: '#F472B6',
          neutral: '#374151',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    },
    plugins: [],
  }
  