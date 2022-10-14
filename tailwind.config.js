module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#ececec',
        surface: '#fff',
        patient: '#d24200',
        disease: '#f2b84b',
        assessment: '#f2913d',
        genomics: '#26c485',
        treatment: '#04b2d9',
        outcome: '#8a45d9',
        link: '#2f80ed',
        'link-icon-background': '#c8d7eb',
        'link-tinted': '#e3e6eb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        widgit: '5px',
        sidebarButton: '15px',
      },
      boxShadow: {
        widgit: '1px 1px 9px rgba(0, 0, 0, 0.07)',
        sidebarButton: '0px 5px 26px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
