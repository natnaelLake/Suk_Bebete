import React from "react";
import ReactDOM from "react-dom/client";
import App from "./apps";

import { store } from "./store/configureStore";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
