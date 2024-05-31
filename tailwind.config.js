const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {

	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				title: "Inter var, sans-serif",
				sans: ["Inter var", 'sans-serif']
			},
			colors: {
				boba: "#ba7472",
				"boba-light": "#d6ad8d",
			},
			scale: {
				flip: "-1",
			},
		},
	},
};
