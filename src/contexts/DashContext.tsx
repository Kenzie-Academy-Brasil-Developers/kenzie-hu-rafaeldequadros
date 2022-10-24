import { createContext, useContext } from "react";
import api from "../services/axios";
import { AuthContext } from "./AuthContext";

import { ReactNode } from "react";

export const DashContext = createContext<IDashFunctions>({} as IDashFunctions);

interface IDashProvider {
    children: ReactNode;
}
interface IDashFunctions {
    requestTechs: () => void;
    deleteTech: (id: string) => void;
}

export const DashProvider = ({ children }: IDashProvider) => {
    const { setUser, verify } = useContext(AuthContext);

    async function requestTechs() {
        if (localStorage.getItem("Kenzie-User-id")) {
            const res = await api.get(
                `/users/${localStorage.getItem("Kenzie-User-id")}`
            );
            return setUser(res.data);
        } else {
            verify();
        }
    }

    function deleteTech(id: string) {
        api.delete(`/users/techs/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Kenzie-Token")}`,
            },
        })
            .then((res) => requestTechs())
            .catch((res) => console.log(res));
    }

    return (
        <DashContext.Provider value={{ deleteTech, requestTechs }}>
            {children}
        </DashContext.Provider>
    );
};
