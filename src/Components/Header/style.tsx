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
        margin-right: 10vw;
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

    a {
        color: inherit;
        text-decoration: none;
      }
`;