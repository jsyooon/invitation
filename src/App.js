import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './style';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Gallery from './Gallery';
import About from './About';
import Pay from './Pay';
import Footer from './Footer';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

  &.scroll {
    height: auto;
  }
`;

function App() {
  const [load, setLoad] = useState('');
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad('load');
    }, 300);

    setTimeout(() => {
      setScroll(true);
    }, 3000);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Wrapper className={`wrap ${load} ${scroll ? 'scroll' : ''}`}>
        <Section1 load={load} />
        <Section2 />
        <Section3 />
        <Gallery />
        <About />
        <Pay />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
