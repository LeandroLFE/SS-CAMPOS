import styled from "styled-components";

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
    color: #ffcc29;
    font-size: 2.43vw;
  }

  .campos_home {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    position: relative;
  }

  .principal-text {
    position: absolute;
    width: 58vw;
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
    background: #ffcc29;
    text-transform: uppercase;
    font-weight: 550;
    font-size: 1vw;
    border-radius: 50px;
    padding: 0.69vw 1.67vh;
    cursor: pointer;
  }

  .more-information:hover {
    color: #ffcc29;
    background-color: rgba(255, 204, 41, 0.4);
  }

  .title-1 {
    text-align: center;
    padding-bottom: 2vw;
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

  .title-4,
  .title-5 {
    padding-bottom: 2vw;
  }

  .information-paragraph {
    font-size: 1.1vw;
    text-align: center;
    padding-bottom: 2vw;
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
    border: 0.3vw solid #ffcc29;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4vw 5vw;
    margin: 0 1.5%;
    width: 8%;
    transition: transform 0.3s;
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

  .button-budget {
    display: flex;
    justify-content: center;
  }

  .budget {
    text-transform: uppercase;
    font-size: 1vw;
    padding: 0.8% 2%;
    background: #ffcc29;
    color: black;
    font-weight: bold;
    border-radius: 50px;
    margin-top: 3.4%;
    cursor: pointer;
    text-decoration: none;
  }

  .budget:hover {
    color: #ffcc29;
    background-color: rgba(255, 204, 41, 0.4);
  }

  .differential {
    margin-top: 9%;
  }

  .differential-wrapper,
  .professional-camera-wrapper {
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
    padding-bottom: 2vw;
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

  /* Estilos para dispositivos menores que 768px (smartphones e tablets) */
  @media (max-width: 1023px) {
    .principal-text {
      font-size: 8vw;
      width: 70vw;
      top: 62%;
    }
    h2 {
      font-size: 4vw;
    }
    .more-information {
      top: 67%;
      font-size: 5vw;
    }
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 6.5vw;
    }

    .principal-text {
      width: 80%;
      top: 70%;
      font-size: 7vw;
      line-height: 9vw;
    }

    .more-information {
      top: 80%;
      font-size: 3.5vw;
      padding: 2vw 4vw;
    }

    .description {
      margin-top: 2vh;
    }

    .paragraph-description,
    .information-paragraph {
      font-size: 4vw;
      width: 95%;
      margin-left: 3%;
    }

    .title-2,
    .title-3,
    .title-4,
    .title-5 {
      padding-bottom: 2vw;
      margin-top: 14%;
    }

    .services-images {
      display: block;
      white-space: nowrap;
    }

    .image-wrapper {
      display: inline-block;
      vertical-align: top;
      white-space: normal;
      margin-right: 0;
      margin-bottom: 10px;
    }

    .image-wrapper p {
      font-size: 3vw;
      line-height: 2.5vw;
    }

    .services-group {
      flex-direction: column;
      align-items: center;
      gap: 2vh;
    }

    .icon-wrapper {
      width: 40vw;
      height: 40vw;
      padding: 0;
      margin: 0;
    }

    .icon-wrapper img {
      width: 15vw;
      height: 14vw;
      margin-bottom: 10%;
      padding: 0 10vw;
    }

    .icon-wrapper p {
      font-size: 4vw;
    }

    .budget {
      font-size: 3.5vw;
      padding: 2vw 4vw;
      margin-top: 8%;
    }

    .differential {
      margin-top: 14%;
    }

    .differential-wrapper {
      flex-direction: column;
    }

    .differential-information,
    .professional-camera-information {
      width: 95%;
      display: flex;
      flex-direction: column;
      justify-content: justify;
      text-align: left;
    }

    .title-6,
    .title-7 {
      line-height: 7vw;
      margin-top: 14%;
    }
    .professional-camera-wrapper img,
    .differential-wrapper img {
      width: 100%;
    }

    .paragraph-bold {
      font-weight: bold;
    }

    .differential-information {
      margin-left: 3%;
    }

    .differential-information p,
    .professional-camera-information p {
      font-size: 4vw;
      line-height: 7vw;
    }

    .professional-camera-wrapper {
      position: relative;
    }

    .professional-camera-information {
      margin-top: 81.5%;
      margin-right: 2%;
      text-align: left;
    }

    .professional-camera-wrapper img {
      position: absolute;
      left: 0;
    }

    .services-images {
      display: flex;
      overflow-x: auto;
    }

    .image-wrapper {
      flex: 0 0 auto;
      cursor: pointer;
      position: relative;
      margin-right: 10px; 
    }

    .image-wrapper p {
      font-size: 4vh;
      line-height: 9vw;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    h2 {
      font-size: 6.5vw;
    }

    .principal-text {
      width: 80%;
      top: 70%;
      font-size: 7vw;
      line-height: 9vw;
    }

    .more-information {
      top: 80%;
      font-size: 3.5vw;
      padding: 2vw 4vw;
      margin-top: 5vw;
    }

    .description {
      margin-top: 2vh;
    }

    .paragraph-description,
    .information-paragraph {
      font-size: 3.5vw;
      width: 95%;
      margin-left: 3%;
    }

    .title-1{

      font-size: 6vw;
    }

    .title-2,
    .title-3,
    .title-4,
    .title-5 {
      padding-bottom: 2vw;
      margin-top: 14%;
      font-size: 6vw;
    }

    .services-images {
      display: flex;
      overflow-x: auto;
    }

    .image-wrapper {
      flex: 0 0 auto;
      cursor: pointer;
      position: relative;
      margin-right: 5px;
      height: 75vw;
    }

    .image-wrapper p {
      font-size: 4vh;
      line-height: 7vw;
    }

    .icon-wrapper {
      padding: 4vw 5vw;
      margin: 0 1.5%;
      width: 17%;
    }

    .icon-wrapper img {
      width: 9vw;
      height: 8.5vw;
      margin-bottom: 20%;
    }

    .icon-wrapper p {
      text-align: center;
      font-size: 3.5vw;
      text-decoration: none;
    }

    .budget {
      font-size: 3vw;
      padding: 1.6% 5%;
      margin-top: 6%;
    }

    .differential {
      margin-top: 14%;
    }

    .differential-wrapper {
      flex-direction: column;
    }

    .differential-information,
    .professional-camera-information {
      width: 95%;
      display: flex;
      flex-direction: column;
      justify-content: justify;
      text-align: left;
    }

    .title-6,
    .title-7 {
      line-height: 7vw;
      margin-top: 14%;
      font-size: 6vw;
    }
    .professional-camera-wrapper img,
    .differential-wrapper img {
      width: 100%;
    }

    .paragraph-bold {
      font-weight: bold;
    }

    .differential-information {
      margin-left: 3%;
    }

    .differential-information p,
    .professional-camera-information p {
      font-size: 3.5vw;
      line-height: 7vw;
    }

    .professional-camera-wrapper {
      position: relative;
    }

    .professional-camera-information {
      margin-top: 81.5%;
      margin-right: 2%;
      text-align: left;
    }

    .professional-camera-wrapper img {
      position: absolute;
      left: 0;
    }

    .services-images {
      display: flex;
      overflow-x: auto;
    }

    .image-wrapper {
      flex: 0 0 auto;
      cursor: pointer;
      position: relative;
      margin-right: 10px; /* Espaçamento entre as imagens */
    }

    .image-wrapper p {
      font-size: 3.5vh;
      line-height: 9vw;
    }
  }
`;
