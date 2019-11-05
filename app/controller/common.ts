
import { Controller } from 'egg';
import { success, fail } from '../utils/handler';

export default class CommonController extends Controller {

  /**
   * 公共获取列表数据的接口
   */
  async getList() {
    const { ctx } = this;
    const { modelName } = ctx.query;
    const result = await ctx.model[modelName].find({});
    ctx.body = success(result);
  }

  /**
   * 公共保存或者修改的接口
   */
  async save() {
    const { ctx } = this;
    ctx.body = fail('我是失败的返回');
  }

  /**
   * 公共删除的接口
   */
  async delete() {
    const { ctx } = this;
    ctx.body = fail('我是失败的返回');
  }
}
