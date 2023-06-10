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

    .contact {
        margin-left: 15vw;
        padding-top: 1.5vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .icons-warp {
        display: flex;
    }

    .email {
        margin-top: 2vw;
        font-size: 1vw;
    }

    .amarela {
        height: 1.8vw;
        background: #FFCC29;  
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .devs {
        color: black;
        font-size: 0.8vw;
        font-weight: bold;
    }

    .icon {
        font-size: 2vw;
        margin-left: 1.5vw;
    }
    
    .icon:hover {
        color: #FFCC29;
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @media (max-width: 767px) {

    .footer {
      border-top: 2px solid #0f0f0f;
      flex-direction: column;
      padding: 0;
    }

    .logo {
      width: 50%;
      margin: 0;
      border-right: none;
      padding: 2vh;
    }

    .paginas {
      align-items: left;
      font-size: 4vw;
      margin-top: 5%;
      margin-bottom: 5%;
    }

    .button {
      font-size: 14px;
      margin-top: 10px;
    }

    .contact {
      margin: 0;
      margin-top: 1vh;
      align-items: center;
    }

    .icon {
        font-size: 6.5vw;
        margin-right: 3vw;
    }

    .email {
      font-size: 4vw;
      margin-top: 10px;
    }

    .amarela {
        height: 9vw;
        margin-top: 3.5vh;
    }

    .devs {
        font-size: 3vw;
    }
`;