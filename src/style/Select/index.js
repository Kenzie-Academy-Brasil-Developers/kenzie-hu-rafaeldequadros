import styled from "styled-components";

export const StyledSelect = styled.select`
    width: 100%;
    height: 38px;

    background-color: var(--color-grey-2);
    color: #868e96;
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
    @media (min-width: 700px) {
        height: 48px;
    }
`;
