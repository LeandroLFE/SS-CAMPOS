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
        margin: 1.4vw 2vw 0 0;
        font-size: 0.1px;
        background-color: rgba(0, 0, 0, 0);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .menu {
        border-top: 1.5px solid rgba(183, 183, 183, 0.6);
        position: absolute;
        top: 8.5vh;
        right: 0;
        left: 0;
        height: 38vh;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px;
        display: none;
        
        
    }

    .menu-options {
        display: flex;
        flex-direction: column;
        justify-content: flex-end; /* Adicione esta linha para alinhar os botões à direita */
        margin-bottom: 10px;
        padding-inline: 8vw;
        padding-top: 2vw;
        padding-bottom: 2vw;
    }

    .contact-icons {
        display: flex;
        flex-direction: column;
        justify-content: flex-end; /* Adicione esta linha para alinhar os botões à direita */
        margin-bottom: 10px;
        padding-inline: 8vw;
        padding-top: 2vw;
        padding-bottom: 2vw;

    }

    .menu-item {

    }

    /* Show the menu when it's open */
    .menu.open {
        display: block;
    }

    .button-menu-option {
        display: flex;
        flex-direction: column;
        background-color: rgba(0,0,0,0);
        margin-top: 3vh;
        text-transform: uppercase;
        margin-left: auto; /* Adiciona margem à esquerda para empurrar para a direita */
    }

    /* Smartphones */
    @media (min-width: 375px) and (max-width: 480px) {
        .header {
            justify-content: space-between;
            padding: 3vw;
            background-color: rgba(0,0,0,0.5);
        }

        .logo {
            width: 38%;
            margin: 0;
        }

        .button {
            font-size: 2.7vw;
            margin-top: 2vw;
        }

        #button-1 {  
          margin-right: 0;
        }

        #button-2 {
            margin-right: 0;
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