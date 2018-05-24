"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 18/03/2018.
 */
const notebook_1 = require("./modelAndSchema/notebook");
const user_1 = require("./modelAndSchema/user");
const word_1 = require("./modelAndSchema/word");
const _dao = require("./dao");
const db_1 = require("./db");
db_1.connect();
exports.Notebook = notebook_1.default;
exports.Word = word_1.default;
exports.dao = _dao;
exports.model = {
    User: user_1.default
};
//# sourceMappingURL=index.js.map