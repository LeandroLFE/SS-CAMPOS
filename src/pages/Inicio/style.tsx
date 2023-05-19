import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw; 
    background-color: black;

    h2 {
        text-transform: uppercase;
        color: #FFCC29; 
        font-size: 35px;
    }

    .campos_home {
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

    .first-road-map,
    .second-road-map {
        width: 75vw;
        margin: auto;
    }

    .title-2, 
    .title-3,
    .title-4,
    .title-5 {
        margin-top: 120px;
        text-align: center;
    }

    .information-paragraph {
        text-align: center;
    }

    .carousel-item {
        position: relative;
    }
    
    .caption {
        position: absolute;
        bottom: 20px;
        left: -10px;
        color: white;
        padding: 10px 20px;
        font-size: 33px;
        font-weight: 550;
        line-height: 40px;
        text-shadow: 1px 1px 12px #000000;
    }

    .carousel-text {
        white-space: pre-line;
    }
    
    .image-wrapper { 
        position: relative;
        display: inline-block;
    }

    .image-wrapper img { 
        width: 296px;
    }

    .image-wrapper p {
        text-align: center;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
        font-weight: 550;
        line-height: 40px;
        text-shadow: 1px 1px 12px #000000;
    }

    .services {
        width: 100%;
        height: 100%;
    }

    .services-group {
        display: flex;
        justify-content: center;
    }

    .icon-wrapper {
        border: 4px solid #FFCC29;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 50px 70px;
        margin: 0 30px;
        width: 8%;
    }

    .icon-wrapper img {
        width: 100px;
        height: 90px;
        margin-bottom: 30px;
    }

    .icon-wrapper p {
        text-align: center;
    }

    .button-budget {
        display: flex;
        justify-content: center;
    }

    .budget {
        font-size: 19px;
        padding: 12px 48px;
        background: #FFCC29;
        color: black;
        font-weight: bold;
        border-radius: 12px;
        margin-top: 50px;
        cursor: pointer;
    }

    .differential {
        margin-top: 120px;
    }

    .differential-wrapper, .professional-camera-wrapper {
        display: flex;
    }

    .differential-information,
    .professional-camera-information {
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .differential-information {
        margin-left: 80px;
        text-align: left;
    }

    .professional-camera-information { 
        margin-right: 80px;
        text-align: right;
    }

    .differential-information h2 {
        line-height: 40px;
    }

    .professional-camera {
        display: flex; 
        justify-content: flex-end; 
        padding: 50px 0;
    }

    .professional-camera-wrapper {
        display: flex; 
        width: 100%; 
        justify-content: flex-end; 
    }

    .professional-camera-wrapper img,
    .differential-wrapper img {
        width: 50%;
    }

    .paragraph-bold {
        font-weight: bold;
    }

    .differential-information p,
    .professional-camera-information p {
        font-size: 18px; 
        line-height: 32px;
    }
`;