"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 18/03/2018.
 */
const Router = require("koa-router");
const auth_1 = require("../auth");
const notebook = require("./notebook.controller");
const user = require("./user.controller");
const word = require("./word.controller");
exports.router = new Router();
exports.protectRouter = new Router();
exports.unprotectRouter = new Router();
//认证用户才可以有的操作
exports.protectRouter.post('/notebook', auth_1.needUserMiddleware(), notebook.addNoteBook);
exports.protectRouter.delete('/notebook', auth_1.needUserMiddleware(), notebook.deleteNotebook);
exports.protectRouter.get('/notebook', auth_1.needUserMiddleware(), notebook.getAllNotebook);
exports.protectRouter.put('/notebook', auth_1.needUserMiddleware(), notebook.updateNotebook);
exports.protectRouter.post('/word', auth_1.needUserMiddleware(), word.addWordToNotebook);
exports.protectRouter.delete('/word', auth_1.needUserMiddleware(), word.deleteWordFromNotebook);
//无需是认证用户即可的操作
exports.unprotectRouter.post('/login', user.login);
exports.unprotectRouter.get('/word', word.getAllWordsFromNotebook);
exports.unprotectRouter.get('/word/:word', word.findWord);
exports.router.get('/', async function (ctx) {
    ctx.body = 'hello world!';
});
exports.router.use('/api', exports.protectRouter.routes(), exports.protectRouter.allowedMethods());
exports.router.use('/api', exports.unprotectRouter.routes(), exports.unprotectRouter.allowedMethods());
//# sourceMappingURL=index.js.map