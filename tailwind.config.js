/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      width:{
        "w_remarks": "136px",
        "w_card": "70%",
        "w_rating": "30%",
        "view_w": "232px",
        "card_w": "295px"
      },
      height:{
        "h_remarks": "34px",
        "f_h": "452px",
        "view_h": "48px"

      },
      colors:{
        "main_col":"rgba(75, 86, 101, 1)",
        "col_remark_bg": "rgba(255, 119, 36, 1)",
        "col_topic2": "rgba(44, 56, 74, 1)",
        "bg_rating": "rgba(243, 249, 255, 1)",
        "col_rating": "rgba(7, 71, 134, 1)",
        "bg_view_col":"rgba(27, 136, 244, 1)"
      }
    },
  },
  plugins: [],
}