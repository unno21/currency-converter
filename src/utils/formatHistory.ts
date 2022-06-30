import { HistoryItemType } from "../store/slices/history";
import { Currency } from "./currencyCodeApi";

export type FormattedConverion = {
  from: string;
  to: string;
  amount: string;
  convertedAmount: string;
}

export const formatConversionData = (history: HistoryItemType, currencies: Currency): FormattedConverion => {
  const from = currencies[history.value.from];
  const to = currencies[history.value.to];
  const nf = new Intl.NumberFormat();
  const amount = nf.format(Number(Number(history.value.amount).toFixed(2)));
  const convertedAmount = nf.format(Number(Number(history.value.convertedAmount).toFixed(2)));

  return {
    from,
    to,
    amount,
    convertedAmount,
  }
}