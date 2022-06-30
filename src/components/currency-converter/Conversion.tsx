import styled from 'styled-components';

import ConversionInput from './conversion/ConversionInput';
import ConversionResult from './conversion/ConversionResult';

const ConversionContainer = styled.div`
  margin-bottom: 1rem;
`;

const Conversion = () => {

  const onConvert = (data: string) => {
    // @TODO fetch API
    console.log(data);
  }

  return (
    <ConversionContainer>
      <ConversionInput onConvert={onConvert} />
      <ConversionResult />
    </ConversionContainer>
  )
}

export default Conversion;