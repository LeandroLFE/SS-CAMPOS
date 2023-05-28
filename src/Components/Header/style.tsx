import styled from 'styled-components'

export const Container = styled.div`
    z-index: 1;
    width: 100vw;
    position: absolute;
    display: flex;

    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }


    .logo {
        width: 13%;
        margin: 1vw 38.7vw 1vw 1vw;
    }

    .button {
        text-transform: uppercase;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
        font-size: 1vw;
        margin-top: 1vw;
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
        margin-right: 8vw;
    }

    #button-2 {
        margin-right: 8vw;
    }

    .button-header.active {
        color: #FFCC29;
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

    .menu-icon {
        color: #ffffff;
        cursor: pointer;
        margin: 6.5vw 3vw 3vw 0;
        background-color: rgba(0, 0, 0, 0);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .menu {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 100vh;
        background-color: rgba(0, 0, 0);
        padding: 10px;
        /* Add any additional styles as needed */
    }

    .logo-menu {
        width: 50%;
        margin: 12vw 0 0 9vw;
    }

    .menu-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    /* Hide the menu initially */
    .menu {
        display: none;
    }

    /* Show the menu when it's open */
    .menu.open {
        display: block;
    }

    .close-menu-button {
        position: absolute;
        background-color: rgba(0, 0, 0, 0);
        top: 5vh;
        right: 10vw;
        z-index: 2;
    }

    /* Smartphones */
    @media (min-width: 375px) and (max-width: 480px) {
        .logo {
            width: 30%;
            margin: 3vw 20vw 3vw 2vw;
        }

        .button {
            font-size: 2vw;
            margin-top: 3vw;
        }
    }

    @media (min-width: 481px) and (max-width: 767px) {

    }

    /* Tablets */
    @media (min-width: 768px) and (max-width: 1023px) {
        .icon {
            display: none;
        }
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