// postcss.config.js
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        primary: '#FFE4E1',
        secondary: '#E6EFF6',
        neutral: '#FFFAF0',
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [tailwindcss(), autoprefixer()],
};
