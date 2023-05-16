import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    position: absolute;
    display: flex;

    .header {
        display: flex;
        align-items: center;
        justify-content: center;

        .logo {
            width: 209px;
            margin: 14px 38.7vw 14px 14px;
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
            margin-right: 11vw;
        }

        #button-2 {
            margin-right: 9.8vw;
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
    }
`;