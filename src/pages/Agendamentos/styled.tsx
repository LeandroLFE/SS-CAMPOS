import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw; 
    background-color: black;

    h2 {
        text-transform: uppercase;
        color: #FFCC29; 
        font-size: 35px;
    }

    .campos_schedules {
        width: 100vw;
        heigth: 100vh;
        display: relative;
    }

    .principal-text {
        display: absolute;
        margin-top: -608px;
        margin-left: 63px;
        font-size: 50px;
        font-weight: 550;
        line-height: 60px;
        text-shadow: 1px 1px 12px #000000;
    }

    .more-information {
        margin-top: 20px;
        margin-left: 63px;
        color: #000000;
        background: #FFCC29; 
        text-transform: uppercase;
        font-weight: 550;
        font-size: 14px;
        border-radius: 50px;
        padding: 10px 15px;
    }

    .title-1 {
        margin-top: 380px;
        text-align: center;
    }

    .paragraph-description {
        width: 62%;
        margin-left: 19%;
        text-align: justify;
    }
`;