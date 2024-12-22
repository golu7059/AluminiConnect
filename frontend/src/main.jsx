import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/sore.js";

import ScrollRevealProvider from "./utils/ScrollRevealProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ScrollRevealProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ScrollRevealProvider>
    </Provider>
  </StrictMode>
);
