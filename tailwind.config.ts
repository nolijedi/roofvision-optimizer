import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        roofing: {
          orange: "#F97316",
          "orange-dark": "#EA580C",
          charcoal: "#221F26",
          beige: "#FDE1D3",
          cream: "#FEF7CD",
          "off-white": "#F8F8F8",
        },
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'phone-pulse': {
          '0%': { transform: 'scale(1)', opacity: '0.2' },
          '25%': { transform: 'scale(0.8)', opacity: '0.3' },
          '50%': { transform: 'scale(1.6)', opacity: '0.1' },
          '75%': { transform: 'scale(0.8)', opacity: '0.3' },
          '100%': { transform: 'scale(1)', opacity: '0.2' },
        },
        'live-chat-pulse': { // Identical animation for live chat icon
          '0%': { transform: 'scale(1)', opacity: '0.2' },
          '25%': { transform: 'scale(0.8)', opacity: '0.3' },
          '50%': { transform: 'scale(1.6)', opacity: '0.1' },
          '75%': { transform: 'scale(0.8)', opacity: '0.3' },
          '100%': { transform: 'scale(1)', opacity: '0.2' },
        },
        "spin-slow": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'phone-pulse': 'phone-pulse 3s ease-in-out infinite',
        'live-chat-pulse': 'live-chat-pulse 3s ease-in-out infinite', // Applying the animation
        "spin-slow": "spin-slow 12s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
