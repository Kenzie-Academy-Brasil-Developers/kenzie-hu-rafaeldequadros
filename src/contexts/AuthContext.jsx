import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    function verify() {
        api.get("/profile", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Kenzie-Token")}`,
            },
        })
            .then((res) => {
                setAuth(true);
            })
            .catch((res) => navigate("/login"));
    }
    function authLogin() {
        api.get("/profile", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Kenzie-Token")}`,
            },
        }).then((res) => {
            setAuth(true);
            navigate("/dashboard");
        });
    }
    return (
        <AuthContext.Provider
            value={{ user, setUser, verify, auth, authLogin }}
        >
            {children}
        </AuthContext.Provider>
    );
};
