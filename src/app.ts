/**
 * Created by husong on 17/03/2018.
 */
import * as Koa from 'koa'
import './service/word.service'
import {router} from "./controller";
import {verifyTokenMiddleware} from "./auth";
import * as bodyParser from 'koa-bodyparser';

const app = new Koa()
app.use(bodyParser())

//获取用户
app.use(verifyTokenMiddleware())
//路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
  console.log('server start')
})
