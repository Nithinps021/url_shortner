import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: '#ff6ac1',
        neonGreen: '#39ff14',
        neonBlue: '#00bfff',
        navyBlue:"#003060",
        blue:"#055C9D",
        blueGrotto:"#0E86D4",
        babyBlue:"#68BBE3"

      },
    },
  },
  plugins: [],
}
export default withMT(config)
