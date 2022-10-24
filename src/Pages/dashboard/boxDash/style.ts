import styled from "styled-components";

export const StyledBoxDash = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-grey-4);

    /* HEADER */
    .header {
        width: 100%;

        height: 80px;

        display: flex;
        flex-direction: column;
        align-items: center;

        border-bottom: 1px solid var(--color-grey-2);

        div {
            width: 90%;
            max-width: 700px;
            height: 80px;

            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        img {
            width: max-content;
            height: max-content;
        }
    }

    /*USUARIO*/

    .user {
        width: 100%;

        height: 110px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border-bottom: 1px solid var(--color-grey-2);

        div {
            width: 90%;
            max-width: 700px;
            height: 80px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            flex-wrap: wrap;

            h1 {
                font-size: var(--title-size-2);
                font-weight: 700;

                color: var(--color-grey-0);
            }
            span {
                font-size: 12px;

                color: var(--color-grey-1);
            }
        }
    }

    .technology {
        width: 100%;

        height: max-content;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .createTechnology {
            width: 90%;
            max-width: 700px;
            height: 80px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            flex-wrap: wrap;

            h2 {
                font-size: var(--title-size-1);
                font-weight: 700;

                color: var(--color-grey-0);
            }
        }
    }
`;
