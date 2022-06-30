import styled from 'styled-components';
import Icon from '../../icons/Icon';
import ConversionItem from '../currency-converter/conversion/ConversionItem';

const HistoryItemContainer = styled.div`
  width: 100%;
  background-color: #e3e3e3;
  position: relative;
  margin-top: 0.75rem;
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

const HistoryItem = () => {
  return (
    <HistoryItemContainer>

      <ConversionItem fromLabel='1.00 Autralian Dollar equals' toLabel='0.64 Euro'/>
      
      <Icon.Close />
    </HistoryItemContainer>
  );
}

export default HistoryItem;