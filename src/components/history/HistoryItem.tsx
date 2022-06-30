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

  > div {
    height: 1.5rem;
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

type HistoryPropType = {
  fromLabel: string; 
  toLabel: string;
  onRemove: (id: string) => void;
  id: string;
}

const HistoryItem = ({ fromLabel, toLabel, onRemove, id }: HistoryPropType) => {
  return (
    <HistoryItemContainer>

      <ConversionItem fromLabel={fromLabel} toLabel={toLabel} />
      
      <div onClick={() => onRemove(id)}><Icon.Close /></div>

    </HistoryItemContainer>
  );
}

export default HistoryItem;