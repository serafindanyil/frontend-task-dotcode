/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "40rem", // 640px
			md: "48rem", // 768px
			lg: "64rem", // 1024px
			xl: "80rem", // 1280px
			"2xl": "96rem", // 1536px
		},
		container: {
			center: true, // Додає mx-auto
		},
		extend: {
			colors: {
				background: "hsl(var(--background) / <alpha-value>)",
				"background-secondary":
					"hsl(var(--background-secondary) / <alpha-value>)",
				"background-tertiary":
					"hsl(var(--background-tertiary) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",

				"glass-primary": "hsl(var(--glass-primary) / <alpha-value>)",
				"glass-secondary": "hsl(var(--glass-secondary) / <alpha-value>)",
				"glass-border": "hsl(var(--glass-border) / <alpha-value>)",

				card: "hsl(var(--card) / <alpha-value>)",
				"card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
				"card-border": "hsl(var(--card-border) / <alpha-value>)",

				primary: "hsl(var(--primary) / <alpha-value>)",
				"primary-muted": "hsl(var(--primary-muted) / <alpha-value>)",
				"primary-hover": "hsl(var(--primary-hover) / <alpha-value>)",
				"primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",

				secondary: "hsl(var(--secondary) / <alpha-value>)",
				"secondary-foreground":
					"hsl(var(--secondary-foreground) / <alpha-value>)",

				muted: "hsl(var(--muted) / <alpha-value>)",
				"muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",

				accent: "hsl(var(--accent) / <alpha-value>)",
				"accent-muted": "hsl(var(--accent-muted) / <alpha-value>)",
				"accent-foreground": "hsl(var(--accent-foreground) / <alpha-value>)",

				destructive: "hsl(var(--destructive) / <alpha-value>)",
				"destructive-foreground":
					"hsl(var(--destructive-foreground) / <alpha-value>)",

				success: "hsl(var(--success) / <alpha-value>)",
				warning: "hsl(var(--warning) / <alpha-value>)",

				border: "hsl(var(--border) / <alpha-value>)",
				"border-muted": "hsl(var(--border-muted) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",

				"workspace-grid": "hsl(var(--workspace-grid) / <alpha-value>)",
				"workspace-block": "hsl(var(--workspace-block) / <alpha-value>)",
				"workspace-block-active":
					"hsl(var(--workspace-block-active) / <alpha-value>)",

				"btc-positive": "hsl(var(--btc-positive) / <alpha-value>)",
				"btc-negative": "hsl(var(--btc-negative) / <alpha-value>)",
				"btc-neutral": "hsl(var(--btc-neutral) / <alpha-value>)",
			},

			borderRadius: {
				DEFAULT: "var(--radius)",
				lg: "var(--radius-lg)",
			},

			borderWidth: {
				DEFAULT: "1px",
			},

			spacing: {
				unit: "var(--spacing-unit)",
			},
		},
	},

	plugins: [],
};
