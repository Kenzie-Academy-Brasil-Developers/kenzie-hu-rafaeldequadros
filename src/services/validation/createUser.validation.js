import * as yup from "yup";

export const schemaCreateUser = yup.object().shape({
    name: yup
        .string()
        .required("Nome obrigatório")
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula"),
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup
        .string()
        .required("Senha obrigatório")
        .matches(/(\d)/, "Deve conter ao menos 1 número")
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula"),
    confirmPassword: yup
        .string()
        .required("Confirmação obrigatória")
        .oneOf([yup.ref("password")], "Senha diferente"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup
        .string()
        .required("Contato é obrigatório")
        .matches(/^[0-9]+$/, "Deve conter apenas numeros"),
});
export const schemaUserLogin = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatório"),
});
export const schemaCreateTech = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
});
