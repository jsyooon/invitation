import styled from 'styled-components';

const Wrapper = styled.section`
  padding-bottom: 100px;
  .img {
    display: block;

    img {
      display: block;
      width: 60px;
      margin: 0 auto;
    }
  }

  p {
    text-align: center;
    font-family: YeolrinMyeongjo-Light, serif;
    color: #555;
    font-size: 14px;
    letter-spacing: 0.03em;
    margin-top: 40px;
    line-height: 1.6;
  }

  .bar {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 10px;
    color: #999;
    font-family: 'Cormorant Garamond', serif;
    letter-spacing: 5px;

    span {
      color: #ddd;
    }
  }
`;

function Footer() {
  return (
    <Wrapper className='section'>
      <span className='img'>
        <img src='./resources/deco.webp' alt='' />
      </span>
      <p>
        사랑과 진심을 담아, <br />
        아름다운 결혼식에 초대합니다.
      </p>
      <span className='bar'>
        JUHYUK <span>&amp;</span> HYUNJU
      </span>
    </Wrapper>
  );
}

export default Footer;
