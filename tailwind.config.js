/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1144px',
      },
   
      backgroundImage: {
        'banner': "url('src/assets/img/banner.png')",
        'service1': "url('src/assets/img/service1.png')",
        'service2': "url('src/assets/img/service2.png')",
        'service3': "url('src/assets/img/service3.png')",
        'aboutImg': "url('src/assets/img/about.png')",
        'blogImg1': "url('src/assets/img/blog1.png')",
        'blogImg2': "url('src/assets/img/blog2.png')",
        'blogImg3': "url('src/assets/img/blog3.png')",
       
      },

      fontFamily: {
        'pops': ['Poppins', 'sans-serifsystem-ui'],
      }
    },
  },
  plugins: [],
}