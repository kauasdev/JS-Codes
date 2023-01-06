import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;
    max-width: 1440px;
    background-color: var(--gray-700);

    div {
        width: 126px;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            width: 22px;
            height: 36px;
        }

        span {
            display: flex;

            p {
                font-size: 2.3rem;
                font-family: "Inter", sans-serif;
                font-weight: 900;

                :nth-child(1){
                    color: var(--blue);
                }
                :nth-child(2){
                    color: var(--dark-purple);
                }
            }
        }
    }
`;

export const Main = styled.main`
    width: 100%;
    min-height: calc(100vh - 180px);
    background-color: var(--gray-600);

    .addTask {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 736px;
        height: 50px;
        margin: 0 auto;
        input {
            width: 630px;
            height: 40px;
            background-color: var(--gray-500);
            border: 1px solid #0D0D0D;
            border-radius: 8px;
            padding: 14px;
            gap: 8px;
            flex: none;
            order: 0;
            flex-grow: 1;
            margin-top: -40px;
            color: #fff;
        }
        
        button {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 5px;
            gap: 8px;
            width: 90px;
            height: 40px;
            background: #1E6F9F;
            border: 0;
            border-radius: 6px;
            flex: none;
            order: 1;
            flex-grow: 0;
            margin-top: -40px;
            
            p {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 140%;
                color: var(--gray-100);
            }
        }
    }
`;

export const TaskList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

    position: absolute;
    width: 736px;
    height: 287px;
    left: calc(50% - 736px/2);
    top: 280px;

    .countTasks {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--gray-400);
        width: 100%;
        padding-bottom: 10px;

        .allTasks {
            color: var(--blue);
        }

        .doneTasks{
            color: var(--purple);
        }

        span {
            display: flex;
            gap: 8px;
            font-family: "Inter", sans-serif; 
            
            p {
                color: #fff;
                border-radius: 999px;
                padding: 4px;
                background-color: var(--gray-400);
                height: 20px;
                width: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    .noTasks.show{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-bottom: 10px;

        strong, p {
            font-family: "Inter", sans-serif;
            color: var(--gray-300);
            margin: 5px 0;
        }
    }
    .noTasks {
        display: none;
    }
    .list {
        width: 736px;
    }
`;
