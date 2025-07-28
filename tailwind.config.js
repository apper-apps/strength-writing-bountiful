/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#0046FF',
          600: '#003dcc',
          700: '#003399',
          800: '#002966',
          900: '#001f33'
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#FFC82C',
          600: '#d9aa24',
          700: '#b38c1d',
          800: '#8c6e16',
          900: '#66500f'
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6'
      },
      fontFamily: {
        sans: ['Pretendard', 'Spoqa Han Sans Neo', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4rem', { lineHeight: '1.1', fontWeight: '800' }],
        'display-md': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-sm': ['2.25rem', { lineHeight: '1.25', fontWeight: '600' }],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}