import styled from 'styled-components'

export const Container = styled.div`
    width: 100%; 
    background-color: black;
    overflow-x: hidden;

    @keyframes jump {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    h2 {
        text-transform: uppercase;
        color: #FFCC29; 
        font-size: 2.43vw; 
    }

    .campos_home {
        width: 100%;
        height: 100vh;;
        object-fit: cover;
        object-position: center;
        position: relative;
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

    .insta {
        position: absolute;
        top: 77vh;
        left: 50%;
        transform: translateX(-50%);
        animation: fadeIn 1s forwards;
    }

    .insta-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .insta-image {
        width: 3vw;
        border-radius: 50%;
        cursor: pointer;
        animation: jump 1s infinite;
    }

    .acessoInsta {
        position: relative;
    }

    .dialog-image {
        width: 12vw;
    }

    .dialog-text {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 19px;
        font-weight: bold;
        width: 12vw;
        height: 2.2vh;
        justify-content: center;
        text-align: center;
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

    .services-images {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    
    .image-wrapper { 
        flex: 1;
        cursor: pointer;
        position: relative;
    }

    .image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .image-wrapper:hover { 
        filter: brightness(0.5);
        font-size: 2.4vw;
        text-shadow: 1px 1px #000, 2px 2px #000, 3px 3px #000;
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
        text-shadow: 2px 2px #000, 2px 2px #000, 3px 3px #000;
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

    /* Smartphones 
    @media (min-width: 375px) and (max-width: 480px) {
    
    }

    @media (min-width: 481px) and (max-width: 767px) {

    }

    /* Tablets 
    @media (min-width: 768px) and (max-width: 1023px) {
    /* Estilos para tablets 
    }

    /* Laptops e desktops menores 
    @media (min-width: 1024px) and (max-width: 1279px) {
    /* Estilos para laptops e desktops menores 
    }

    /* Laptops e desktops maiores 
    @media (min-width: 1280px) and (max-width: 1439px) {
    /* Estilos para laptops e desktops maiores 
    }

    /* Laptops e desktops ainda maiores 
    @media (min-width: 1440px) and (max-width: 1919px) {
    /* Estilos para laptops e desktops ainda maiores 
    }*/

    /* Estilos para dispositivos menores que 768px (smartphones e tablets) */
    @media (max-width: 767px) {
        h2 {
            font-size: 4.1vw; 
        }
        
        .principal-text {
            top: 70%;
            font-size: 5.8vw;
            line-height: 7vw;
        }

        .more-information {
            top: 76%;
            font-size: 3vw;
            padding: 2vw 4vw;
        }

        .insta {
            top: 85vh;
        }

        .insta-image {
            width: 8vw;
        }

        .dialog-image {
            width: 40vw;
        }

        .dialog-text {
            font-size: 3vw;
            width: 40vw;
            height: auto;
        }

        .description {
            margin-top: 2vh;
        }

        .paragraph-description,
        .information-paragraph {
            font-size: 2.77vw;
        }

        .title-2, 
        .title-3,
        .title-4,
        .title-5 {
            margin-top: 14%;
        }

        .services-images {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin: 0 auto;
        }
        
        .image-wrapper { 
            width: 50%;
            flex: 0 0 50%;
            box-sizing: border-box;
            padding: 0.5%;
            text-align: center;
        }

        .image-wrapper p {
            font-size: 3vw;
            line-height: 2.5vw;
        }

        .icon-wrapper {
            padding: 6.5vw 9.5vw;
        }

        .icon-wrapper img {
            width: 10.5vw;
            height: 9.5vw;
        }

        .icon-wrapper p {
            font-size: 2vw;
        }

        .budget {
            font-size: 2.5vw;
            padding: 2vw 4vw;
            margin-top: 8%;
        }

        .differential {
            margin-top: 14%;
        }

        .differential-wrapper, 
        .professional-camera-information {
            flex-direction: column;
        }








        .differential-information,
        .professional-camera-information {
            width: 62%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }







        .title-6,
        .title-7 {
            line-height: 4.1vw;
        }
        .professional-camera-wrapper img,
        .differential-wrapper img {
            width: 100%;
        }

        .paragraph-bold {
            font-weight: bold;
        }

        .differential-information p,
        .professional-camera-information p {
            font-size: 1.1vw;
            line-height: 2.2vw;
        }
    }




/* Estilos para dispositivos maiores que 768px (laptops e desktops) 
AINDA NÃO MEXI NESSAS MEDIDAS*/
@media (min-width: 768px) {
  .principal-text {
    font-size: 3.5vw;
    line-height: 4vw;
  }

  .more-information {
    font-size: 1vw;
    padding: 0.69vw 1.67vh;
  }

  .insta {
    top: 77vh;
  }

  .insta-image {
    width: 3vw;
  }

  .dialog-image {
    width: 12vw;
  }

  .dialog-text {
    top: 55%;
    font-size: 19px;
    width: 12vw;
    height: 2.2vh;
  }
}

`;