import { Router } from 'express';
import { asyncMdl } from '../../common/asyncMdl';
import { QuotationController } from './quotation.controller';

const router = Router();

const api = '/cotizacion';

router.get(`${api}/dolar`, asyncMdl(QuotationController.getQuotationDolar));
router.get(`${api}/euro`, asyncMdl(QuotationController.getQuotationEuro));
router.get(`${api}/real`, asyncMdl(QuotationController.getQuotationReal));

export default router;