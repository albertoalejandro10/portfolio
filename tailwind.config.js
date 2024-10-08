export const content = [
  "storyblok/**/*.{vue,js}",
  "components/**/*.{vue,js}",
  "pages/**/*.vue",
]
export const theme = {
  screens: {
    xs: "375px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  extend: {
    backgroundImage: {
      'grainy-pattern': "url('~/assets/images/grainy-pattern.png')",
      topbar:
        "linear-gradient(to right, rgb(87, 239, 70), rgb(38, 220, 106), rgb(60, 251, 222))",
    },
    colors: {
      p_text: "#b1b1b1",
      head_text: "#eaeaea",
      navbar_back: "rgba(17, 17, 17, 0.8)",
      item_back: "#161616",
      item_hover_back: "#1d1d1d",
      action_back: "#242424",
      action_border: "#363636",
      border_sm: "rgba(54, 54, 54, 0.6)",
      action_text: "#d9d9d9",
      btn_back: "#2e2e2e",
      btn_text: "#f6f6f6",
      link_text_hover: "rgb(87, 239, 70)",
      link_border_hover: "rgb(99,102,241, 0.4)",
      link_border: "#6c6c6c",
      link: "#d9d9d9",
      background: "#111111",
      selectionBack: "rgba(40,41,96)",
    },
    fontFamily: {
      logo: "Raleway",
      heading: "Raleway",
      copy: "Roboto",
    },
    animation: {
      border: "border 6s linear infinite",
      "text-gradient": "text 3s linear infinite reverse",
    },
    keyframes: {
      border: {
        to: { "--border-angle": "360deg" },
      },
      text: {
        to: {
          backgroundPosition: "200% center",
        },
      },
    },
  },
}
