/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
   
    extend: {
      colors:{   
        blues:"#3056d3",
        greens:"#13c296",
        sky:"#e9f9ff",
        darkblue:"#090e34",
            }, 
          
    },
  },
  plugins: [],
  
}
