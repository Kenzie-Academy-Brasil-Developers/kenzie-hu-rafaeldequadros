import styled from "styled-components";

export const StyledBox = styled.section`
    width: 90%;
    max-width: 350px;
    height: 800px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: var(--color-grey-3);

    border-radius: 4px;

    section {
        width: 90%;

        display: flex;
        justify-content: space-between;
    }

    .create {
        width: 200px;
        height: 50px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
    }
    p {
        font-size: var(--headline);
        font-weight: 400;

        color: var(--color-grey-1);
    }
    h2 {
        font-size: var(--title-size-1);
        font-weight: 700;

        color: var(--color-grey-0);
    }
`;

export const StyledLogo = styled.section`
    width: 90%;
    max-width: 350px;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default StyledBox;
