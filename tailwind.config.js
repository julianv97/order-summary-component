module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "200px",
      // => @media (min-width: 640px) { ... }

      md: "375px",
      // => @media (min-width: 768px) { ... }

      lg: "850px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      "red-hat-display": "Red Hat Display",
      
    },
    extend: {
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)",
      },
      backgroundImage: (theme) => ({
        "mobile-pattern": "url('./assets/pattern-background-mobile.svg')",
        "desktop-pattern": "url('./assets/pattern-background-desktop.svg')",
        "hero-image": "url('./assets/illustration-hero.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
