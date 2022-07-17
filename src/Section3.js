import styled from 'styled-components';
import Phone from './Phone';

const Wrapper = styled.section`
  text-align: center;
  padding-bottom: 70px;

  .dot {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    span {
      width: 2px;
      height: 2px;
      background: #a4a4a4;

      & + span {
        margin-left: 4px;
      }
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;

  .amp {
    font-family: 'WindSong', cursive;
    font-size: 18px;
    font-style: italic;
    color: #ccc;
    margin: 5px 0;
  }

  p {
    color: #888;

    .parent {
      color: #333;
    }

    strong {
      font-size: 18px;
      letter-spacing: 2px;
      color: #333;
      font-weight: 200;
      margin-left: 5px;
    }
  }
`;
function Section2() {
  return (
    <Wrapper className='section'>
      <div className='dot'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Flex>
        <p>
          <span className='parent'>윤시규</span>, <span className='parent'>정진선</span>의 장남 <strong>주혁</strong>
        </p>
        <span className='amp'>and</span>
        <p>
          <span className='parent'>임기조</span>, <span className='parent'>신귀연</span>의 장녀 <strong>현주</strong>
        </p>
      </Flex>
      <Phone />
    </Wrapper>
  );
}

export default Section2;
