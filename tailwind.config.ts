import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customPurple: '#BFB7DE',
        customBlack: '#101012',
        customGray: '#ECECEC',
      },
      width: {
        360: '360px',
      },
      borderRadius: {
        radius20: '20px',
        radius30: '30px',
        radius40: '40px',
      }
    },
  },
  plugins: [],
};
export default config;
