import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw; 
    background-color: black;
    padding-bottom: 10rem;

    h2 {
        text-transform: uppercase;
        color: #FFCC29; 
        font-size: 2.43vw;
    }

    .campos_schedules {
        width: 100vw;
        height: 100vh;
        display: relative;
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
        margin-top: 2%;
      }

      .top-comments {
          display: flex;
      }

      .bottom-comments {
        display: flex;
        margin-top: -9%;
      }

      .right-box {
        margin-top: 10%;
      }
      
      .comment-box {
        width: 300px;   
        height: 320px;
        padding: 50px;
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
`;