import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/axios";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmitCadaster = (data) => {
        delete data.confirmPassword;

        api.post("/users", data)
            .then((res) => {
                toast.success("Cadastro realizado com sucesso!");
                navigate("/login");
            })
            .catch((res) => toast.error("Cadastro não realizado"));
    };

    const handleClick = (destination) =>
        destination ? navigate("/cadastro") : navigate("/dashboard");

    const onSubmitLogin = (data) => {
        api.post("/sessions", data)
            .then((res) => {
                localStorage.setItem("Kenzie-Token", res.data.token);
                localStorage.setItem("Kenzie-User-id", res.data.user.id);
                toast.success("Login realizado com sucesso");
                setUser(res.data.user);
                handleClick();
            })
            .catch((res) => toast.error("Email ou senha incorretos"));
    };

    return (
        <UserContext.Provider
            value={{ onSubmitCadaster, onSubmitLogin, handleClick }}
        >
            {children}
        </UserContext.Provider>
    );
};
