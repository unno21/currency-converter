import { useEffect, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import styled from 'styled-components';

import Icon from '../../../icons/Icon';
import ConversionError from './ConversionError';
import { parseInput } from '../../../utils/parseInput';
import { swapCurrencyInput } from "../../../utils/swap-currency-input";
import { convertCurrency, swap } from '../../../store/slices/conversion';
import { useAppDispatch } from "../../../store";

const InputContainer = styled.div`
  width: 100%;
  border: 1px solid #333333;
  position: relative;
  margin-top: 1rem;
  border-radius: 0.25rem;

  > input {
    border-radius: 0.25rem;
    background-color: tranparent;
    border: 0;
    width: 100%;
    padding: 0.5rem 2rem 0.5rem 0.5rem;
  }

  > img {
    height: 1.5rem;
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

type Inputs = {
  data: string,
};

type PropInputs = {
  shouldSwap: boolean;
}

const ConversionInput = ({ shouldSwap }: PropInputs) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const swappedCurrency = swapCurrencyInput(searchValue);
    setSearchValue(swappedCurrency);
    dispatch(swap());
  }, [shouldSwap]);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const validations = {
    required: true,
    pattern: /^\d+(\.\d*)? [a-zA-Z]{3} to [a-zA-Z]{3}$/,
  }
  const inputFieldForm = {...register("data", validations)}
  const onSubmit: SubmitHandler<Inputs> = async formData => {
    const parsedInput = parseInput(formData.data);
    dispatch(convertCurrency(parsedInput));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <input value={searchValue} {...inputFieldForm} onChange={(e) => {
            inputFieldForm.onChange(e);
            handleChangeInput(e);
          }
        }/>
        <Icon.Magnify /> 
      </InputContainer>
      {errors.data && errors.data.type === 'required' && <ConversionError message='Please input data' />}
      {errors.data && errors.data.type === 'pattern' && <ConversionError message='Invalid input structure' />}
    </form>
  );
}

export default ConversionInput;