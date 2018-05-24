"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../service");
async function addNoteBook(ctx, next) {
    const user = ctx.user;
    ctx.body = await service_1.service.notebook.createNotebook(ctx.request.body.name, user.uid);
    await next();
}
exports.addNoteBook = addNoteBook;
async function deleteNotebook(ctx, next) {
    const user = ctx.user;
    ctx.body = await service_1.service.notebook.deleteNotebook(ctx.params.id, user.uid);
    await next();
}
exports.deleteNotebook = deleteNotebook;
async function updateNotebook(ctx, next) {
    const user = ctx.user;
    const body = ctx.request.body;
    ctx.body = await service_1.service.notebook.updateNotebook(body.id, body.name, user.uid);
    await next();
}
exports.updateNotebook = updateNotebook;
async function getAllNotebook(ctx, next) {
    const user = ctx.user;
    ctx.body = await service_1.service.notebook.findAllNotebooksByUid(user.uid);
    await next();
}
exports.getAllNotebook = getAllNotebook;
//# sourceMappingURL=notebook.controller.js.map