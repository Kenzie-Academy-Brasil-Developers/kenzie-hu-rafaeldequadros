import { StyledInput } from "../../style/Input";
import { StyledLabel } from "../../style/Label";

const Input = ({ id, type, name, textLabel, register, placeholder, error }) => {
    return (
        <div>
            {error && <span>{error}</span>}
            <StyledLabel htmlFor={id}>{textLabel}</StyledLabel>

            <StyledInput
                type={type ? type : "text"}
                {...register(name)}
                id={id}
                placeholder={placeholder}
            />
        </div>
    );
};
export default Input;