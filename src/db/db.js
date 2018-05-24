"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 17/03/2018.
 */
const mongoose = require("mongoose");
const db_config_1 = require("./../config/db.config");
async function connect() {
    await mongoose.connect('mongodb://localhost/word', db_config_1.default);
    // const res = await dao.user.findUserByUnionId('husongggg')
    // console.log(res)
}
exports.connect = connect;
//# sourceMappingURL=db.js.map