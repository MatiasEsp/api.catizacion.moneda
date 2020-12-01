import { Request, Response, NextFunction } from 'express';
import { QuotationDTO } from './dtos/quetation.dto';
import { QuatationService } from './quotation.service';

const getQuotationDolar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quotationDto: QuotationDTO = await QuatationService.serviceExtractValueDolar();
    return res.json(quotationDto);
  } catch (error) {
    return res.status(400).json({ status: 'error', msjError: '', error });
  }
};
const getQuotationEuro = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quotationDto: QuotationDTO = await QuatationService.serviceExtractValueEuro();
    return res.json(quotationDto);
  } catch (error) {
    return res.status(400).json({ status: 'error', msjError: '', error });
  }
};
const getQuotationReal = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quotationDto: QuotationDTO = await QuatationService.serviceExtractValueReal();
    return res.json(quotationDto);
  } catch (error) {
    return res.status(400).json({ status: 'error', msjError: '', error });
  }
};

export const QuotationController = {
  getQuotationEuro,
  getQuotationDolar,
  getQuotationReal,
}