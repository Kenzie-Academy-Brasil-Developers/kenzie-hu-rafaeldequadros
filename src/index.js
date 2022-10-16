import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyles } from "./components/global";

import { AuthProvider } from "./contexts/AuthContext";
import { ModalProvider } from "./contexts/ModalContext";
import { DashProvider } from "./contexts/DashContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <GlobalStyles />
            <AuthProvider>
                <DashProvider>
                    <ModalProvider>
                        <App />
                    </ModalProvider>
                </DashProvider>
            </AuthProvider>
        </React.StrictMode>
    </BrowserRouter>
);
