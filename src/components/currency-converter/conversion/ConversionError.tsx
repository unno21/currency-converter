import styled from 'styled-components';

type Props = {
  message: string;
}

const ErrorLabel = styled.div`
  background-color: #ffebeb;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.25rem;

  > span {
    color: #ff211d;
    font-size: 0.85rem
  }
`;

const ConversionError = ({ message }: Props) => {
  return (<ErrorLabel>
      <span>{message}</span>
    </ErrorLabel>
  );
}

export default ConversionError;