"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 18/03/2018.
 */
const token_1 = require("../auth/token");
const result_util_1 = require("../utils/result.util");
const user_dao_1 = require("../db/dao/user.dao");
async function verifyUser(unionId) {
    const res = await user_dao_1.findUserByUnionId(unionId);
    if (res) {
        return result_util_1.ResultUtil.success({ token: token_1.generaterToken(res._id) });
    }
    return result_util_1.ResultUtil.error(result_util_1.MessageError.AUTH_ERROR);
}
exports.verifyUser = verifyUser;
//# sourceMappingURL=auth.service.js.map