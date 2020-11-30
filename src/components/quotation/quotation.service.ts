import { CambioTodayService, MONEY } from '../../common/services/cambio-today.service';
import ParseUtil from '../../common/utils/parseUtil';
import { QuotationDTO } from './dtos/quetation.dto';

const serviceExtractValueDolar = async (): Promise<QuotationDTO> => {
  return parseQuotationDTO(MONEY.DOLAR);
}
const serviceExtractValueEuro = async (): Promise<QuotationDTO> => {
  return parseQuotationDTO(MONEY.EURO);
}
const serviceExtractValueReal = async (): Promise<QuotationDTO> => {
  return parseQuotationDTO(MONEY.REAL);
}

const parseQuotationDTO = async (typeMoney: string): Promise<QuotationDTO> => {
  const quotationDTO: QuotationDTO = new QuotationDTO();
  quotationDTO.moneda = typeMoney;
  quotationDTO.precio = ParseUtil.MathRound100(await CambioTodayService.getNumberSearchQuoteTargetARS(typeMoney));
  return quotationDTO;
}

export const QuatationService = {
  serviceExtractValueDolar,
  serviceExtractValueEuro,
  serviceExtractValueReal,
};