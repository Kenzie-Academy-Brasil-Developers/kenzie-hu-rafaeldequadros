import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyles } from "./components/global";

import { AuthProvider } from "./contexts/AuthContext";
import { ModalProvider } from "./contexts/ModalContext";
import { DashProvider } from "./contexts/DashContext";
import { UserProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <GlobalStyles />
            <AuthProvider>
                <DashProvider>
                    <UserProvider>
                        <ModalProvider>
                            <App />
                        </ModalProvider>
                    </UserProvider>
                </DashProvider>
            </AuthProvider>
        </React.StrictMode>
    </BrowserRouter>
);
