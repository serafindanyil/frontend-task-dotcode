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
				background: "var(--background)",
				"background-secondary": "var(--background-secondary)",
				"background-tertiary": "var(--background-tertiary)",
				foreground: "var(--foreground)",
				"glass-primary": "var(--glass-primary)",
				"glass-secondary": "var(--glass-secondary)",
				"glass-border": "var(--glass-border)",
				card: "var(--card)",
				"card-foreground": "var(--card-foreground)",
				"card-border": "var(--card-border)",
				primary: "var(--primary)",
				"primary-muted": "var(--primary-muted)",
				"primary-foreground": "var(--primary-foreground)",
				secondary: "var(--secondary)",
				"secondary-foreground": "var(--secondary-foreground)",
				muted: "var(--muted)",
				"muted-foreground": "var(--muted-foreground)",
				accent: "var(--accent)",
				"accent-muted": "var(--accent-muted)",
				"accent-foreground": "var(--accent-foreground)",
				destructive: "var(--destructive)",
				"destructive-foreground": "var(--destructive-foreground)",
				success: "var(--success)",
				warning: "var(--warning)",
				border: "var(--border)",
				"border-muted": "var(--border-muted)",
				input: "var(--input)",
				ring: "var(--ring)",
				"workspace-grid": "var(--workspace-grid)",
				"workspace-block": "var(--workspace-block)",
				"workspace-block-active": "var(--workspace-block-active)",
				"btc-positive": "var(--btc-positive)",
				"btc-negative": "var(--btc-negative)",
				"btc-neutral": "var(--btc-neutral)",
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
