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

    .more-information:hover {
        color: #FFCC29;
        background-color: rgba(255, 204, 41, 0.4);
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
        cursor: pointer;
        position: relative;
        display: inline-block;
    }

    .image-wrapper:hover img { 
        filter: brightness(0.5);
    }

    .image-wrapper:hover p { 
        font-size: 2.4vw;
        text-shadow: 2vw 2vw 1vw #000000;
    }

    .image-wrapper img { 
        width: 20vw;
    }

    .image-wrapper p {
        text-align: center;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2vw;
        font-weight: 550;
        line-height: 2.5vw;
        text-shadow: 1vw 1vw 1vw #000000;
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
        cursor: pointer;
        border: 0.3vw solid #FFCC29;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 4vw 5vw;
        margin: 0 1.5%;
        width: 8%;
        transition: transform 0.3s;
    }

    .icon-wrapper:hover {
        transform: scale(1.1);
    }

    .icon-wrapper img {
        width: 7vw;
        height: 6.5vw;
        margin-bottom: 20%;
    }

    .icon-wrapper p {
        text-align: center;
        font-size: 1vw;
        text-decoration: none;
    }

    .icon-wrapper a {
        text-decoration: none;
        color: white;
    }

    .button-budget {
        display: flex;
        justify-content: center;
    }

    .budget {
        text-transform: uppercase;
        font-size: 1vw;
        padding: 0.8% 2%;
        background: #FFCC29;
        color: black;
        font-weight: bold;
        border-radius: 50px;
        margin-top: 3.4%;
        cursor: pointer;
        text-decoration: none;
    }

    .budget:hover {
        color: #FFCC29;
        background-color: rgba(255, 204, 41, 0.4);
    }

    .differential {
        margin-top: 9%;
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
        margin-left: 5%;
        text-align: left;
    }

    .professional-camera-information { 
        margin-right: 5%;
        text-align: right;
    }

    .title-6,
    .title-7 {
        line-height: 3vw;
    }

    .professional-camera {
        display: flex; 
        justify-content: flex-end; 
        padding: 5% 0;
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