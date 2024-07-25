import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
        'green-shade': 'radial-gradient(circle, rgba(145,196,166,1) 0%, rgba(33,129,67,1) 25%, rgba(13,49,26,1) 100%)',
        'blue-shade': 'radial-gradient(circle, rgba(88,112,153,1) 0%, rgba(31,57,103,1) 25%, rgba(19,37,69,1) 100%)',
        'purple-shade': 'radial-gradient(circle, rgba(62,66,125,1) 0%, rgba(34,37,83,1) 25%, rgba(16,18,47,1) 100%)',
        'dark-green-shade': 'radial-gradient(circle, rgba(78,145,153,1) 0%, rgba(28,109,119,1) 25%, rgba(5,30,35,1) 100%)',
        'violet-shade': 'radial-gradient(circle, rgba(81,81,140,1) 0%, rgba(41,41,120,1) 25%, rgba(15,23,70,1) 100%)',
        'dark-blue-shade': 'radial-gradient(circle, rgba(49,96,147,1) 0%, rgba(21,56,93,1) 25%, rgba(6,9,17,1) 100%)',
      },
    },
  },
  plugins: [
    addVariablesForColors ,
  ],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

