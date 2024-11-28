import animate from "tailwindcss-animate"

export default {
	darkMode: ["class"],
	safelist: ["dark"],
	prefix: "",
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],

	theme: {
		fontFamily: {
			'sans': ['"Source Sans 3"', 'ui-sans-serif', 'system-ui',],
			'serif': ['Prata', 'ui-serif', 'Georgia',],
			'headings': ['"Source Serif 4"', 'ui-serif', 'Georgia',],
			'mono': ['ui-monospace', 'SFMono-Regular',],
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",

			},
		},
		extend: {
			screens: {
				"xs": "300px",
			},
			backgroundImage: {
				"background1": "url('/background1.jpeg')",
				"background2": "url('/background2.jpeg')",
				"background3": "url('/background3.jpeg')",
				"background4": "url('/background4.jpeg')",
				"background5": "url('/background5.jpeg')",
				"background6": "url('/nnnoise.svg')",
				"background7": "url('/background7.jpeg')",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				xl: "calc(var(--radius) + 4px)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
			},
			animation: {
			},
		},
	},
	plugins: [animate],
}
