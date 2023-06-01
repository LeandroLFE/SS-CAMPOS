import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    background: black;

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo {
        width: 20vw;
        margin: 2vw 3vw 1vw 0;
        border-right: 1px solid white;
        padding: 2.5vw 3vw 2.5vw 0;
    }

    .paginas {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 1.5vw;
        font-size: 1vw;
    }

    .title-paginas {
        font-weight: bold;
    }

    
    .button {
        text-transform: uppercase;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
        font-size: 0.9vw;
        margin-top: 0.8vw;
        font-weight: 600;
    }

    .button:hover {
        color: #FFCC29;
    }

    #button-1.active {
        color: #FFCC29;
    }
    
    #button-2.active {
        color: #FFCC29;
    }

    #button-1 {  
        margin-right: 10vw;
    }

    #button-2 {
        margin-right: 8vw;
    }

    .button-header.active {
        color: #FFCC29;
    }

    .devs {
        margin-top: 2vw;
    }

    .contact {
        margin: 3.5vw 0 0 15vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .icons-warp {
        display: flex;
    }

    #wpp {
        margin-right: 1vw;
        width: 2vw;
        cursor: pointer;
    }

    #insta {
        width: 2vw;
        cursor: pointer;
    }

    .email {
        margin-top: 2vw;
        font-size: 1vw;
    }

    .amarela {
        height: 1.5vw;
        background: #FFCC29;  
    }

    .icon {
        width: 50%;
        margin-top: 1vw;
        margin-right: 1.5vw;
    }
    
    .icon:hover {
        color: #FFCC29;
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    /* Smartphones */
    @media (min-width: 375px) and (max-width: 480px) {
        
    }

    @media (min-width: 481px) and (max-width: 767px) {

    }

    /* Tablets */
    @media (min-width: 768px) and (max-width: 1023px) {
    /* Estilos para tablets */
    }

    /* Laptops e desktops menores */
    @media (min-width: 1024px) and (max-width: 1279px) {
    /* Estilos para laptops e desktops menores */
    }

    /* Laptops e desktops maiores */
    @media (min-width: 1280px) and (max-width: 1439px) {
    /* Estilos para laptops e desktops maiores */
    }

    /* Laptops e desktops ainda maiores */
    @media (min-width: 1440px) and (max-width: 1919px) {
    /* Estilos para laptops e desktops ainda maiores */
    }
`;