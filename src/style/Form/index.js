import styled from "styled-components";

export const StyledForm = styled.form`
    width: 90%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div {
        width: 100%;
        height: 70px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: relative;
    }
    div span {
        font-size: 14px;

        position: absolute;
        right: 0%;

        color: var(--color-negative);
    }
`;
export default StyledForm;
