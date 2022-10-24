import { StyledInput } from "./input";
import { StyledLabel } from "../label/index";

import React, { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type: string;
    name: string;
    textLabel: string;
    register: UseFormRegister<FieldValues>;
    placeholder: string;
    error: string;
}

const Input = ({
    id,
    type,
    name,
    textLabel,
    register,
    placeholder,
    error,
}: IInputProps) => {
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
