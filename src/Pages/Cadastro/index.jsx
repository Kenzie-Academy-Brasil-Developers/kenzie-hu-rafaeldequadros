import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateUser } from "../../services/validation/createUser.validation";
import instance from "../../services/axios";

import Logo from "../../assets/Logo.png";
import Input from "../../components/input";
import Select from "../../components/select";

import { StyledBtnBlack, StyledBtnsPink } from "../../components/buttons";
import StyledBox from "./boxCadastro";
import StyledForm from "../../components/form";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cadastro = () => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/login");

    const onSubmit = (data) => {
        delete data.confirmPassword;

        instance
            .post("/users", data)
            .then((res) => toast.success("Cadastro realizado com sucesso!"))
            .catch((res) => toast.error("Cadastro não realizado"));
    };

    const {
        handleSubmit,
        register,
        formState: {
            errors: { name, email, password, confirmPassword, bio, contact },
        },
    } = useForm({
        resolver: yupResolver(schemaCreateUser),
    });

    return (
        <>
            <section className="logo">
                <img src={Logo} alt="" />
                <StyledBtnBlack onClick={handleClick}>Voltar</StyledBtnBlack>
            </section>
            <StyledBox>
                <div className="create">
                    <h2>Criar sua conta</h2>
                    <p>Rapido e grátis, vamos nessa</p>
                </div>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        id={"name"}
                        name={"name"}
                        textLabel={"Name"}
                        register={register}
                        error={name?.message}
                        placeholder={"Digite aqui seu nome"}
                    />
                    <Input
                        id={"email"}
                        name={"email"}
                        textLabel={"E-mail"}
                        register={register}
                        error={email?.message}
                        placeholder={"Digite aqui seu email"}
                    />
                    <Input
                        type={"password"}
                        id={"password"}
                        name={"password"}
                        textLabel={"Senha"}
                        register={register}
                        error={password?.message}
                        placeholder={"Digite aqui sua senha"}
                    />
                    <Input
                        type={"password"}
                        id={"confirmPassword"}
                        name={"confirmPassword"}
                        textLabel={"Confirmar senha"}
                        register={register}
                        error={confirmPassword?.message}
                        placeholder={"Digite novamente sua senha"}
                    />
                    <Input
                        id={"bio"}
                        name={"bio"}
                        textLabel={"Bio"}
                        register={register}
                        error={bio?.message}
                        placeholder={"Fale sobre você"}
                    />
                    <Input
                        id={"contact"}
                        name={"contact"}
                        textLabel={"Contato"}
                        register={register}
                        error={contact?.message}
                        placeholder={"Opção de contato"}
                    />

                    <Select
                        register={register}
                        name={"course_module"}
                        id={"course_module"}
                    >
                        <option value="1o Módulo (Frontend avançado)">
                            Primeiro modulo
                        </option>
                        <option value="2o Módulo (Frontend avançado)">
                            Segundo modulo
                        </option>
                        <option value="3o Módulo (Frontend avançado)">
                            Terceiro modulo
                        </option>
                        <option value="4o Módulo (Frontend avançado)">
                            Quatro modulo
                        </option>
                        <option value="5o Módulo (Frontend avançado)">
                            Quinto modulo
                        </option>
                        <option value="6o Módulo (Frontend avançado)">
                            Sexto modulo
                        </option>
                    </Select>
                    <StyledBtnsPink type="submit">Cadastrar</StyledBtnsPink>
                </StyledForm>
            </StyledBox>
            <ToastContainer
                toastStyle={{
                    backgroundColor: "var(--color-grey-2)",
                    color: "var(--color-grey-0)",
                }}
            />
        </>
    );
};
export default Cadastro;
