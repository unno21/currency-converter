import { useForm, SubmitHandler } from "react-hook-form";
import styled from 'styled-components';

import Icon from '../../../icons/Icon';
import ConversionError from './ConversionError';

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

type InputProps = {
  onConvert: (data: string) => void,
  onInput?: () => void,
}

const ConversionInput = ({ onConvert }: InputProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const dataValidation = {
    required: true,
    pattern: /^\d+(\.\d*)? [a-zA-Z]{3} to [a-zA-Z]{3}/,
  }
  const onSubmit: SubmitHandler<Inputs> = formData => {
    onConvert(formData.data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <input {...register("data", dataValidation)} />
        <Icon.Magnify /> 
      </InputContainer>
      {errors.data && errors.data.type === 'required' && <ConversionError message='Please input data' />}
      {errors.data && errors.data.type === 'pattern' && <ConversionError message='Invalid input structure' />}
    </form>
  );
}

export default ConversionInput;