/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'grayMauve': '#EEF1FF',  
        "purple": "#463ADD",
        'subtilGray': "#81828C",
        "bgGray": "#F9F9FB",
        "bgGray1": "rgba(249, 249, 251, 1)",
        "bgGray2": "rgba(240, 240, 243, 1)",
        "textPurple": "#463ADD",
        "iconPurple": "rgba(36, 36, 106, 1)",
        "bgPurple": "hsla(229, 100%, 97%, 1)",
        "bgPurple2": "hsla(229, 100%, 90%, 1)",
        "textPink": "#FF00FB",
        "textGray":"rgba(30, 31, 36, 1)",
        "borderGray": "rgba(255, 255, 255, 1)",
        "progressRed": "rgba(225, 71, 71, 1)",
        "bgRed": "rgba(244, 213, 213, 1)",
        // "bgPurple": "rgba(238, 241, 255, 1)",
        "progressYellow": "rgba(207, 161, 4, 1)",
        "progressGreen": "rgba(76, 181, 146, 1)",
        "bgYellow": "rgba(255, 250, 235, 1)",
        "bgGreen": "rgba(214, 235, 228, 1)",
        "bodyColor": "rgba(252, 253, 255, 1)", 
        "cardWhite": "rgba(255, 255, 255, 1)", 
      },
      height: { 
        'fit': 'fit-content',
        
      },
      inset: {
        "90":'465px'
      },
      fontFamily: {
        'sans': ['Public sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        "Tahoma": ['Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

