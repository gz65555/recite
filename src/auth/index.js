"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 18/03/2018.
 */
const token_1 = require("./token");
const result_util_1 = require("../utils/result.util");
function verifyTokenMiddleware() {
    return async function (ctx, next) {
        const token = ctx.request.req.headers['authenticated'];
        if (token) {
            ctx.user = token_1.verify(token);
        }
        await next();
    };
}
exports.verifyTokenMiddleware = verifyTokenMiddleware;
function needUserMiddleware() {
    return async function (ctx, next) {
        if (!ctx.user) {
            ctx.body = result_util_1.ResultUtil.error(result_util_1.MessageError.NOT_LOGIN);
        }
        else {
            await next();
        }
    };
}
exports.needUserMiddleware = needUserMiddleware;
//# sourceMappingURL=index.js.map