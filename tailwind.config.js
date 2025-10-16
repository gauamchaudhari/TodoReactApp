/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
     // Scans all JS, JSX, TS, TSX files inside the src directory
    // If you have a file like index.html in the root or public folder, you might also include:
    // "./index.html", 
  ],
  theme: {
    extend: {
      // You can extend the default theme here, for example, by adding custom colors, fonts, or breakpoints.
      // Example:
      // colors: {
      //   'primary': '#1da1f2',
      // },
    },
  },
  plugins: [
    // Add official or custom plugins here
    // Example: require('@tailwindcss/forms'),
  ],
  darkMode: 'class', // or 'media'
}