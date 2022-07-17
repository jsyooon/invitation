import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const Wrapper = styled.div`
  visibility: hidden;
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  &.visible {
    visibility: visible;
  }

  img {
    max-width: 100%;
  }

  .swiper {
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    z-index: 1;

    &:before,
    &:after {
      position: absolute;
      content: '';
      background: #333;
      transform: rotate(45deg);
    }

    &:before {
      top: 50%;
      left: 0;
      width: 100%;
      height: 1px;
    }

    &:after {
      top: 0;
      left: 50%;
      width: 1px;
      height: 100%;
    }
  }
`;

function Viewer({ activeIndex, setToggle }) {
  const [visible, setVisible] = useState(false);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(activeIndex + 2, 0);
      setVisible(true);
    }
  }, [swiper, activeIndex]);

  const onClose = useCallback(() => {
    setToggle(false);
  }, [setToggle]);

  return (
    <Wrapper className={visible ? 'visible' : ''}>
      <Swiper loop={true} loopedSlides='2' onSwiper={setSwiper}>
        {new Array(10).fill('').map((v, i) => (
          <SwiperSlide key={`img${i}`}>
            <div>
              <img src={`./resources/photo/${i + 1}.jpg`} alt='' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button type='button' className='close' onClick={onClose}></button>
    </Wrapper>
  );
}

export default Viewer;
