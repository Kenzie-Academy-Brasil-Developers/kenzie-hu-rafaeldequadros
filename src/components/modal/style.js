import styled from "styled-components";

export const StyledSectionModal = styled.section`
    width: 90%;
    max-width: 360px;
    height: 300px;

    display: flex;
    flex-direction: column;

    background-color: var(--color-grey-3);

    border-radius: 8px;
    opacity: 120%;

    .cadaster {
        width: 100%;
        height: 50px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 8px 8px 0px 0px;

        background-color: var(--color-grey-2);
        h2 {
            margin-left: 17px;

            font-size: 14px;
            font-weight: 700;

            color: var(--color-grey-0);
        }
        .x {
            margin-right: 17px;
        }
    }
    .teste {
        height: 10px;
    }
    .inputs {
        width: 100%;
        height: 250px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        form {
            align-items: flex-start;
            @media (min-width: 700px) {
                height: 210px;
            }
        }
    }
`;

export const StyledBoxModal = styled.div`
    width: 100vw;
    height: 100vh;

    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.5);
`;
