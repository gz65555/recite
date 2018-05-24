"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 19/03/2018.
 */
const index_1 = require("../index");
function createUser(object) {
    const user = new index_1.model.User(object);
    return user.save();
}
exports.createUser = createUser;
function findUserByUnionId(unionId) {
    return new Promise((resolve, reject) => {
        index_1.model.User.findOne({
            unionId
            // sex:1
        }, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
}
exports.findUserByUnionId = findUserByUnionId;
//# sourceMappingURL=user.dao.js.map