import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/axios";

import { ReactNode } from "react";

interface IAuthContext {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    verify: () => void;
    auth: boolean;
    authLogin: () => void;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    techs: ITech[];
    works: Array<[]>;
    created_at: Date;
    updated_at: Date;
    avatar_url: string | null;
}
interface ITech {
    id: string;
    title: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthChildren {
    children: ReactNode;
}

export const AuthProvider = ({ children }: IAuthChildren) => {
    const [user, setUser] = useState<IUser>({} as IUser);
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    function verify() {
        api.get("/profile", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Kenzie-Token")}`,
            },
        })
            .then(() => {
                setAuth(true);
            })
            .catch(() => navigate("/login"));
    }
    function authLogin() {
        api.get("/profile", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Kenzie-Token")}`,
            },
        }).then(() => {
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
