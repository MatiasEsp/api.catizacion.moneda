import Axios from 'axios';
import QuoteDTO from './quote.dto';
import IQuote from './quote.interface';

const API_KEY_CAMBIO_TODAY = '6390|46*BB_Um^rE^AoCUrtO~PO6naYKp~0Q8';
const URL_CAMBIO_TODAY = 'https://api.cambio.today/v1';

export const MONEY = {
  PESO: 'peso',
  DOLAR: 'dolar',
  EURO: 'euro',
  REAL: 'real',
}

const getTypeMoneyToApi = (money: string): string => {
  switch (money) {
    case MONEY.PESO:
      return 'ARS';
    case MONEY.DOLAR:
      return 'USD';
    case MONEY.EURO:
      return 'EUR';
    case MONEY.REAL:
      return 'BRL';
    default:
      return '';
  }
}

const getNumberSearchQuoteTargetARS = async (money: string): Promise<number> => {
  const source: string = getTypeMoneyToApi(money);
  const target: string = getTypeMoneyToApi(MONEY.PESO);
  const quantity: string = '1';
  try {
    const res: any = await getQuotesCambioToday(source, target, quantity);
    const quote: QuoteDTO = res.data.result as any as IQuote;
    return quote.value;
  } catch (error) {
    throw Error(error);
  }
}

const getQuotesCambioToday = async (source: string, target: string, quantity: string): Promise<any> => {
  return Axios.get(`${URL_CAMBIO_TODAY}/quotes/${source}/${target}/json?quantity=${quantity}&key=${API_KEY_CAMBIO_TODAY}`)
}

export const CambioTodayService = {
  getNumberSearchQuoteTargetARS
}