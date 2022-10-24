import styled from "styled-components";

export const StyledList = styled.ul`
    width: 90%;
    max-width: 700px;
    max-height: 330px;

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    gap: 10px;
    padding: 10px;

    border-radius: 8px;

    background-color: var(--color-grey-3);

    &::-webkit-scrollbar {
        background-color: var(--color-grey-3);
        border-radius: 20px;
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--color-grey-1);
        border-radius: 20px;
        width: 20px;
    }
    li {
        width: 90%;
        min-height: 40px;
        background-color: var(--color-grey-4);

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        border-radius: 4px;

        color: var(--color-grey-0);

        button {
            padding: 10px;

            background-color: transparent;

            border: none;

            cursor: pointer;
        }
    }
    li:hover {
        background-color: var(--color-grey-2);
    }
`;
