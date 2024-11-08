// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#e6fdf7',
          100: '#ccfaef',
          200: '#99f5df',
          300: '#66f0cf',
          400: '#33ebbf',
          500: '#13FFAA', // Base color
          600: '#10cc88',
          700: '#0c9966',
          800: '#086644',
          900: '#043322',
        },
        oceanBlue: {
          50: '#e6f2fb',
          100: '#cce5f7',
          200: '#99ccf0',
          300: '#66b3e8',
          400: '#3399e1',
          500: '#1E67C6', // Base color
          600: '#1a5ca3',
          700: '#154a80',
          800: '#10385c',
          900: '#0a2639',
        },
        lavenderBlush: {
          50: '#f9f3fa',
          100: '#f3e7f4',
          200: '#e7cfe9',
          300: '#dab8de',
          400: '#cea0d3',
          500: '#CE84CF', // Base color
          600: '#b370b6',
          700: '#8f588f',
          800: '#6b4068',
          900: '#472841',
        },
        cherryBlossomPink: {
          50: '#fdeef1',
          100: '#fbdee3',
          200: '#f7bdc8',
          300: '#f39cad',
          400: '#ef7b92',
          500: '#DD335C', // Base color
          600: '#c42d53',
          700: '#9d2443',
          800: '#761b33',
          900: '#4e1222',
        },
      },
    },
  },
  plugins: [],
}