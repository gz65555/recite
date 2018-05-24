"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 17/03/2018.
 */
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    sex: Number,
    unionId: { type: String, index: true },
    avatarUrl: String,
    joinDate: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map