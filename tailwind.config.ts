import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xsm: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        roboto: ['"roboto", ...defaultTheme.fontFamily.roboto'],
      },
      dropShadow: {
        "glow-red": "5px 5px 10px 2px rgba(255, 0, 0, 0.5)",
        "glow-blue": "0 0 10px 2px rgba(0, 0, 255, 0.5)",
        "glow-yellow": "0 0 10px 2px rgba(255, 255, 0, 0.5)",
        "glow-bluesky": "0 0 10px 2px rgba(0, 191, 255, 0.5)",
        "glow-violet": "0 0 10px 2px rgba(238, 130, 238, 0.5)",
        "glow-pink": "0 0 10px 2px rgba(255, 105, 180, 0.5)",
        "glow-purple": "0 0 10px 2px rgba(128, 0, 128, 0.5)",
        "glow-white": "0 0 10px 2px rgba(255, 255, 255, 0.5)",
        "glow-green": "0 0 10px 2px rgba(0, 128, 0, 0.5)",
        "glow-black": "0 0 10px 2px rgba(0, 0, 0, 0.5)",
        "glow-orange": "0 0 10px 2px rgba(255, 165, 0, 0.5)",
        "glow-lightblue": "0 0 10px 2px rgba(173, 216, 230, 0.5)",
      },
      textShadow: {
        sm: "1px 1px 2px var(--tw-shadow-color)",
        DEFAULT: "2px 2px 2px var(--tw-shadow-color)",
        md: "4px 4px 5px var(--tw-shadow-color)",
        lg: "5px 5px 8px var(--tw-shadow-color)",
        xl: "12px 12px 24px var(--tw-shadow-color)",
        "2xl": "20px 20px 40px var(--tw-shadow-color)",
      },
      textBlur: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        "sm-blur": "0 1px 2px 1px var(--tw-shadow-color)",
        "md-blur": "0 4px 8px 2px var(--tw-shadow-color)",
        "lg-blur": "0 8px 16px 2px var(--tw-shadow-color)",
        "xl-blur": "0 12px 24px 4px var(--tw-shadow-color)",
        "2xl-blur": "0 20px 40px 6px var(--tw-shadow-color)",
      },
      maskImage: {
        custom: "polygon(0 0, 100% 0, 92% 89%, 51% 100%, 8% 90%)",
      },
      transitionProperty: {
        "box-shadow": "box-shadow",
      },
      colors: {
        primario: "#163134",
        secundario: "#88771b",
      },
      backgroundImage: {
        fondo: "url('../public/assets/1x/2x/fondo.png')",
        bggrey: "url('../public/assets/img/greybg.webp')",
        blackshort: "url('../public/assets/img/blackshort.png')",
        darkbg: "url('../public/assets/img/darkbg.webp')",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }: any) => {
      matchUtilities(
        {
          "text-shadow": (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};

export default config;
