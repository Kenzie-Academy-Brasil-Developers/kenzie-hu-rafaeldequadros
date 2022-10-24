import { createContext, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/axios";
import { AuthContext } from "./AuthContext";

import { SubmitHandler } from "react-hook-form";
import { IUserLogin } from "../pages/login";
import { IUserCadaster } from "../pages/cadastro";

export const UserContext = createContext<IUserContext>({} as IUserContext);

interface IUserContext {
    onSubmitCadaster: (data: IUserCadaster) => Promise<void>;
    onSubmitLogin: (data: IUserLogin) => Promise<void>;
    handleClick: (destination: boolean) => void;
}

interface IUserProvider {
    children: ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmitCadaster: SubmitHandler<IUserCadaster> = async (data) => {
        delete data.confirmPassword;

        api.post("/users", data)
            .then((res) => {
                toast.success("Cadastro realizado com sucesso!");
                navigate("/login");
            })
            .catch((res) => toast.error("Cadastro não realizado"));
    };

    const handleClick = (destination: boolean) =>
        destination ? navigate("/cadastro") : navigate("/dashboard");

    const onSubmitLogin: SubmitHandler<IUserLogin> = async (data) => {
        api.post("/sessions", data)
            .then((res) => {
                localStorage.setItem("Kenzie-Token", res.data.token);
                localStorage.setItem("Kenzie-User-id", res.data.user.id);
                toast.success("Login realizado com sucesso");
                setUser(res.data.user);
                handleClick(false);
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
