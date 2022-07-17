import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Telephone } from '@styled-icons/foundation';
import { MessageCircle } from '@styled-icons/evaicons-solid/';

const Wrapper = styled.div`
  margin: 70px auto 0;
  padding: 0 6%;

  .row {
    display: none;
    margin-top: 30px;

    &.show {
      display: block;
    }
  }

  .button {
    display: flex;
    align-items: center;
    padding: 0 20px;
    position: relative;
    margin: 0 auto;

    + .button {
      margin-top: 15px;
    }

    em {
      display: inline-block;
      width: 50px;
      text-align: right;
      font-style: normal;
      color: #999;
    }

    div {
      margin-left: auto;
      display: flex;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 38px;
      height: 38px;
      background: #888;
      text-align: center;
      border-radius: 100%;
      color: #fff;
    }

    svg {
      display: block;
      width: 26px;
    }

    .sms {
      margin-left: 8px;
      svg {
        width: 22px;
        margin: 0 0 2px 2px;
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

  &.closed {
    .toggle {
      ~ .toggle {
        margin-top: 15px;
      }
    }
  }

  .show + .toggle {
    margin-top: 30px;
  }
`;

function Phone() {
  const [index, setIndex] = useState(-1);

  const onToggle = useCallback((number) => {
    setIndex((prev) => (prev === number ? -1 : number));
  }, []);

  return (
    <Wrapper className={index !== 0 ? 'closed' : ''}>
      <button type='button' className={`toggle ${index === 0 ? ' show' : ''}`} onClick={() => onToggle(0)}>
        신랑 측에 연락하기
      </button>

      <div className={`row${index === 0 ? ' show' : ''}`}>
        <div className='button'>
          <span className='text'>
            <em>신랑</em> <strong>윤주혁</strong>
          </span>
          <div>
            <a href='tel:01097971672' className='tel'>
              <Telephone />
            </a>
            <a href='sms:01097971672' className='sms'>
              <MessageCircle />
            </a>
          </div>
        </div>
        <div className='button'>
          <span className='text'>
            <em>아버지</em> <strong>윤시규</strong>
          </span>
          <div>
            <a href='tel:01097971672' className='tel'>
              <Telephone />
            </a>
            <a href='sms:01097971672' className='sms'>
              <MessageCircle />
            </a>
          </div>
        </div>
        <div className='button'>
          <span className='text'>
            <em>어머니</em> <strong>정진선</strong>
          </span>
          <div>
            <a href='tel:01022131672' className='tel'>
              <Telephone />
            </a>
            <a href='sms:01022131672' className='sms'>
              <MessageCircle />
            </a>
          </div>
        </div>
      </div>

      <button type='button' className={`toggle ${index === 1 ? ' show' : ''}`} onClick={() => onToggle(1)}>
        신부 측에 연락하기
      </button>

      <div className={`row${index === 1 ? ' show' : ''}`}>
        <div className='button'>
          <span className='text'>
            <em>신부</em> <strong>임현주</strong>
          </span>
          <div>
            <a href='tel:01073708354' className='tel'>
              <Telephone />
            </a>
            <a href='sms:01073708354' className='sms'>
              <MessageCircle />
            </a>
          </div>
        </div>
        <div className='button'>
          <span className='text'>
            <em>아버지</em> <strong>임기조</strong>
          </span>
          <div>
            <a href='tel:01032883335' className='tel'>
              <Telephone />
            </a>
            <a href='sms:01032883335' className='sms'>
              <MessageCircle />
            </a>
          </div>
        </div>
        <div className='button'>
          <span className='text'>
            <em>어머니</em> <strong>신귀연</strong>
          </span>
          <div>
            <a href='tel:01087098354' className='tel'>
              <Telephone />
            </a>
            <a href='sms:01087098354' className='sms'>
              <MessageCircle />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Phone;
