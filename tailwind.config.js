/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#090d16',
          panel: '#111726',
          border: '#1f293d',
          cyan: '#00f0ff',
          orange: '#ff4d15',
          'orange-glow': 'rgba(255, 77, 21, 0.15)',
          'cyan-glow': 'rgba(0, 240, 255, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(31, 41, 61, 0.3) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
