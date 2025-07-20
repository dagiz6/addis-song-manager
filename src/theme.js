export const theme = {
  colors: {
    primary: "#3f51b5",
    secondary: "#f50057",
    text: {
      light: "#333",
      dark: "#f5f5f5",
    },
    background: {
      light: "#ffffff",
      dark: "#121212",
    },
    pagination: {
      active: "#3f51b5",
      inactive: "#e0e0e0",
    },
    sortButtons: {
      active: "#3f51b5",
      inactive: "#f0f0f0",
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  space: [0, 4, 8, 16, 32, 64],
  breakpoints: ["576px", "768px", "992px", "1200px"],
};

// Aliases for responsive design
theme.breakpoints.sm = theme.breakpoints[0];
theme.breakpoints.md = theme.breakpoints[1];
theme.breakpoints.lg = theme.breakpoints[2];
theme.breakpoints.xl = theme.breakpoints[3];
