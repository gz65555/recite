"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 17/03/2018.
 */
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const wordSchema = new mongoose.Schema({
    shanbay_id: Number,
    notebookId: { type: Number, index: true },
    uid: mongoose_1.Schema.Types.ObjectId,
    pron: String,
    en_definitions: [
        {
            type: String,
            explain: String,
        }
    ],
    cn_definitions: [
        {
            type: String,
            explain: String,
        }
    ],
    content: String,
    uk_audio: String,
    us_audio: String,
    example: [
        {
            translation: String,
            sentence: String,
            point: String
        }
    ]
});
exports.default = mongoose.model('word', wordSchema);
//# sourceMappingURL=word.js.map