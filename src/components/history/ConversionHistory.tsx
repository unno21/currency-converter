import styled from 'styled-components';
import HistoryItem from './HistoryItem';
import { removeFromHistory, removeAllHistory } from '../../store/slices/history';
import { useSelector, useDispatch } from 'react-redux';
import { confirm } from "react-confirm-box";

import { RootState } from '../../store';
import { formatConversionData } from '../../utils/formatHistory';

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
  const currencies = useSelector((state: RootState) => state.currency.value);

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
        {histories.map(history => {
          const { from, to, amount, convertedAmount } = formatConversionData(history, currencies);
          return <HistoryItem 
            id={history.id}
            key={history.id}
            fromLabel={`${amount} ${from} equals`} 
            toLabel={`${convertedAmount} ${to}`}
            onRemove={(id: string) => { dispatch(removeFromHistory(id)) }}
            />
          }
        )}
      </HistoryCotainer>
    </>
  );
}

export default ConversionHistory;