export const buttonStyles = {
  variants: {
    primary: (props) => ({
      bg: "primary",
      color: "black",
      borderRadius: "3px",

      height: "38px",
      fontSize: "16px",
      fontWeight: "600",
      _hover: {
        bg: "rgba(23, 24, 24, 1)",
        color: "white",
      },
    }),
    secondary: (props) => ({
      color: "black",
      borderRadius: "3px",

      height: "38px",
      fontSize: "16px",
      fontWeight: "300",
      border: "1px",
      borderColor: "#2A2A2A",
      border: "1px",
      _hover: {
        bg: "primary",
        color: "black",
        border: "0px",
      },
    }),
  },
};
