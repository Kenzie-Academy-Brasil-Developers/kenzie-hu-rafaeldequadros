import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyles } from "./style/Global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <GlobalStyles />
            <App />
        </React.StrictMode>
    </BrowserRouter>
);
