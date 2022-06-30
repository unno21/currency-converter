import styled from 'styled-components';
import HistoryItem from './HistoryItem';

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
  return (
    <>
      <HistoryHeaderContainer>
        <HistoryTitle>Previous amounts</HistoryTitle>
        <HistoryClear>CLEAR ALL</HistoryClear>
      </HistoryHeaderContainer>
      <HistoryCotainer>
        <HistoryItem></HistoryItem>
        <HistoryItem></HistoryItem>
        <HistoryItem></HistoryItem>
      </HistoryCotainer>
    </>
  );
}

export default ConversionHistory;