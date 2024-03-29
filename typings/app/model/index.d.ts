// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCategory from '../../../app/model/category';
import ExportOrder from '../../../app/model/order';
import ExportPrice from '../../../app/model/price';
import ExportShop from '../../../app/model/shop';
import ExportTime from '../../../app/model/time';
import ExportUser from '../../../app/model/user';
import ExportWxform from '../../../app/model/wxform';

declare module 'egg' {
  interface IModel {
    Category: ReturnType<typeof ExportCategory>;
    Order: ReturnType<typeof ExportOrder>;
    Price: ReturnType<typeof ExportPrice>;
    Shop: ReturnType<typeof ExportShop>;
    Time: ReturnType<typeof ExportTime>;
    User: ReturnType<typeof ExportUser>;
    Wxform: ReturnType<typeof ExportWxform>;
  }
}
