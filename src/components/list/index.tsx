import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";

import Delete from "../../assets/Vector (4).png";
import { StyledList } from "./style";
import { DashContext } from "../../contexts/DashContext";

import React from "react";

const ListTech = () => {
    const { user, verify } = useContext(AuthContext);
    const { deleteTech, requestTechs } = useContext(DashContext);

    verify();
    useEffect(() => {
        requestTechs();
    }, []);

    return (
        <StyledList>
            {user.techs &&
                user.techs.map((tech) => (
                    <li key={tech.id}>
                        <h2>{tech.title}</h2>
                        <div>
                            <span>{tech.status}</span>
                            <button
                                onClick={() => deleteTech(tech.id)}
                                id={tech.id}
                            >
                                <img src={Delete} alt="delete" />
                            </button>
                        </div>
                    </li>
                ))}
        </StyledList>
    );
};

export default ListTech;
