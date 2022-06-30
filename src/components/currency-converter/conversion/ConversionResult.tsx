import styled from 'styled-components';

import Icon from '../../../icons/Icon';
import ConversionItem from './ConversionItem';

const ResultContainer = styled.div`
  width: 100%;
  border: 1px solid #333333;
  position: relative;
  margin-top: 1rem;
  border-radius: 0.25rem;
  padding: 1rem;

  > img {
    height: 1.5rem;
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const ConversionResult = () => {
  return (
    <ResultContainer>

      <ConversionItem fromLabel='1.00 Autralian Dollar equals' toLabel='0.64 Euro'/>

      <Icon.SwapVertical />

    </ResultContainer>
  );
}

export default ConversionResult;