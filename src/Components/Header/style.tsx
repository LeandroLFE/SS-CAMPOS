import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;

    .header {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-left: 20px;
    }
    .logo {
        width: 30%;
        max-width: 209px;
        margin: 1%;
    }

    button {
        text-transform: uppercase;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
        font-size: 1vw; 
    }

    #button-1 {
        color: #FFCC29;  
        margin-left: 34%;
        margin-right: 11%;
    }

    #button-2 {
        margin-right: 9.8%;
    }

    .icon {
        margin-top: 1%;
        margin-right: 0.2%;
        cursor: pointer;
    }

    #wpp {
        width: 1.4%;
    }

    #insta {
        width: 1.6%;
    }

    #gmail {
        width: 2%;
    }
`;