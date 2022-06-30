import styled from 'styled-components';

type ConversionProps = {
  fromLabel: string,
  toLabel: string,
};

const CurrencyFromLabel = styled.span`
  display: block;
  font-size: 0.75rem;
`;

const CurrencyToLabel = styled.span`
  display: block;
  font-size: 1.25rem;
`;

const ConversionItem = ({ fromLabel, toLabel }: ConversionProps) => {
  return (
    <>
      <CurrencyFromLabel>{fromLabel}</CurrencyFromLabel>
      <CurrencyToLabel>{toLabel}</CurrencyToLabel>
    </>
  );
}

export default ConversionItem;