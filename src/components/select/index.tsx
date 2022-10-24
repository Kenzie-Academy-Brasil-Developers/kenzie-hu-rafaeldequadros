import { StyledLabel } from "../label";
import { StyledSelect } from "./select";
import { ReactNode } from "react";

interface ISelect {
    id: string;
    name: string;
    register: any;
    children: ReactNode;
}

const Select = ({ id, name, register, children }: ISelect) => {
    return (
        <div>
            <StyledLabel htmlFor={id}>Selecionar módulo</StyledLabel>
            <StyledSelect id={id} {...register(name)}>
                {children}
            </StyledSelect>
        </div>
    );
};
export default Select;
