"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../service");
async function login(ctx, next) {
    ctx.body = await service_1.service.user.login(ctx.request.body.unionId);
}
exports.login = login;
//# sourceMappingURL=user.controller.js.map