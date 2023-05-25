import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw; 
    background-color: black;

    h2 {
        text-transform: uppercase;
        color: #FFCC29; 
        font-size: 2.43vw; 
    }

    .campos_home {
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
        position: relative; /* adiciona um contexto para os elementos filhos */
    }

    .principal-text {
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
        font-size: 3.5vw;
        font-weight: 550;
        line-height: 4vw;
        text-shadow: 1px 1px 12px #000000;
    }

    .more-information {
        position: absolute;
        top: 62%;
        left: 5%;
        color: #000000;
        background: #FFCC29;
        text-transform: uppercase;
        font-weight: 550;
        font-size: 1vw;
        border-radius: 50px;
        padding: 0.69vw 1.67vh;
        cursor: pointer;
    }

    .title-1 {
        text-align: center;
    }

    .paragraph-description {
        font-size: 1.1vw;
        width: 62%;
        margin-left: 19%;
        text-align: justify;
    }

    .first-road-map,
    .second-road-map {
        width: 85vw;
        margin: auto;
        padding: 0 70px;
    }

    .title-2, 
    .title-3,
    .title-4,
    .title-5 {
        margin-top: 9%;
        text-align: center;
    }

    .information-paragraph {
        font-size: 1.1vw;
        text-align: center;
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

    .title-6,
    .title-7 {
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
        font-size: 1.1vw;
        line-height: 2.2vw;
    }


    @media (max-width: 768px) {
        /* Estilos para telas menores */
        ...
    }
`;