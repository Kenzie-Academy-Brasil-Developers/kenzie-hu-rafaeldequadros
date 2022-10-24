import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    height: 38px;

    background-color: var(--color-grey-2);
    color: var(--color-grey-0);
    outline-color: var(--color-grey-0);
    border: none;
    border-radius: 4px;

    display: flex;
    justify-content: center;

    text-align: center;

    font-size: var(--title-size-1);
    font-weight: 400;
    line-height: 21px;

    :focus {
        outline: 1px solid;
    }
    ::placeholder {
        font-size: var(--title-size-1);
        font-weight: 400;
        line-height: 27px;

        color: #868e96;
    }
    @media (min-width: 700px) {
        height: 48px;
    }
`;

export default StyledInput;
