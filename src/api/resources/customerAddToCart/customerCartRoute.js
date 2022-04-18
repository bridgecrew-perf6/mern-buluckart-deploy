import express from 'express';
import customerCartCtrl from './customerCartCtrl';
import { sanitize } from '../../../middleware/sanitizer';
// import { validateBody, schemas } from '../../../middleware/validator';

export const custCartRouter = express.Router();
 custCartRouter.route('/create').post(sanitize(),customerCartCtrl.create);
 custCartRouter.route('/cartlist').get(sanitize(),customerCartCtrl.getCustCartList);
 custCartRouter.route('/getbycustId').get(sanitize(),customerCartCtrl.getCustCartListbyCustId);
 custCartRouter.route('/updatebycustId').post(sanitize(),customerCartCtrl.updateIteamtByCustId);
 custCartRouter.route('/removebycustId').delete(sanitize(),customerCartCtrl.removeByCustId);
custCartRouter.route('/multipleremove').delete(sanitize(),customerCartCtrl.removemultipleItemByCustId);









