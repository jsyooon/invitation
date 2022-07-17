import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding: 70px 6%;

  .dot {
    width: 40px;
    opacity: 0.3;
    margin-bottom: 12px;

    img {
      display: block;
      width: 100%;
    }
  }

  p {
    font-size: 14px;
    line-height: 2;
    font-family: YeolrinMyeongjo-Light, serif;
    letter-spacing: 0.03em;
    word-break: keep-all;
    span {
      display: block;
    }
    + p {
      margin-top: 20px;
    }
  }
`;

function Section2() {
  return (
    <Wrapper className='section'>
      <div className='dot'>
        <img src='./resources/leaf.png' alt='' />
      </div>
      <p>
        <span>저희의 결혼을 축하해 주는 소중한 분들께</span>
        <span>감사의 마음을 담아 청첩장을 전합니다.</span>
        <span>2017년 12월 어느 겨울날의 첫 인연으로,</span>
        <span>오래도록 기다리고 꿈꿔온 결혼의 시작을 </span>
        <span>저희 두 사람의 뜻에 따라,</span>
        <span>소규모 예식으로 준비하게 되었습니다.</span>
      </p>
      <p>
        <span>살면서 마음을 나누었던 소중한 분들을 </span>
        <span>자리에 직접 초대하지 못하게 되어</span>
        <span>아쉽고 송구한 마음을 안고</span>
        <span>소식을 전하게 되었습니다.</span>
        <span>너그러운 마음으로 이해해 주시고, </span>
        <span>마음으로 축복해 주시면 감사하겠습니다.</span>
      </p>
      <p>
        <span>따스한 가을의 햇살같이 성숙한 어른으로,</span>
        <span>행복한 부부로</span>
        <span>서로를 아끼고 사랑하며</span>
        <span>인생의 새로운 시작을 열도록 하겠습니다.</span>
        <span>늘 행복하고 건강하시며, </span>
        <span>노오랗게 무르익은 들판의 벼들과 같이</span>
        <span>아름답고 풍요로운 날들 보내시기를 바라곘습니다.</span>
      </p>
    </Wrapper>
  );
}

export default Section2;
