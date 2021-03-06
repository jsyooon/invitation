import { useCallback, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 0 6% 100px;

  h2 {
    font-size: 18px;
    font-weight: normal;
    color: #555;
    font-family: YeolrinMyeongjo-Light, serif;
    text-align: center;

    + p {
      font-size: 14px;
      color: #888;
      text-align: center;
      margin-top: 2px;
    }
  }

  .img {
    position: absolute;
    top: -7px;
    left: 0;
    width: 100%;
    display: block;
    margin-bottom: 20px;
    opacity: 0.1;
    img {
      display: block;
      width: 90%;
      margin: 0 auto;
    }
  }

  .sec {
    margin-top: 40px;

    &.closed {
      .toggle {
        ~ .toggle {
          margin-top: 15px;
        }
      }
    }
  }

  .button {
    display: flex;
    position: relative;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px;

    + .button {
      margin-top: 20px;
    }

    em {
      width: 50px;
      text-align: right;
      display: inline-block;
      font-style: normal;
      color: #999;
    }

    div {
      display: flex;
      align-items: center;
      margin-left: auto;
    }

    .copy {
      text-align: right;

      .bank {
        font-size: 13px;
        color: #888;
      }

      .number {
        display: block;
        color: #666;
        font-size: 15px;
        font-weight: 200;
      }
    }

    strong {
      font-weight: 300;
    }
  }

  .toggle {
    display: block;
    width: 100%;
    height: 44px;
    border-radius: 22px;
    border: 1px solid #ccc;
    font-weight: 200;

    &.show {
      border-color: #8a8a8a;
    }
  }

  .row {
    display: none;
    margin-top: 30px;

    &.show {
      display: block;

      + .toggle {
        margin-top: 30px;
      }
    }
  }
`;

function Pay() {
  const [index, setIndex] = useState(-1);

  const onToggle = useCallback((number) => {
    setIndex((prev) => (prev === number ? -1 : number));
  }, []);

  const onCopy = useCallback((e) => {
    const value = e.currentTarget.innerText.replace(/-/g, '');
    console.log(e.target);
    navigator.clipboard.writeText(value).then(() => {
      alert('??????????????? ?????????????????????.');
    });
  }, []);

  return (
    <Wrapper className='section'>
      <span className='img'>
        <img src='./resources/hjh2_black.webp' alt='' />
      </span>
      <h2>????????? ????????? ???????????????.</h2>
      <p>??????????????? ???????????? ???????????????.</p>
      <div className={`sec${index !== 0 ? ' closed' : ''}`}>
        <button type='button' className={`toggle ${index === 0 ? ' show' : ''}`} onClick={() => onToggle(0)}>
          ?????? ??? ???????????? ??????
        </button>
        <div className={`row${index === 0 ? ' show' : ''}`}>
          <div className='button'>
            <span className='text'>
              <em>??????</em> <strong>?????????</strong>
            </span>

            <div>
              <button type='button' className='copy' onClick={(e) => onCopy(e)}>
                <span className='bank'>????????????</span>
                <span className='number'>110-422-831454</span>
              </button>
            </div>
          </div>

          <div className='button'>
            <span className='text'>
              <em>?????????</em> <strong>?????????</strong>
            </span>
            <div>
              <button type='button' className='copy' onClick={(e) => onCopy(e)}>
                <span className='bank'>????????????</span>
                <span className='number'>565-910280-76707</span>
              </button>
            </div>
          </div>
        </div>
        <button type='button' className={`toggle ${index === 1 ? ' show' : ''}`} onClick={() => onToggle(1)}>
          ?????? ??? ???????????? ??????
        </button>

        <div className={`row${index === 1 ? ' show' : ''}`}>
          <div className='button'>
            <span className='text'>
              <em>??????</em> <strong>?????????</strong>
            </span>

            <div>
              <button type='button' className='copy' onClick={(e) => onCopy(e)}>
                <span className='bank'>????????????</span>
                <span className='number'>1002-336-243580</span>
              </button>
            </div>
          </div>

          <div className='button'>
            <span className='text'>
              <em>?????????</em> <strong>?????????</strong>
            </span>
            <div>
              <button type='button' className='copy' onClick={(e) => onCopy(e)}>
                <span className='bank'>????????????</span>
                <span className='number'>351-06-1688-01-010</span>
              </button>
            </div>
          </div>

          <div className='button'>
            <span className='text'>
              <em>?????????</em> <strong>?????????</strong>
            </span>
            <div>
              <button type='button' className='copy' onClick={(e) => onCopy(e)}>
                <span className='bank'>????????????</span>
                <span className='number'>223-21-0302-774</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Pay;
