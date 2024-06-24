const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".crosshair-cursor": {
          "cursor": "crosshair",
        },
        ".grab-cursor": {
          "cursor": "grab",
        },
        ".active-text": {
          "color": "white",
          "font-weight": "bold",
          "text-decoration": "underline",
        },
        ".active-icon": {
          "color": "white",
        },
        ".video-center": {
          "position": "relative",
          "left": "50%",
          "transform": "translateX(-50%)",
        },
      });
    }),
  ],
};
