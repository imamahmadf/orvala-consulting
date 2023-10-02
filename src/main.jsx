import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import store from "./Redux/Reducers";
import { ChakraProvider } from "@chakra-ui/react";
import { myNewTheme } from "./Style/them";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider resetCSS theme={myNewTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);
