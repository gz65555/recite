"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const axios_1 = require("axios");
const result_util_1 = require("../utils/result.util");
/**
 * Created by husong on 18/03/2018.
 */
/**
 * 在一本notebook里找所有的单词
 * @param {number} notebookId
 * @returns {Promise<any>}
 */
async function findAllWordByNotebookId(notebookId) {
    const res = db_1.dao.word.findAllWordByNotebookId(notebookId);
    return result_util_1.ResultUtil.success(res);
}
exports.findAllWordByNotebookId = findAllWordByNotebookId;
/**
 * 删除一个收藏的单词
 * @param {"mongoose".Types.ObjectId} id
 * @param {"mongoose".Types.ObjectId} uid
 * @returns {Promise<any>}
 */
async function deleteWord(id, uid) {
    const word = await db_1.dao.word.findWordById(id);
    if (word.uid.equals(uid)) {
        const res = await db_1.dao.word.deleteWord(id);
        return result_util_1.ResultUtil.success(res);
    }
    else {
        return result_util_1.ResultUtil.error(result_util_1.MessageError.NO_PERMISSION);
    }
}
exports.deleteWord = deleteWord;
/**
 * 添加单词到一本notebook里
 * @param {string} word
 * @param {number} notebookId
 * @param uid
 * @returns {Promise<any>}
 */
async function addWordToNotebook(word, notebookId, uid) {
    try {
        const notebook = await db_1.dao.notebook.findOneById(notebookId);
        if (notebook.uid === uid) {
            const wordObject = findWordFromShanBay(word);
            const wordRes = await db_1.dao.word.addWord(wordObject, uid, notebookId);
            return result_util_1.ResultUtil.success(wordRes);
        }
        else {
            return result_util_1.ResultUtil.error(result_util_1.MessageError.NO_PERMISSION);
        }
    }
    catch (e) {
        console.log(e);
        return result_util_1.ResultUtil.error(result_util_1.MessageError.ADD_WORD_FAIL);
    }
}
exports.addWordToNotebook = addWordToNotebook;
async function findWord(word) {
    return result_util_1.ResultUtil.success(await findWordFromShanBay(word));
}
exports.findWord = findWord;
/**
 *
 * @param {string} word
 * @returns {Promise<"mongoose".Document>}
 */
async function findWordFromShanBay(word) {
    const res = await axios_1.default.get('https://api.shanbay.com/bdc/search/', { params: { word } });
    const result = res.data.data;
    const exampleRes = await axios_1.default.get('https://api.shanbay.com/bdc/example/', {
        params: {
            type: 'sys',
            vocabulary_id: result.id
        }
    });
    return copyRequestResultToWord(result, exampleRes.data.data);
}
function copyRequestResultToWord(result, exampleResult) {
    const enDefinitions = parseEnDefinition(result.en_definitions);
    const cnDefinition = parseCnDefinition(result.cn_definition);
    const example = parseExample(exampleResult);
    return new db_1.Word({
        shanbay_id: result.id,
        en_definitions: enDefinitions,
        cn_definitions: cnDefinition,
        content: result.content,
        uk_audio: result.uk_audio,
        us_audio: result.us_audio,
        pron: result.pron,
        example: example
    });
}
function parseCnDefinition(cnDefinition) {
    return cnDefinition.defn.split('\n').map(item => {
        const arr = item.split('.');
        return { type: arr[0].trim(), explain: arr[1].trim() };
    });
}
function parseEnDefinition(enDefinitions) {
    const map = [];
    for (let k in enDefinitions) {
        map.push({ type: k, explain: enDefinitions[k].join(';') });
    }
    return map;
}
function parseExample(example) {
    return example.map(item => ({
        translation: item.translation,
        sentence: item.first + item.mid + item.last,
        point: item.mid
    }));
}
//# sourceMappingURL=word.service.js.map