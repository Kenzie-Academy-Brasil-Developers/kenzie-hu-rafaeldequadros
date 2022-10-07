import styled from "styled-components";

export const StyledBtnsPink = styled.button`
    width: 100%;
    height: 38px;

    background-color: var(--color-primary);

    font-size: var(--title-size-1);
    font-weight: 500;

    border: none;
    border-radius: 4px;

    color: var(--color-grey-0);

    margin-top: 10px;

    cursor: pointer;

    :hover {
        background-color: var(--color-primary-focus);
    }
    @media (min-width: 700px) {
        height: 48px;
    }
`;

export const StyledBtnBlack = styled.a`
    padding: 8px;

    width: max-content;
    height: max-content;

    border-radius: 4px;

    color: var(--color-grey-0);
    background-color: var(--color-grey-3);

    cursor: pointer;

    :hover {
        background-color: var(--color-grey-2);
    }
`;

export const StyledBtnGrey = styled.button`
    width: 100%;
    height: 38px;

    background-color: var(--color-grey-1);

    font-size: var(--title-size-1);
    font-weight: 500;

    border: none;
    border-radius: 4px;

    color: var(--color-grey-0);

    margin-top: 10px;

    cursor: pointer;

    :hover {
        background-color: var(--color-grey-2);
    }
    @media (min-width: 700px) {
        height: 48px;
    }
`;
