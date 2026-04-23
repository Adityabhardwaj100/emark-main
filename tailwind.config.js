/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
 "./app/**/*.{js,ts,jsx,tsx,mdx}",
 "./components/**/*.{js,ts,jsx,tsx,mdx}",
 "./lib/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
 extend: {
 fontFamily: {
 syne: ['var(--font-syne)', 'sans-serif'],
 dm: ['var(--font-dm)', 'sans-serif'],
 },
 colors: {
 lime: {
 DEFAULT: '#c8f135',
 },
 dark: {
 DEFAULT: '#000000',
 card: '#000000',
 },
 },
 animation: {
 'marquee': 'marquee 30s linear infinite',
 },
 keyframes: {
 marquee: {
 '0%': { transform: 'translateX(0%)' },
 '100%': { transform: 'translateX(-50%)' },
 }
 }
 },
 },
 plugins: [],
};
