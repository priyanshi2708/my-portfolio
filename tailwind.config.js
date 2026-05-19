/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#8b5cf6',
        'brand-secondary': '#3b82f6',
        'brand-accent': '#f59e0b',
        'light-cream': '#f1f5f9',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'floating': 'floating 4s ease-in-out infinite',
        'float': 'float 20s infinite alternate',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        float: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(5%, 10%) scale(1.1)' },
          '100%': { transform: 'translate(-5%, -5%) scale(0.9)' },
        }
      }
    },
  },
  plugins: [],
}
