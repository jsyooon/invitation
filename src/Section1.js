import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  > div {
    position: fixed;
    width: 100%;
    max-width: 960px;
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px 6%;
  }

  img {
    width: 100%;
    display: block;
  }

  .text {
    flex: none;
    opacity: 0;
  }

  .m {
    display: block;
    max-width: 140px;
    width: 32%;
    margin: 0 auto 12px;

    img {
      aspect-ratio: 700 / 131;
    }
  }
  .hjh {
    width: 105%;
    margin: 3vh -2.5%;

    img {
      aspect-ratio: 1200 / 224;
    }
  }

  .date {
    text-align: center;
    margin-top: auto;

    span {
      font-size: 13px;
      display: block;
      font-weight: 200;
      color: #666;
      letter-spacing: 0.2em;
      transform: translateY(5px);
      opacity: 0;

      & + span {
        margin-top: 0.6vh;
      }
    }

    .bar {
      width: 1px;
      height: 12px;
      background: #333;
      margin: 2px auto 3px;
      transform: rotate(22deg) scaleX(0.5);
      opacity: 0.4;
    }
  }

  .bg {
    position: relative;
    width: 100%;
    aspect-ratio: 96 / 144;
    overflow: hidden;
    margin-top: auto;

    .box {
      display: block;
      width: 100%;
      height: 100%;
      aspect-ratio: 96 / 144;
      background: url('./resources/main.jpg') 50% 20% no-repeat;
      background-size: 100% auto;
      opacity: 0;
    }

    .border {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-top: 44vw solid #fff;
      border-bottom: 52vw solid #fff;
      border-left: 10vw solid #fff;
      border-right: 10vw solid #fff;
    }
  }

  h1 {
    font-weight: normal;
    font-family: YeolrinMyeongjo-Light, serif;
    text-align: center;
    font-size: 32px;
    letter-spacing: 3px;
    line-height: 1.5;
    padding: 20px 0;
    margin: auto;
  }

  &.load {
    .text {
      opacity: 1;
      transition: opacity 600ms linear;
    }

    .m {
      transition-delay: 600ms;
    }

    .hjh {
      transition-delay: 2400ms;
    }

    .bg {
      .box {
        opacity: 1;
        transition: opacity 600ms linear;
      }
      .border {
        border-width: 0;
        transition: border 1000ms cubic-bezier(0, 0.8, 0.58, 1);
        transition-delay: 1500ms;
      }
    }

    .date {
      span {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 400ms linear, transform 600ms ease-out;

        &:first-child {
          transition-delay: 2600ms;
        }
        &:nth-child(2) {
          transition-delay: 2800ms;
        }
      }
    }
  }
`;

function Intro(props) {
  return (
    <Wrapper className={props.load}>
      <div>
        <span className='text m'>
          <img src='./resources/marriage.webp' alt='' />
        </span>
        <span className='bg'>
          <span className='box'></span>
          <span className='border'></span>
        </span>
        <span className='text hjh'>
          <img src='./resources/hjh.webp' alt='' />
        </span>
        <p className='text date'>
          <span>2022.09.24. SAT 12PM</span>
          <span>HAYES GARDEN</span>
        </p>
      </div>
    </Wrapper>
  );
}

export default Intro;
