"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 18/03/2018.
 */
const db_1 = require("../db");
const result_util_1 = require("../utils/result.util");
const token_1 = require("../auth/token");
async function login(unionId) {
    try {
        const res = await db_1.dao.user.findUserByUnionId(unionId);
        if (res) {
            return result_util_1.ResultUtil.success({ token: token_1.generaterToken(res._id) });
        }
        else {
            return result_util_1.ResultUtil.error(result_util_1.MessageError.AUTH_ERROR);
        }
    }
    catch (e) {
        return result_util_1.ResultUtil.error(result_util_1.MessageError.AUTH_ERROR);
    }
}
exports.login = login;
//# sourceMappingURL=user.service.js.map