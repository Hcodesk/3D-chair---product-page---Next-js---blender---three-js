const { Opacity } = require('@mui/icons-material');
const { width } = require('@mui/system');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {

		keyframes: {
			typing: {
			  from: { width: '0' },
			  to: { width: '100%' },
			},
			cursor: {
			  '50%': { borderColor: 'transparent' },
			},
		  },
		  animation: {
			typing: 'typing 2s steps(26) 1s forwards', // Adjust the steps based on text length
			cursor: 'cursor .75s step-end infinite',
		  },

  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

