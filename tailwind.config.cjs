/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ["./index.html", "./src/**/*.{html,js,ts}"],
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwindcss-text-fill-stroke'), // no options to configure
	],
};
