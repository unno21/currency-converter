import { extractData } from "./parseInput";

export const swapCurrencyInput = (input: string): string  => {
  try {
    const extractedData = extractData(input);
    const [ validatedInput , amount, decimal, from, to ] = extractedData;
    return `${amount} ${to} to ${from}`;
  } catch (e) {
    return '';
  }
};