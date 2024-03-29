// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCommon from '../../../app/service/common';
import ExportOrder from '../../../app/service/order';
import ExportShop from '../../../app/service/shop';
import ExportUser from '../../../app/service/user';
import ExportWechat from '../../../app/service/wechat';

declare module 'egg' {
  interface IService {
    common: ExportCommon;
    order: ExportOrder;
    shop: ExportShop;
    user: ExportUser;
    wechat: ExportWechat;
  }
}
