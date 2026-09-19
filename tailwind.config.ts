import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-soft": "rgb(var(--color-surface-2) / <alpha-value>)",
        ink: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-text-muted) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-soft": "rgb(var(--color-primary-soft) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        focus: "rgb(var(--color-focus) / <alpha-value>)",
      },
      boxShadow: {
        device: "0 28px 80px rgba(14, 26, 43, 0.16), 0 8px 24px rgba(14, 26, 43, 0.08)",
      },
      borderRadius: {
        control: "14px",
        card: "20px",
        sheet: "28px",
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.25rem" }],
      },
    },
  },
  plugins: [],
};

export default config;
