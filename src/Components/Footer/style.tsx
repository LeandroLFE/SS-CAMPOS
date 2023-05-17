import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    background: black;

    .footer {
        display: flex;
        align-items: center;
        justify-content: center;

        .logo {
            width: 309px;
            margin: 40px 50px 14px 10px;
            border-right: 1px solid white;
            padding: 40px 50px;
        }

        button {
            text-transform: uppercase;
            border: none;
            background-color: rgba(0, 0, 0, 0);
            cursor: pointer;
            font-size: 13.6px;
            margin-top: 14px;
        }

        #button-1 {
            color: #FFCC29;  
            margin-right: 13vw;
        }

        #button-2 {
            margin-right: 10.8vw;
        }

        .icon {
            margin-top: 6px;
            margin-right: 20px;
            width: 25px;
            cursor: pointer;
        }

        #insta {
            width: 30px;
        }

        #gmail {
            width: 33px;
        }

        .amarela {
            width: 100%;
            height: 20px;
            background: #FFCC29; 
        }
    }
`;