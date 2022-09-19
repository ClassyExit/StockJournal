module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111827",
        bg_light: "#1F2937",
        headline: "#fffffe",
        paragraph: "#94a1b2",
        btn_bg: "#6419E6",
        btn_border: "#4C1D95",
        btn_highlight: "#4C1D95",
        success: "#16A34A",
        info: "#0284C7",
        danger: "#DC2626",
        warning: "#EAB308",
        win: "#22C55E",
        loss: "#EF4444",
        neutral: "#D4D4D8",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6419E6",
          secondary: "#D926A9",
          accent: "#1FB2A6",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
