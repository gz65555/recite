"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 18/03/2018.
 */
function success(data) {
    return { code: 0, data };
}
function error(error) {
    return { code: error };
}
var MessageError;
(function (MessageError) {
    MessageError[MessageError["NOT_LOGIN"] = 1001] = "NOT_LOGIN";
    MessageError[MessageError["AUTH_ERROR"] = 1002] = "AUTH_ERROR";
    MessageError[MessageError["NO_PERMISSION"] = 1003] = "NO_PERMISSION";
    MessageError[MessageError["ADD_WORD_FAIL"] = 1101] = "ADD_WORD_FAIL";
    MessageError[MessageError["ADD_NOTEBOOK_FAIL"] = 1102] = "ADD_NOTEBOOK_FAIL";
    MessageError[MessageError["NOTEBOOK_EXIST"] = 1103] = "NOTEBOOK_EXIST";
    MessageError[MessageError["FINDALL_NOTEBOOK_FAIL"] = 1104] = "FINDALL_NOTEBOOK_FAIL";
})(MessageError = exports.MessageError || (exports.MessageError = {}));
exports.ResultUtil = {
    success,
    error
};
//# sourceMappingURL=result.util.js.map