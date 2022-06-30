import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ConversionInput from './conversion/ConversionInput';
import ConversionResult from './conversion/ConversionResult';
import { fetchCurrencies } from '../../store/slices/currency';
import { useAppDispatch, RootState } from "../../store";

const ConversionContainer = styled.div`
  margin-bottom: 1rem;
`;

const Conversion = () => {

  const dispatch = useAppDispatch();
  const currencies = useSelector((state: RootState) => state.currency.value);
  const [shouldSwap, setShouldSwap] = useState(false);

  useEffect(() => {
    if (Object.keys(currencies).length === 0) {
      dispatch(fetchCurrencies());
    }
  }, []);

  const handleSwap = () => {
    setShouldSwap(!shouldSwap);
  }

  return (
    <ConversionContainer>
      <ConversionInput shouldSwap={shouldSwap} />
      <ConversionResult onSwap={handleSwap}/>
    </ConversionContainer>
  )
}

export default Conversion;