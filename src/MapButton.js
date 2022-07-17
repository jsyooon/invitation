import styled from 'styled-components';
import { DocumentCopy } from '@styled-icons/fluentui-system-regular';
import { useCallback } from 'react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;

  span {
    color: #666;
    font-size: 15px;
  }

  div {
    display: inline-flex;
    margin-left: auto;
  }

  a {
    width: 38px;
    height: 38px;
    border-radius: 100%;
    overflow: hidden;
    border: 1px solid #ccc;

    &:not(:first-child) {
      margin-left: 8px;
    }

    .icon {
      display: block;
      width: 100%;
      padding-top: 100%;
      background-position: 50% 50%;
      background-size: 95% auto !important;
      background-repeat: no-repeat;
    }
  }

  .tmap {
    .icon {
      background-image: url('./resources/tmap.webp');
    }
  }

  .naver {
    .icon {
      background-image: url('./resources/naver.webp');
    }
  }

  .kakao {
    background: #fbe300;
    .icon {
      background-image: url('./resources/kakao.webp');
    }
  }

  .copy {
    display: inline-flex;
    align-items: center;
    svg {
      fill: #aaa;
      display: block;
      width: 26px;
      margin: 0 auto;
    }
  }
`;

function MapButton() {
  const onCopy = useCallback((e) => {
    e.preventDefault();

    const address = '서울시 서초구 신흥안길 40-15 헤이스 가든';
    navigator.clipboard.writeText(address).then(() => {
      alert('주소가 복사되었습니다.');
    });
  }, []);
  return (
    <Wrapper>
      <span>지도 앱에서 보기</span>
      <div>
        <a
          href='https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx64e7ddb061c04c358311ee5d1034ad40&name=%ED%97%A4%EC%9D%B4%EC%8A%A4%EA%B0%80%EB%93%A0&lon=127.07599526740086&lat=37.454401387635514'
          target='_blank'
          rel='noreferrer'
          className='tmap'>
          <span className='icon'></span>
        </a>
        <a href='http://naver.me/5lYoHYar' target='_blank' rel='noreferrer' className='naver'>
          <span className='icon'></span>
        </a>
        <a href='http://kko.to/yfxhDgMk1' target='_blank' className='kakao' rel='noreferrer'>
          <span className='icon'></span>
        </a>
        <a href='#copy' className='copy' onClick={(e) => onCopy(e)}>
          <DocumentCopy />
        </a>
      </div>
    </Wrapper>
  );
}

export default MapButton;
