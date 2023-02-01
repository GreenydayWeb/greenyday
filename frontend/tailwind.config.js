/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/react-carousel-minimal/dist/components/Carousel/**/*.js",
    "./node_modules/mantine/carouse/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: { custom: ["ofelia - text"] },
    },

    plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin")],
  },
};
