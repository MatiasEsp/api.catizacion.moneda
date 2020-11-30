import IQuote from './quote.interface';
export default class QuoteDTO implements IQuote {
  updated: string = '';
  source: string = '';
  target: string = '';
  value: number = 0;
  quantity: number = 0;
  amount: number = 0;
}