"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 17/03/2018.
 */
const Koa = require("koa");
require("./service/word.service");
const controller_1 = require("./controller");
const auth_1 = require("./auth");
const bodyParser = require("koa-bodyparser");
const app = new Koa();
app.use(bodyParser());
//获取用户
app.use(auth_1.verifyTokenMiddleware());
//路由
app.use(controller_1.router.routes()).use(controller_1.router.allowedMethods());
app.listen(3000, () => {
    console.log('server start');
});
//# sourceMappingURL=app.js.map