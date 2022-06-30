import { Currency } from './currencyCodeApi';

type ParseInput = (input: string) => {
  amount: number;
  from: string;
  to: string
}

export const parseInput: ParseInput = (input) => {
  const extractedData = extractData(input);
  const [ validatedInput , amount, decimal, from, to ] = extractedData;
  return {
    amount: Number(amount),
    from,
    to,
  };
};

export const extractData = (input: string) => {
  const extractedData = /^(\d+(\.\d*)?) ([a-zA-Z]{3}) to ([a-zA-Z]{3})$/g.exec(input);
  if (extractedData !== null) {
    return extractedData;
  }

  throw new Error(`Invalid input structure`);
}