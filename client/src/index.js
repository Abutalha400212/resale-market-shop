import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Context/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
