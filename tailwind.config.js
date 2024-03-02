import {PersonalPresetConfig} from "./personal-preset.config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [PersonalPresetConfig],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

