import { StyledBtnsPink, StyledBtnBlack } from "../buttons";
import StyledInput from "../input/input";
import { StyledSelect } from "../select/select/index";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";
import { StyledBoxModal, StyledSectionModal } from "./style";
import { StyledLabel } from "../label";
import StyledForm from "../form";
import { schemaCreateTech } from "../../services/validation/createUser.validation";
import api from "../../services/axios";
import { DashContext } from "../../contexts/DashContext";

const Modal = () => {
    const { handleModal, setOpenModal } = useContext(ModalContext);
    const { requestTechs } = useContext(DashContext);
    const {
        handleSubmit,
        register,
        formState: {
            errors: { title },
        },
    } = useForm({
        resolver: yupResolver(schemaCreateTech),
    });

    const onSubmit = (data) => {
        api.post("/users/techs", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Kenzie-Token")}`,
            },
        }).then((res) => {
            setOpenModal(false);
            requestTechs();
        });
    };
    return (
        <StyledBoxModal>
            <StyledSectionModal>
                <div className="cadaster">
                    <h2>Cadastro Tecnologia</h2>
                    <StyledBtnBlack className="x" onClick={handleModal}>
                        X
                    </StyledBtnBlack>
                </div>
                <div className="inputs">
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        <div className="teste">
                            <StyledLabel htmlFor={"title"}>Nome</StyledLabel>
                            {title?.message && <span>{title?.message} </span>}
                        </div>
                        <StyledInput
                            {...register("title")}
                            id="title"
                            error={title?.message}
                            placeholder="Material UI"
                        />
                        <StyledLabel htmlFor={"status"}>
                            Selecionar status
                        </StyledLabel>
                        <StyledSelect {...register("status")} id="status">
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </StyledSelect>
                        <StyledBtnsPink type="submit">
                            Cadastrar Tecnologia
                        </StyledBtnsPink>
                    </StyledForm>
                </div>
            </StyledSectionModal>
        </StyledBoxModal>
    );
};
export default Modal;
