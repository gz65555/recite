"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
/**
 * 在一本notebook里找所有的单词
 * @param {number} notebookId
 * @returns {Promise<any>}
 */
function findAllWordByNotebookId(notebookId) {
    return new Promise((resolve, reject) => {
        index_1.Word.find({ notebookId }, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
}
exports.findAllWordByNotebookId = findAllWordByNotebookId;
/**
 * 删除一个收藏的单词
 * @param {number} wordId
 */
function deleteWord(wordId) {
    return new Promise((resolve, reject) => {
        index_1.Word.deleteOne({ _id: wordId }, (err => {
            if (err) {
                reject(err);
            }
            else {
                resolve(err);
            }
        }));
    });
}
exports.deleteWord = deleteWord;
/**
 *
 * @param word 已经存在的word对象
 * @param uid 用户id
 */
async function addWord(word, uid, notebookId) {
    word.uid = uid;
    word.notebookId = notebookId;
    return await word.save();
}
exports.addWord = addWord;
/**
 * 根据id查单词
 * @param id
 * @returns {Promise<any>}
 */
async function findWordById(id) {
    return new Promise((resolve, reject) => {
        index_1.Word.findById(id, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
}
exports.findWordById = findWordById;
//# sourceMappingURL=word.dao.js.map