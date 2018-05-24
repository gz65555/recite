"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 18/03/2018.
 */
const jwt = require("jsonwebtoken");
const config_1 = require("../config");
function generaterToken(uid) {
    return jwt.sign({ uid }, config_1.authConfig.secretKey, { expiresIn: config_1.authConfig.tokenExpire });
}
exports.generaterToken = generaterToken;
function verify(token) {
    try {
        return jwt.verify(token, config_1.authConfig.secretKey);
    }
    catch (e) {
        console.log(e);
        return null;
    }
}
exports.verify = verify;
//# sourceMappingURL=token.js.map