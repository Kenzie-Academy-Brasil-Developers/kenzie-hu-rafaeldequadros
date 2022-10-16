import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUserLogin } from "../../services/validation/createUser.validation";

import StyledBoxLogin from "./boxLogin";
import StyledForm from "../../components/form";
import { StyledBtnGrey, StyledBtnsPink } from "../../components/buttons";
import Input from "../../components/input";

import Logo from "../../assets/Logo.png";
import { ToastContainer, toast } from "react-toastify";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import api from "../../services/axios";

const Login = () => {
    const navigate = useNavigate();
    const { setUser, verify, authLogin } = useContext(AuthContext);

    useEffect(() => {
        authLogin();
    }, []);
    const {
        handleSubmit,
        register,
        formState: {
            errors: { email, password },
        },
    } = useForm({
        resolver: yupResolver(schemaUserLogin),
    });

    const onSubmit = (data) => {
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

    const handleClick = (destination) =>
        destination ? navigate("/cadastro") : navigate("/dashboard");

    return (
        <>
            <section className="logo" style={{ justifyContent: "center" }}>
                <img src={Logo} alt="" />
            </section>

            <StyledBoxLogin>
                <h2>Login</h2>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
                    <StyledBtnsPink type="submit">Login</StyledBtnsPink>
                    <p>Ainda não possui conta?</p>
                    <StyledBtnGrey
                        type="button"
                        onClick={() => handleClick(true)}
                    >
                        Cadastrar-se
                    </StyledBtnGrey>
                </StyledForm>
            </StyledBoxLogin>
            <ToastContainer
                toastStyle={{
                    backgroundColor: "var(--color-grey-2)",
                    color: "var(--color-grey-0)",
                }}
            />
        </>
    );
};
export default Login;
