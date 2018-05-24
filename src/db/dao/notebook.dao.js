"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by husong on 19/03/2018.
 */
const _1 = require("../");
function findAllNotebooksByUid(uid) {
    return new Promise((resolve, reject) => {
        _1.Notebook.find({ uid }, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
}
exports.findAllNotebooksByUid = findAllNotebooksByUid;
async function createNotebook(name, uid) {
    const notebook = new _1.Notebook({
        name: name,
        uid: uid
    });
    return notebook.save();
}
exports.createNotebook = createNotebook;
async function findOneByUidAndName(uid, name) {
    return new Promise((resolve, reject) => {
        _1.Notebook.findOne({
            uid: uid,
            name: name
        }, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
}
exports.findOneByUidAndName = findOneByUidAndName;
function findOneById(id) {
    return new Promise((resolve, reject) => {
        _1.Notebook.findById(id, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
}
exports.findOneById = findOneById;
function deleteNotebook(id) {
    return new Promise((resolve, reject) => {
        _1.Notebook.deleteOne({ _id: id }, err => {
            if (err) {
                reject(err);
            }
            else {
                resolve(err);
            }
        });
    });
}
exports.deleteNotebook = deleteNotebook;
async function updateNotebook(id, name) {
    return new Promise((resolve, reject) => {
        _1.Notebook.updateOne({ _id: id }, { name: name }, (err, raw) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
exports.updateNotebook = updateNotebook;
//# sourceMappingURL=notebook.dao.js.map