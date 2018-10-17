/**
 * Created by husong on 18/03/2018.
 */
import {Context} from "koa";
import {service} from "../service";

export async function login(ctx: Context | any, next) {
  switch (ctx.params.type) {
    case 'wx':
      ctx.body = await service.user.login(ctx.request.body.unionId)
      break;
  }
}