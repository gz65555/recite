/**
 * Created by husong on 18/03/2018.
 */
import * as Router from 'koa-router'
import {needUserMiddleware} from "../auth"
import * as notebook from './notebook.controller'
import * as user from './user.controller'
import * as word from './word.controller'

export const router = new Router()
export const protectRouter = new Router()
export const unprotectRouter = new Router()

//认证用户才可以有的操作
protectRouter.post('/notebook', needUserMiddleware(), notebook.addNoteBook)
protectRouter.delete('/notebook', needUserMiddleware(), notebook.deleteNotebook)
protectRouter.get('/notebook', needUserMiddleware(), notebook.getAllNotebook)
protectRouter.put('/notebook', needUserMiddleware(), notebook.updateNotebook)
protectRouter.post('/word', needUserMiddleware(), word.addWordToNotebook)
protectRouter.delete('/word', needUserMiddleware(), word.deleteWordFromNotebook)

//无需是认证用户即可的操作
unprotectRouter.post('/login', user.login)
unprotectRouter.get('/word', word.getAllWordsFromNotebook)
unprotectRouter.get('/word/:word', word.findWord)

router.get('/', async function (ctx) {
  ctx.body = 'hello world!'
})

router.use('/api', protectRouter.routes(), protectRouter.allowedMethods())
router.use('/api', unprotectRouter.routes(), unprotectRouter.allowedMethods())
