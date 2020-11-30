import { Application } from 'express';
import quotationApis from '../components/quotation/quotation.api';

export default (app: Application): void => {
  app.use(quotationApis);
  // ... other apis
};