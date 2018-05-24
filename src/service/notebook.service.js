"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 18/03/2018.
 */
const db_1 = require("../db");
const result_util_1 = require("../utils/result.util");
async function findAllNotebooksByUid(uid) {
    try {
        const res = await db_1.dao.notebook.findAllNotebooksByUid(uid);
        return result_util_1.ResultUtil.success(res);
    }
    catch (e) {
        return result_util_1.ResultUtil.error(result_util_1.MessageError.FINDALL_NOTEBOOK_FAIL);
    }
}
exports.findAllNotebooksByUid = findAllNotebooksByUid;
async function createNotebook(name, uid) {
    try {
        const notebook = await db_1.dao.notebook.findOneByUidAndName(uid, name);
        if (notebook) {
            return result_util_1.ResultUtil.error(result_util_1.MessageError.NOTEBOOK_EXIST);
        }
        const res = await db_1.dao.notebook.createNotebook(name, uid);
        return result_util_1.ResultUtil.success(res);
    }
    catch (e) {
        console.log(e);
        return result_util_1.ResultUtil.error(result_util_1.MessageError.ADD_NOTEBOOK_FAIL);
    }
}
exports.createNotebook = createNotebook;
async function deleteNotebook(id, uid) {
    const notebook = await db_1.dao.notebook.findOneById(id);
    if (notebook.uid.equals(uid)) {
        const res = await db_1.dao.notebook.deleteNotebook(id);
        return result_util_1.ResultUtil.success(res);
    }
    else {
        return result_util_1.ResultUtil.error(result_util_1.MessageError.NO_PERMISSION);
    }
}
exports.deleteNotebook = deleteNotebook;
async function updateNotebook(id, name, uid) {
    const notebook = await db_1.dao.notebook.findOneById(id);
    if (notebook.uid.equals(uid)) {
        const res = await db_1.dao.notebook.updateNotebook(id, name);
        return result_util_1.ResultUtil.success(res);
    }
    else {
        return result_util_1.ResultUtil.error(result_util_1.MessageError.NO_PERMISSION);
    }
}
exports.updateNotebook = updateNotebook;
//# sourceMappingURL=notebook.service.js.map