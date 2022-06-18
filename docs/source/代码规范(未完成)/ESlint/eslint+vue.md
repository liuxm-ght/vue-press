### Eslint + Vue
  * 在初始化项目时选择是否使用ESLint管理代码(选择Y则默认开启),会生成 .editorconfig、.eslintignore、.eslintrc.js 文件
  1. .editorconfig文件（主要用于配置IDE）
      1. 说明：规范缩进风格，缩进大小，tab长度以及字符集等,解决不同IDE的编码范设置。EditorConfig 插件会去查找当前编辑文件的所在文件夹或其上级文件夹中是否有 .editorconfig 文件。如果有，则编辑器的行为会与 .editorconfig 文件中定义的一致，并且其优先级高于编辑器自身的设置。
      2. 配置：
        ```
          root = true
          
          [*] // 对所有文件有效  //[*js]只对js文件有效
          
          charset = utf-8 //#设置编码格式
          
          indent_style = space //#缩进类型  可选space和tab
          
          indent_size = 2 //#缩进数量可选整数值2 or 4,或者tab
         
          end_of_line = lf // #换行符的格式
          
          insert_final_newline = true //# 是否在文件的最后插入一个空行  可选true和false
          
          trim_trailing_whitespace = true //# 是否删除行尾的空格  可选择true和false
        ```

  2. .eslintignore文件（放置需要ESLint忽略的文件，只对.js文件有效）
      /build/
      /config/
      /dist/
      /src/utils/
      /src/router/*.js

  3. .eslintrc.js 文件(用来配置ESLint的检查规则)
      module.exports = {
          //此项是用来告诉eslint找当前配置文件不能往父级查找
          root: true, 
          //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
          parser: 'babel-eslint',
          //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
          parserOptions: {
              sourceType: 'module'
          },
          //此项指定环境的全局变量，下面的配置指定为浏览器环境
          env: {
              browser: true,
          },
          // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
          // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错
          extends: 'standard',
          // required to lint *.vue files
          // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
          plugins: [
              'html'
          ],
          // add your custom rules here
          // 下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
          // 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
          // "off" -> 0 关闭规则
          // "warn" -> 1 开启警告规则
          //"error" -> 2 开启错误规则
          // 了解了上面这些，下面这些代码相信也看的明白了
        rules: {
          // allow async-await
          'generator-star-spacing': 'off',
          // allow debugger during development
          'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
          // js语句结尾必须使用分号
          'semi': ['off', 'always'],
          // 三等号
          'eqeqeq': 0,
          // 强制在注释中 // 或 /* 使用一致的空格
          'spaced-comment': 0,
          // 关键字后面使用一致的空格
          'keyword-spacing': 0,
          // 强制在 function的左括号之前使用一致的空格
          'space-before-function-paren': 0,
          // 引号类型
          "quotes": [0, "single"],
          // 禁止出现未使用过的变量
          // 'no-unused-vars': 0,
          // 要求或禁止末尾逗号
          'comma-dangle': 0
        }
      }










<!-- 原文链接：https://blog.csdn.net/IT_HLM/article/details/78776630 -->
