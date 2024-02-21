import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        developes: {
          primary: '#211C6A',
          'primary-dark': '#100e35',
          info: '#59B4C3',
          success: '#74E291',
          warning: '#EFF396',
          creme: '#FFF6E9',
        },
      },
      boxShadow: {
        'squared': '-4px 4px 0 0 #FFF6E9',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
