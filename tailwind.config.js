/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        custom: "#FEDFE1",
        custom1:"#E5E7EB",
       
      },
      colors: {
        Viewtext: '#901E75', 
        head:"#212529",
        tableRow:"#212529"
      },
    },
  },
  plugins: [],
};
