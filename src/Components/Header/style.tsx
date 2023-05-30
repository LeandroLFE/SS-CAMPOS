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

    .button.active {
        color: #FFCC29;
    }

    #button-1 {  
        margin-right: 10vw;
    }

    #button-2 {
        margin-right: 8vw;
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
        /* Add any additional styles as needed */
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .menu {
        position: absolute;
        top: 100%;
        right: 0;
        width: 200px; /* Adjust the width as needed */
        background-color: black;
        padding: 10px;
        /* Add any additional styles as needed */
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


    /* Smartphones */
    @media (min-width: 375px) and (max-width: 480px) {
        
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