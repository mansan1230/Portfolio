/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFDF5', // Warm Cream
        surface: '#FFFFFF', // White
        primary: '#1F2937', // Dark Gray Text
        secondary: '#4B5563', // Medium Gray Text
        'brand-pink': '#FFD6E0',
        'brand-blue': '#C4E4FF',
        'brand-green': '#D1FAE5',
        'brand-yellow': '#FEF3C7',
        'brand-purple': '#E9D5FF',
        'brand-salmon': '#FF9E9E', // Button color
        'brand-salmon-hover': '#FF8080',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        hand: ['Comic Neue', 'cursive'],
      },
      animation: {
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
}