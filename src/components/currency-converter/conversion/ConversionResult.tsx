import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Icon from '../../../icons/Icon';
import ConversionItem from './ConversionItem';
import { RootState } from '../../../store';

const ResultContainer = styled.div`
  width: 100%;
  border: 1px solid #333333;
  position: relative;
  margin-top: 1rem;
  border-radius: 0.25rem;
  padding: 1rem;

  > div {
    height: 1.5rem;
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

type PropResult = {
  onSwap: () => void;
}

const ConversionResult = ({ onSwap }: PropResult) => {
  const conversionData = useSelector((state: RootState) => state.conversion.value);

  return conversionData.rate > 0 ? (
    <ResultContainer>

      <ConversionItem 
        fromLabel={`${conversionData.amount} ${conversionData.from} equals`} 
        toLabel={`${conversionData.convertedAmount} ${conversionData.to}`} />

      <div onClick={onSwap}><Icon.SwapVertical /></div>
      
    </ResultContainer>
  ) : <></>;
}

export default ConversionResult;