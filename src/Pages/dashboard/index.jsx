import Logo from "../../assets/Logo.png";
import { StyledBtnBlack } from "../../components/buttons";
import { StyledBoxDash } from "./boxDash/style";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext, useEffect } from "react";

import ListTech from "../../components/list";
import Modal from "../../components/modal";
import api from "../../services/axios";
import { DashContext } from "../../contexts/DashContext";

const Dashboard = () => {
    const { user, verify, auth } = useContext(AuthContext);
    const { openModal, handleModal } = useContext(ModalContext);
    const { requestTechs } = useContext(DashContext);

    function handleClick() {
        localStorage.removeItem("Kenzie-Token");
        localStorage.removeItem("Kenzie-User-id");
        verify();
    }

    useEffect(() => {
        verify();
    }, []);
    useEffect(() => {
        requestTechs();
    }, []);

    return (
        <StyledBoxDash>
            <header className="header">
                <div>
                    <img src={Logo} alt="" />
                    <StyledBtnBlack onClick={handleClick}>Sair</StyledBtnBlack>
                </div>
            </header>
            <section className="user">
                <div>
                    <h1>Olá, {user.name}</h1>
                    <span>{user.course_module}</span>
                </div>
            </section>
            <section className="technology">
                <div className="createTechnology">
                    <h2>Tecnologias</h2>
                    <StyledBtnBlack
                        onClick={handleModal}
                        style={{ fontSize: "25px" }}
                    >
                        +
                    </StyledBtnBlack>
                </div>
                <ListTech />
            </section>
            {openModal && <Modal />}
        </StyledBoxDash>
    );
};
export default Dashboard;
