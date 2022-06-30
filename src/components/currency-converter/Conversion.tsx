import { useState } from 'react';

import styled from 'styled-components';

import ConversionInput from './conversion/ConversionInput';
import ConversionResult from './conversion/ConversionResult';

const ConversionContainer = styled.div`
  margin-bottom: 1rem;
`;

const Conversion = () => {

  const [shouldSwap, setShouldSwap] = useState(false);

  const handleSwap = () => {
    setShouldSwap(!shouldSwap);
  }

  return (
    <ConversionContainer>
      <ConversionInput shouldSwap={shouldSwap} />
      <ConversionResult onSwap={handleSwap}/>
    </ConversionContainer>
  )
}

export default Conversion;