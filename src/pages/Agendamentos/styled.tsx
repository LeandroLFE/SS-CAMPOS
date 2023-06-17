import styled from 'styled-components'

export const Container = styled.div`
  width: 100%; 
  background-color: black;
  padding-bottom: 9%;

  h2 {
      text-transform: uppercase;
      color: #FFCC29; 
      font-size: 2.43vw;
  }

  .campos_schedules {
      width: 100%;
      height: 100vh;
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

  .button-schedule {
      display: flex;
      justify-content: center;
  }

  .schedule {
      font-size: 1vw;
      text-transform: uppercase;
      padding: 1% 3%;
      background: #FFCC29;
      color: black;
      font-weight: bold;
      border-radius: 50px;
      margin-top: 3.4%;
      cursor: pointer;
  }

  .schedule:hover {
      color: #FFCC29;
      background-color: rgba(255, 204, 41, 0.4);
  }

  .title-2 {
      text-align: center;
      margin-top: 9%;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-top: 2rem;
  }

  .top-comments {
      display: flex;
  }

  .bottom-comments {
    display: flex;
    margin-top: -23vh;
  }

  .right-box {
    margin-top: 15vh;
  }
  
  .comment-box {
    width: 20vw;   
    height: 40vh;
    padding: 5% 2vw;
  }

  .profile-info {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .comment {
    font-size: 1.07vw;
    text-align: center;
    font-style: italic;
  }

  .quote-icon-left {
    color: #FFCC29;
    font-size: 2.2vw;
    margin: 2%;
    margin-left: -10%;
    display: inline-block;
  }

  .quote-icon-right {
    color: #FFCC29;
    font-size: 2.2vw;
    margin: 2%;
    margin-left: 95%;
  }

  .profile-picture {
    width: 20%;
    margin-right: 6%;
  }

  .profile-info p {
    font-size: 1.07vw;
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
    top: 82%;
    font-size: 3.5vw;
    padding: 2vw 4vw;
  }

  .title-1,
  .title-2 {
    padding-bottom: 2vw;
    margin-top: 14%;
  }

  .paragraph-description {
    font-size: 4vw;
    width: 95%;
    margin-left: 3%;
  }

  .button-schedule {
      display: flex;
      justify-content: center;
  }

  .schedule {
    top: 80%;
    font-size: 3.5vw;
    padding: 2vw 4vw;
  }

  .container {
    flex-direction: initial;
    height: auto;
    overflow-y: scroll;
  }
  
  .top-comments,
  .bottom-comments {
    margin-top: 0;
  }
  
  .right-box {
    margin-top: 0;
  }

  .quote-icon-left, .quote-icon-right {
    font-size: 5vw;
  }

  .comment {
    font-size: 4vw;
  }

  .comment-box {
    width: 70vw;
    margin-right: 5vw;
    margin-left: 10vw;
    height: auto;
  }

  .right-box-none {
    display: none;
  }

  .profile-info p {
    font-size: 3.5vw;
  }

  }
`;