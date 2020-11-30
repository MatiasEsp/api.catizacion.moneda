import { CambioTodayService, MONEY } from '../../common/services/cambio-today.service';
import { QuotationDTO } from './dtos/quetation.dto';

const serviceExtractValueDolar = async (): Promise<QuotationDTO> => {
  return parseQuotationDTO(MONEY.PESO);
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
  quotationDTO.precio = ParseUtil.MathRound100(await CambioTodayService.getNumberSearchQuoteARS(typeMoney));
  return quotationDTO;
}

export const QuatationService = {
  serviceExtractValueDolar,
  serviceExtractValueEuro,
  serviceExtractValueReal,
};