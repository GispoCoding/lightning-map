import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  transitions: {
    // So `transition: none;` gets applied everywhere
    create: () => "none",
  },
  palette: {
    mode: "dark",
  },
});

export default darkTheme;
