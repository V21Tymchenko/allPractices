import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { AuthContextProvider } from "./context/context";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { persistor } from "./redux/store";
import App from "./App";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </PersistGate>
    </AuthContextProvider>
  </React.StrictMode>
);
