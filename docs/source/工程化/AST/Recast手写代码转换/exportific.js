#!/usr/bin/env node
const recast = require("recast");
const {
  identifier: id,
  expressionStatement,
  memberExpression,
  assignmentExpression,
  arrowFunctionExpression
} = recast.types.builders

const fs = require('fs')
const path = require('path')
// 截取参数
const options = process.argv.slice(2)

//如果没有参数，或提供了-h 或--help选项，则打印帮助
if (options.length === 0 || options.includes('-h') || options.includes('--help')) {
  console.log(`
    采用commonjs规则，将.js文件内所有函数修改为导出形式。
    选项： -r 或 --rewrite 可直接覆盖原有文件
  `)
  process.exit(0)
}

// 只要有-r 或--rewrite参数，则rewriteMode为true
let rewriteMode = options.includes('-r') || options.includes('--rewrite')

// 获取文件名
const clearFileArg = options.filter((item) => {
  return !['-r', '--rewrite', '-h', '--help'].includes(item)
})

// 只处理一个文件
let filename = clearFileArg[0]

const writeASTFile = function (ast, filename, rewriteMode) {
  const newCode = recast.print(ast).code
  if (!rewriteMode) {
    // 非覆盖模式下，将新文件写入*.export.js下
    filename = filename.split('.').slice(0, -1).concat(['export', 'js']).join('.')
  }
  // 将新代码写入文件
  fs.writeFileSync(path.join(process.cwd(), filename), newCode)
}

//recast.run —— 命令行文件读取，获取文件AST
//run: 通过命令行读取js文件，并转化成ast以供处理。
recast.run(function (ast, printSource) {
  let funcIds = []
  //visit: 遍历ast树，获取有效的AST对象并进行更改。
  recast.types.visit(ast, {
    //visitFunctionDeclaration遍历 操作函数声明 ， visitExpressionStatement操作赋值表达式
    visitFunctionDeclaration(path) {
      //获取遍历到的函数名、参数、块级域
      const node = path.node
      const funcName = node.id
      const params = node.params
      const body = node.body

      funcIds.push(funcName.name)
      //expressionStatement 赋值表达式作用域 assignmentExpression创造表达式 arrowFunctionExpression箭头函数表达式
      const rep = expressionStatement(assignmentExpression('=', memberExpression(id('exports'), funcName),
        arrowFunctionExpression(params, body)))
      path.replace(rep)
      return false
    }
  })


  recast.types.visit(ast, {
    // 遍历所有的函数调用
    visitCallExpression(path) {
      const node = path.node;
      if (funcIds.includes(node.callee.name)) {
        node.callee = memberExpression(id('exports'), node.callee)
      }
      return false
    }
  })

  writeASTFile(ast, filename, rewriteMode)
})

// 现在尝试一下
// node exportific demo.js
// 已经可以在当前目录下找到源码变更后的demo.export.js文件了。
// npm发包

// 编辑一下package.json文件

// {
// "name": "exportific",
// "version": "0.0.1",
// "description": "改写源码中的函数为可exports.XXX形式",
// "main": "exportific.js",
// "bin": {
// "exportific": "./exportific.js"
// },
// "keywords": [],
// "author": "wanthering",
// "license": "ISC",
// "dependencies": {
// "recast": "^0.15.3"
// }
// }