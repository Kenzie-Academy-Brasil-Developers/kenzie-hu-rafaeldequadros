import { StyledLabel } from "../label";
import { StyledSelect } from "./select";

const Select = ({ id, name, register, children }) => {
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
