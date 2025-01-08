/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  corePlugins: {
    preflight: true,
  },
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      inter: ['var(--font-nunito)'],
      vazirmatn: ['var(--font-vazirmatn)'],
    },
    screens: {
      '2xsm': '375px',
      xsm: '425px',
      '3xl': '2000px',
      ...defaultTheme.screens,
    },
    extend: {
      width: {
        '240': '240px',
        '192': '192px',
      },
      height: {
        '50': '50px',
        '81': '81px',
      },
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        'custom-navbar': 'rgba(72, 128, 255, 1)',
      },
      spacing: {
        '24': '24px',
      },
      textColor: {
        'custom-black': 'rgba(32, 34, 36, 1)'
      }
    },
  },
  plugins: [],
}

