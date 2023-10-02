import { extendTheme } from "@chakra-ui/react";
import { buttonStyles as Button } from "./Components/buttonStyles";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

const breakpoints = {
  ss: "20em",
  sm: "30em",
  sl: "36em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

export const myNewTheme = extendTheme({
  colors: {
    primary: "rgba(255, 214, 0, 1)",
    secondary: "rgba(255, 255, 255, 1)",
    background: "#f4f4f4",
  },
  components: {
    Button,
  },

  breakpoints: { ...breakpoints },
  fonts: {
    heading: `Roboto`,
    body: `Roboto`,
  },
});
