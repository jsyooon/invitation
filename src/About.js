import Map from './Map';
import MapButton from './MapButton';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding: 0 6% 120px;

  .about {
    color: #555;
  }

  .bar {
    display: block;
    width: 12px;
    height: 1px;
    background: #555;
    margin-bottom: 12px;
  }

  .call {
    position: relative;
    font-size: 14px;
    display: inline-block;
    color: #666;

    span {
      position: relative;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 5px;
      height: 4px;
      width: 100%;
      background: #eee;
    }
  }

  .place {
    font-size: 18px;
  }

  .location {
    font-size: 15px;
    color: #888;
    margin: 2px 0 3px;
  }

  .date {
    margin-bottom: 30px;
  }

  .navgation {
    word-break: keep-all;
    font-size: 15px;
    line-height: 1.4;
    margin-top: 50px;

    .sec + .sec {
      margin-top: 40px;
    }

    h2 {
      margin-bottom: 10px;
      border-bottom: 1px solid #e2e2e2;
      position: relative;
      font-size: 17px;
      font-weight: 200;
      color: #777;
    }

    .bus {
      margin-bottom: 8px;

      span {
        color: #e35151;
      }
    }

    h3 {
      color: #888;
      font-size: 14px;
      font-weight: inherit;
    }

    .station {
      font-size: 14px;
      span {
        display: block;
      }
    }

    dl {
      + dl {
        margin-top: 4px;
      }
      div {
        display: flex;
      }

      dt {
        width: 92px;
        margin-right: 12px;
      }
    }

    .mix {
      .line1 {
        color: #bc1919;
      }

      .line2 {
        color: #ff8b1e;
      }

      .bus {
        color: #666;
      }
    }

    .shuttle {
      margin-top: 20px !important;
    }
  }
`;

function About() {
  return (
    <Wrapper className='section'>
      <span className='bar'></span>
      <div className='about'>
        <p className='date'>2022년 9월 24일 토요일 낮 12시</p>
        <p className='place'>헤이스 가든</p>
        <p className='location'>서울시 서초구 내곡동 1-399 (신흥안길 40-15)</p>
        <a href='tel:024516166' className='call'>
          <span>02.452.6166</span>
        </a>
      </div>
      <Map />
      <MapButton />
      <div className='navgation'>
        <div className='sec'>
          <h2>
            <span>버스 정류장</span>
          </h2>
          <p>서울특별시립 어린이병원 / 강동-송파 예비군 훈련장</p>
        </div>
        <div className='sec'>
          <h2>
            <span>버스를 이용하여 한 번에 오실 경우</span>
          </h2>
          <p className='bus'>
            광역버스 <span>9408</span> (영등포 - 분당)
          </p>
          <h3>타는 곳</h3>
          <p className='station'>
            <span>영등포역 / 영등포시장연흥극장 / 대방역</span> <span>노량진수산시장 / 노량진역 / 흑석동 </span> <span>국립 현충원 / 고속터미널(호남선) / 반포역(7호선)</span>
            <span>영동사거리 / 교보타워앞(강남) / 강남역(2호선)</span>
            <span>양재역 (3호선) / 양재시민의 숲</span>
          </p>
        </div>
        <div className='sec mix'>
          <h2>
            <span>지하철과 버스를 연계하여 오실 경우</span>
          </h2>
          <dl>
            <div>
              <dt className='subway line1'>양재시민의숲역</dt>
              <dd>지하철(신분당선) 하차 후 4번 출구</dd>
            </div>
            <div>
              <dt className='bus'>버스 환승</dt>
              <dd> 440 / 452 / 9404 / 9408</dd>
            </div>
          </dl>
          <dl>
            <div>
              <dt className='subway line2'>양재역</dt>
              <dd>지하철(3호선) 하차 후 11번 출구</dd>
            </div>
            <div>
              <dt className='bus'>버스 환승</dt>
              <dd>440 452 471 9404 9408</dd>
            </div>
          </dl>
        </div>
        <div className='sec shuttle'>
          <h2>
            <span>셔틀</span>
          </h2>
          <p>
            양재시민의숲역 4번 출구에서 오전 10시 30분부터
            <br /> 오후 2시 30분까지 7분 간격으로 운행됩니다.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
