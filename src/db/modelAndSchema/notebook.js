"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 17/03/2018.
 */
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const notebookSchema = new mongoose.Schema({
    name: String,
    uid: { type: mongoose_1.Schema.Types.ObjectId, index: true }
});
exports.default = mongoose.model('notebook', notebookSchema);
//# sourceMappingURL=notebook.js.map