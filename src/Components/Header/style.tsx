import styled from 'styled-components'

export const Container = styled.div`
    z-index: 1;
    width: 100%;
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

    #button-1 {
        margin-right: 10vw;
    }

    #button-2 {
        margin-right: 8vw;
    }

    .button.active {
        color: #FFCC29;
    }
   
    .icon {
        margin-top: 1vw;
        margin-right: 1.2vw;
        width: 60%;
        height: 60%;
    }
    
    .icon:hover {
        color: #FFCC29;
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .menu {
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
    }

    .menu-item {
        display: flex;
        flex-direction: column;
        align-items: left;
    }

    /* Hide the menu initially */
    .menu {
        display: none;
    }

    /* Show the menu when it's open */
    .menu.open {
        display: block;
    }

    .item {
        border-top: 1px solid #FFCC29;
        width: 100%;
        padding: 15px;
        font-weight: bold;
        background-color: #121111;
        font-size: 3.5vw;
    }

    @media (max-width: 767px) {
        .header {
            background: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.1));
        }
        
        .logo {
            width: 40%;
            margin: 3vw 5vw 3vw 3vw;
        }

        .button {
            font-size: 3vw;
            margin-top: 3vw;
        }

        #button-1 {
            margin-right: 5vw;
        }

        #button-2 {
            margin-right: 5vw;
        }
    }


`;