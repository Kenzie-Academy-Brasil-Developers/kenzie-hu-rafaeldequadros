import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import StyledForm from "../../style/Form";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUserLogin } from "../../validation/createUser.validation";
import StyledBoxLogin from "../../style/BoxLogin";
import { StyledBtnGrey, StyledBtnsPink } from "../../style/Buttons";
import instance from "../../components/Axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const { id } = useParams();
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
        instance
            .post("/sessions", data)
            .then((res) => {
                console.log(res);
                localStorage.setItem("Kenzie-Token", res.data.token);
                localStorage.setItem("Kenzie-User-id", res.data.user.id);
                toast.success("Login realizado com sucesso");
            })
            .catch((res) => toast.error("Email ou senha incorretos"));
    };

    const handleClick = () => navigate("/cadastro");

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
                    <StyledBtnGrey onClick={handleClick}>
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
