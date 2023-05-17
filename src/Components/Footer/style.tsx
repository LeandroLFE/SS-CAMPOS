import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    background: black;

    .container {
        display: flex;
        flex-direction: column;
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo {
        width: 309px;
        margin: 40px 50px 14px 0px;
        border-right: 1px solid white;
        padding: 40px 50px 40px 0;
    }

    .paginas {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 20px;
        font-size: 15px;
    }

    .title-paginas {
        font-weight: bold;
    }

    button {
        text-transform: uppercase;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
        margin-top: 14px;
    }

    .devs {
        margin-top: 30px;
    }

    .contact {
        margin: 68px 0 0 200px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }

    #wpp {
        margin-right: 20px;
        width: 25px;
        cursor: pointer;
    }

    #insta {
        width: 28px;
        cursor: pointer;
    }

    .email {
        margin-top: 28px;
    }

    .amarela {
        width: 100vw;
        height: 20px;
        background: #FFCC29;  
    }
`;