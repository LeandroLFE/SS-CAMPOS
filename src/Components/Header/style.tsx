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
        width: 209px;
        margin: 14px 38.7vw 14px 14px;
    }

    .button {
        text-transform: uppercase;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
        font-size: 13.6px;
        margin-top: 14px;
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
        margin-top: 6px;
        margin-right: 20px;
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