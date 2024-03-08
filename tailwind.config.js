/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        navColor:'#9C7997',
        bgColor: '#FDF7FC',
        borderColor:'#E3CDE4',
        enquireColor:'#9D9D9D',
        emailColor:'#7744AD'
      },
      fontFamily: {
        heroFont:['Alata'] 
      }
    },
  },
  plugins: [],
}