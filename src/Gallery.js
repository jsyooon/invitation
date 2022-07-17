import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Viewer from './Viewer';

const Wrapper = styled.section`
  padding: 50px 0 100px;

  .flower {
    width: 80px;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }

  .swiper-wrapper {
    padding: 30px 0;

    .swiper-slide {
      width: auto;
    }
    .img {
      position: relative;
      width: 280px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 10%;

      @media screen and (max-width: 300px) {
        width: 220px;
      }

      &:before {
        display: block;
        content: '';
        padding-top: 100%;
      }
    }

    .img1 {
      background-position: 60% 10%;
    }

    .img6 {
      background-position: 50% 0;
    }

    .img9 {
      background-position: 50% 20%;
    }

    ${new Array(10).fill('').map(
      (v, i) => `.img${i + 1} {
      background-image: url('./resources/photo/${i + 1}.jpg');
    }`
    )}
  }
`;

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const onClick = useCallback((i) => {
    setToggle(true);
    setActiveIndex(i);
  }, []);

  return (
    <>
      <Wrapper className='section'>
        <div className='flower'>
          <img src='./resources/flower.webp' alt='' />
        </div>
        <Swiper spaceBetween={10} slidesPerView='auto' loop={true} centeredSlides={true} loopedSlides='2'>
          {new Array(10).fill('').map((v, i) => (
            <SwiperSlide key={`img${i}`}>
              <div className={`img img${i + 1}`} onClick={() => onClick(i)}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
      {toggle && <Viewer setToggle={setToggle} activeIndex={activeIndex} />}
    </>
  );
}

export default Gallery;
