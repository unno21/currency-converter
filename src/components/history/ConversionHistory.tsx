import styled from 'styled-components';
import HistoryItem from './HistoryItem';
import { removeFromHistory, removeAllHistory } from '../../store/slices/history';
import { useSelector, useDispatch } from 'react-redux';
import { confirm } from "react-confirm-box";

import { RootState } from '../../store';

const HistoryHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const HistoryTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

const HistoryClear = styled.span`
  font-size: 0.85rem;
  cursor: pointer;

  &:hover {
    color: #f87171; 
  }
`;

const HistoryCotainer = styled.div`
`;


const ConversionHistory = () => {

  const dispatch = useDispatch();
  const histories = useSelector((state: RootState) => state.history.value);

  const handleClearAllHistory = async () => {
    const result = await confirm("Are you sure you want to remove all history?");
    if (result) {
      dispatch(removeAllHistory());
    }
  }

  return (
    <>
      <HistoryHeaderContainer>
        <HistoryTitle>Previous amounts</HistoryTitle>
        <HistoryClear onClick={handleClearAllHistory}>CLEAR ALL</HistoryClear>
      </HistoryHeaderContainer>
      <HistoryCotainer>
        {histories.map(history => (
          <HistoryItem 
            id={history.id}
            key={history.id}
            fromLabel={`${history.value.amount} ${history.value.from} equals`} 
            toLabel={`${history.value.convertedAmount} ${history.value.to}`}
            onRemove={(id: string) => { dispatch(removeFromHistory(id)) }}
            />
        ))}
      </HistoryCotainer>
    </>
  );
}

export default ConversionHistory;