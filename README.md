# 听写单词项目服务器

## 安装和启动

```
npm install
npm 
```



## 技术栈

- koa2 （服务器）
- koa-router （路由）
- koa-bodyparser （body解析）
- jsonwebtoken （基于token）
- mongoose（ODM框架）
- mongodb（数据库）

## 主要功能

- 单词
  - 查询单词
  - 添加单词进单词本
  - 删除单词本里的单词
- 单词本
  - 添加单词本
  - 删除单词本
  - 修改单词本名称
  - 对单词本进行听写
- 账户管理
  - 使用微信登录
  - 使用微博登录
  - 绑定邮箱
  - 修改绑定邮箱
- 设置
  - 修改单词间的间隔时间