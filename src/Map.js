import styled from 'styled-components';
import { Map as KaKaoMap, MapMarker } from 'react-kakao-maps-sdk';

const Wrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  margin-top: 10px;
`;

function Map() {
  return (
    <Wrapper className='section'>
      <KaKaoMap center={{ lat: 37.454401387635514, lng: 127.07599526740086 }} style={{ width: '100%', height: '100%' }} level={6}>
        <MapMarker position={{ lat: 37.454401387635514, lng: 127.07599526740086 }}></MapMarker>
      </KaKaoMap>
    </Wrapper>
  );
}

export default Map;
