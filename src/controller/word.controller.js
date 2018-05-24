"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 24/03/2018.
 */
const service_1 = require("../service");
async function getAllWordsFromNotebook(ctx, next) {
    ctx.body = await service_1.service.word.findAllWordByNotebookId(ctx.params.notebookId);
    await next();
}
exports.getAllWordsFromNotebook = getAllWordsFromNotebook;
async function addWordToNotebook(ctx, next) {
    const word = ctx.request.body.word;
    const notebookId = ctx.request.body.notebookId;
    const user = ctx.user;
    ctx.body = await service_1.service.word.addWordToNotebook(word, notebookId, user.uid);
    await next();
}
exports.addWordToNotebook = addWordToNotebook;
async function deleteWordFromNotebook(ctx, next) {
    const user = ctx.user;
    const id = ctx.params.id;
    ctx.body = await service_1.service.word.deleteWord(id, user.uid);
    await next();
}
exports.deleteWordFromNotebook = deleteWordFromNotebook;
async function findWord(ctx, next) {
    ctx.body = await service_1.service.word.findWord(ctx.params.word);
    await next();
}
exports.findWord = findWord;
//# sourceMappingURL=word.controller.js.map