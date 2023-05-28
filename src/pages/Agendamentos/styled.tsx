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
        padding: 12px 30px;
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
        margin-top: 25px;
      }

      .top-comments {
          display: flex;
      }

      .bottom-comments {
        display: flex;
        margin-top: -120px;
      }

      .right-box {
        margin-top: 100px
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
        text-align: center;
        font-style: italic;
      }

      .quote-icon-left {
        color: #FFCC29;
        font-size: 30px;
        margin: 10px;
        margin-left: -10px;
        display: inline-block;
      }

      .quote-icon-right {
        color: #FFCC29;
        font-size: 30px;
        margin: 10px;
        margin-left: 270px;
      }

      .profile-picture {
        margin-right: 20px
      }
`;