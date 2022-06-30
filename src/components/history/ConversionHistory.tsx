import { useState, useEffect } from 'react';

import styled from 'styled-components';
import HistoryItem from './HistoryItem';
import { removeFromHistory, removeAllHistory } from '../../store/slices/history';
import { useSelector, useDispatch } from 'react-redux';
import { confirm } from "react-confirm-box";

import { RootState } from '../../store';
import { formatConversionData } from '../../utils/formatHistory';
import { HistoryItemType } from '../../store/slices/history';

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

const ShowMoreContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem 0;

  > span {
    cursor: pointer;
    
    &:hover {
      color: #65a30d;
    }
  }
`;

const HistoryCotainer = styled.div`
  margin-bottom: 2rem;
`;


const ConversionHistory = () => {

  const dispatch = useDispatch();
  const histories = useSelector((state: RootState) => state.history.value);
  const currencies = useSelector((state: RootState) => state.currency.value);
  const [maxHistory, setMaxHistory] = useState(5);
  const defaultShownHistory: HistoryItemType[] = [];
  const [shownHistory, setShownHistory] = useState(defaultShownHistory);
  const shouldShowTheShowMore = shownHistory.length < histories.length;

  const handleClearAllHistory = async () => {
    const result = await confirm("Are you sure you want to remove all history?");
    if (result) {
      dispatch(removeAllHistory());
    }
  }

  const handleShowMoreHistory = () => {
    setMaxHistory(maxHistory + 5);
  }

  useEffect(() => {
    const shownHistory = histories.slice();
    shownHistory.splice(maxHistory);
    setShownHistory(shownHistory);
  }, [maxHistory, histories]);

  return (
    histories.length > 0 ?
    <>
      <HistoryHeaderContainer>
        <HistoryTitle>Previous amounts</HistoryTitle>
        <HistoryClear onClick={handleClearAllHistory}>CLEAR ALL</HistoryClear>
      </HistoryHeaderContainer>
      <HistoryCotainer>
        {shownHistory.map(history => {
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
        {shouldShowTheShowMore && <ShowMoreContainer onClick={handleShowMoreHistory}><span>Show More</span></ShowMoreContainer>}
      </HistoryCotainer>
    </> : <></>
  );
}

export default ConversionHistory;