#### 编译阶段
  1. 概念说明
    1. template 模板 ：Vue的模板基于纯HTML，基于Vue的模板语法，还是可以按照以前HTML式写结构。
    2. AST 抽象语法树： Abstract Syntax Tree 的简称，主要做三步
      1. parse:Vue使用HTML的Parser将HTML模板解析为AST
      2. optimizer:对AST进行一些优化static静态节点的标记处理，提取最大的静态树，当_update更新界面时，会有一个patch的过程，diff算法会直接跳过静态节点，从而减少了patch的过程，优化了patch的性能
      3. generateCode:根据 AST 生成 render 函数
    3. renderFn 渲染函数 ：渲染函数是用来生成Virtual DOM(vdom)的。Vue推荐使用模板来构建我们的应用界面，在底层实现中Vue会将模板编译成renderFn函数，当然我们也可以不写模板，直接写渲染函数，以获得更好的控制
    参考：https://juejin.cn/post/6844903650607759367

  2. 前言：
    vm._render 就是大家经常听到的 render 函数，由两种方式得到：
      1. 用户自己提供，在编写组件时，用 render 选项代替模版
      2. 由编译器编译组件模版生成 render 选项
      今天我们就来深入研究编译器，看看它是怎么将我们平时编写的类 html 模版编译成 render 函数的。
    编译器的核心由三部分组成：
      1. 解析，将类 html 模版转换为 AST 对象
      2. 优化，也叫静态标记，遍历 AST 对象，标记每个节点是否为静态节点，以及标记出静态根节点
      3. 生成渲染函数，将 AST 对象生成渲染函数
      由于编译器这块儿的代码量太大，所以，将这部分知识拆成三部分来讲，第一部分就是：解析。
      参考：https://juejin.cn/post/6959019076983209992

  3. compileToFunctions --- 主要是根据编译结果获取render和staticRenderFns，并存储起来
    1. 执行编译函数，得到编译结果 -> compiled
    2. 处理编译期间产生的 error 和 tip，分别输出到控制台
    3. 将编译得到的字符串代码，通过 new Function(codeStr) 转换成可执行的函数
    4. 缓存编译结果
    代码：
  ```ts
      // 编译模版，得到 动态渲染函数和静态渲染函数
      const { render, staticRenderFns } = compileToFunctions(template, {
        // 在非生产环境下，编译时记录标签属性在模版字符串中开始和结束的位置索引
        outputSourceRange: process . env . NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        // 界定符，默认 {{}}
        delimiters: options.delimiters,
        // 是否保留注释
        comments: options.comments
      }, this)
      export function createCompileToFunctionFn (compile: Function): Function {
        const cache = Object.create(null)
        return function compileToFunctions ( 
          template: string,
          options?: CompilerOptions,
          vm?: Component
        ): CompiledFunctionResult {
          /**
          * 1、执行编译函数，得到编译结果 -> compiled
          * 2、处理编译期间产生的 error 和 tip，分别输出到控制台
          * 3、将编译得到的字符串代码通过 new Function(codeStr) 转换成可执行的函数
          * 4、缓存编译结果
          */
          if (cache[key]) {
            return cache[key]
          }
          // 执行编译函数，得到编译结果
          const compiled = compile(template, options)
          // 转换编译得到的字符串代码为函数，通过 new Function(code) 实现
          const res = {}
          const fnGenErrors = []
          res.render = createFunction(compiled.render, fnGenErrors)
          res.staticRenderFns = compiled.staticRenderFns.map(code => {
            return createFunction(code, fnGenErrors)
          })
          // 缓存编译结果
          return (cache[key] = res)
        }
      }
  ``` 
  4. compile 编译函数 --- 合并基础配置，根据核心编译器，返回编译结果
    编译函数，做了两件事：
    1. 选项合并，将 options 配置项 合并到 finalOptions(baseOptions) 中，得到最终的编译配置对象
    2. 调用核心编译器 baseCompile 得到编译结果
    3. 将编译期间产生的 error 和 tip 挂载到编译结果上，返回编译结果
  ```ts
    const baseOptions: CompilerOptions = {
      expectHTML: true,
      // 处理 class、style、v-model
      modules,
      // 处理指令
      // 是否是 pre 标签
      isPreTag,
      // 是否是自闭合标签
      isUnaryTag,
      // 规定了一些应该使用 props 进行绑定的属性
      mustUseProp,
      // 可以只写开始标签的标签，结束标签浏览器会自动补全
      canBeLeftOpenTag,
      // 是否是保留标签（html + svg）
      isReservedTag,
      // 获取标签的命名空间
      getTagNamespace,
      staticKeys: genStaticKeys(modules)
    }
    function compile (
      template: string,
      options?: CompilerOptions
    ): CompiledResult {
      // 以平台特有的编译配置为原型创建编译选项对象
      const finalOptions = Object.create(baseOptions)
      。。。
      // 如果存在编译选项，合并 options 和 baseOptions
      if (options) {
        。。。
        /**
         * 将 options 中的配置项合并到 finalOptions
         */
        // 合并自定义 module
        if (options.modules) {
          finalOptions.modules = (baseOptions.modules || []).concat(options.modules)
        }
        // 合并自定义指令
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          )
        }
        // 拷贝其它配置项
        for (const key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key]
          }
        }
      }
      。。。
      // 到这里为止终于到重点了，调用核心编译函数，传递模版字符串和最终的编译选项，得到编译结果
      // 前面做的所有事情都是为了构建平台最终的编译选项
      const compiled = baseCompile(template.trim(), finalOptions)
      。。。
      return compiled //返回 compiled编译结果
    }
  ```
  
  5. baseCompile 编译器核型
  ```ts
    function baseCompile (
      template: string,
      options: CompilerOptions
    ): CompiledResult {
      // 将模版解析为 AST，每个节点的 ast 对象上都设置了元素的所有信息，比如，标签信息、属性信息、插槽信息、父节点、子节点等。
      // 具体有那些属性，查看 start 和 end 这两个处理开始和结束标签的方法
      const ast = parse(template.trim(), options)
      // 优化，遍历 AST，为每个节点做静态标记
      // 标记每个节点是否为静态节点，然后进一步标记出静态根节点
      // 这样在后续更新中就可以跳过这些静态节点了
      // 标记静态根，用于生成渲染函数阶段，生成静态根节点的渲染函数
      optimize(ast, options)
      // 从 AST 生成渲染函数，生成像这样的代码，比如：code.render = "_c('div',{attrs:{"id":"app"}},_l((arr),function(item){return _c('div',{key:item},[_v(_s(item))])}),0)"
      const code = generate(ast, options)
      return {
        ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
      }
    }
  ```
    1. parse 解析器 --- 将模版解析成AST
*******暂停 由于编译阶段源码过于庞大，后续有空再详细看源码，现在只是备注
    2. optimize 优化 --- 遍历AST进行静态标记
*******暂停 由于编译阶段源码过于庞大，后续有空再详细看源码，现在只是备注
    3. generate 转换 --- 将AST转为render函数字符串
*******暂停 由于编译阶段源码过于庞大，后续有空再详细看源码，现在只是备注

  6. 生成的AST结构
  ```ts
    const element = {
      type: 1,
      tag,
      attrsList: [{ name: attrName, value: attrVal, start, end }],
      attrsMap: { attrName: attrVal, },
      rawAttrsMap: { attrName: attrVal, type: checkbox },
      // v-if
      ifConditions: [{ exp, block }],
      // v-for
      for: iterator,
      alias: 别名,
      // :key
      key: xx,
      // ref
      ref: xx,
      refInFor: boolean,
      // 插槽
      slotTarget: slotName,
      slotTargetDynamic: boolean,
      slotScope: 作用域插槽的表达式,
      scopeSlot: {
        name: {
          slotTarget: slotName,
          slotTargetDynamic: boolean,
          children: {
            parent: container,
            otherProperty,
          }
        },
        slotScope: 作用域插槽的表达式,
      },
      slotName: xx,
      // 动态组件
      component: compName,
      inlineTemplate: boolean,
      // class
      staticClass: className,
      classBinding: xx,
      // style
      staticStyle: xx,
      styleBinding: xx,
      // attr
      hasBindings: boolean,
      nativeEvents: {同 evetns},
      events: {
        name: [{ value, dynamic, start, end, modifiers }]
      },
      props: [{ name, value, dynamic, start, end }],
      dynamicAttrs: [同 attrs],
      attrs: [{ name, value, dynamic, start, end }],
      directives: [{ name, rawName, value, arg, isDynamicArg, modifiers, start, end }],
      // v-pre
      pre: true,
      // v-once
      once: true,
      parent,
      children: [],
      plain: boolean,
    }
  ```

  7. 静态节点标记

  8. 从 AST 生成渲染函数
  ```ts
    /** 
      *从 AST 生成渲染函数
      *@returns {
        * render: `with(this){return _c(tag, data, children)}`,
        *staticRenderFns: state.staticRenderFns
      *} 
    */
    export function generate(
      ast: ASTElement | void,
      options: CompilerOptions
    ): CodegenResult {
      // 实例化 CodegenState 对象，生成代码的时候需要用到其中的一些东西
      const state = new CodegenState(options)
      // 生成字符串格式的代码，比如：'_c(tag, data, children, normalizationType)'
      // data 为节点上的属性组成 JSON 字符串，比如 '{ key: xx, ref: xx, ... }'
      // children 为所有子节点的字符串格式的代码组成的字符串数组，格式：
      //     `['_c(tag, data, children)', ...],normalizationType`，
      //     最后的 normalization 是 _c 的第四个参数，
      //     表示节点的规范化类型，不是重点，不需要关注
      // 当然 code 并不一定就是 _c，也有可能是其它的，比如整个组件都是静态的，则结果就为 _m(0)
      const code = ast ? genElement(ast, state) : '_c("div")'
      return {
        render: `with(this){return ${code}}`,
        staticRenderFns: state.staticRenderFns
      }
    }
  ```

  9. 总结：
    编译阶段的整体流程：
      利用编译器将模版字符串编译为带有render和staticRenderFns字符串的编译结果，通过new Function将render和staticRenderFns字符串转为函数，返回出来。

  10. 手写系列
    手写 Vue2 系列 之 编译器
    https://juejin.cn/post/6980129607353630756

#### 面试问题
  参考：https://juejin.cn/post/6959019174215548935#heading-10
  1. 面试官 问：简单说一下 Vue 的编译器都做了什么？
    答：
      Vue 的编译器做了三件事情：
      1. 将组件的 html 模版解析成 AST 对象
      2. 优化，遍历 AST，为每个节点做静态标记，标记其是否为静态节点，然后进一步标记出静态根节点，这样在后续更新的过程中就可以跳过这些静态节点了；标记静态根用于生成渲染函数render
      3. 渲染函数阶段，生成静态根节点的渲染函数
      从 AST 生成运行时的渲染函数，即大家说的 render，其实还有一个，就是 staticRenderFns 数组，里面存放了所有的静态节点的渲染函数
      

  2. 面试官 问：详细说一说编译器的解析过程，它是怎么将 html 字符串模版变成 AST 对象的？
    答：
      1. 遍历 HTML 模版字符串，通过正则表达式匹配 "<"
      2. 跳过某些不需要处理的标签，比如：注释标签、条件注释标签、Doctype。
      3. 解析开始标签
        得到一个对象，包括 标签名（tagName）、所有的属性（attrs）、标签在 html 模版字符串中的索引位置
        进一步处理上一步得到的 attrs 属性，将其变成 [{ name: attrName, value: attrVal, start: xx, end: xx }, ...] 的形式
        通过标签名、属性对象和当前元素的父元素生成 AST 对象，其实就是一个 普通的 JS 对象，通过 key、value 的形式记录了该元素的一些信息
        接下来进一步处理开始标签上的一些指令，比如 v-pre、v-for、v-if、v-once，并将处理结果放到 AST 对象上
        处理结束将 ast 对象存放到 stack 数组
        处理完成后会截断 html 字符串，将已经处理掉的字符串截掉
      4. 解析闭合标签
        如果匹配到结束标签，就从 stack 数组中拿出最后一个元素，它和当前匹配到的结束标签是一对。
        再次处理开始标签上的属性，这些属性和前面处理的不一样，比如：key、ref、scopedSlot、样式等，并将处理结果放到元素的 AST 对象上
        然后将当前元素和父元素产生联系，给当前元素的 ast 对象设置 parent 属性为 currentParent，然后将自己放到父元素的 ast 对象的 children 数组中
      5. 最后遍历完整个 html 模版字符串以后，返回 ast 对象
      自述：
      遍历html字符串
      匹配开始到<字符串
      跳过不需要处理的标签 注视 条件注释 doctype
      开始处理开始标签
      得到match对象，包含属性、标签名、它在html的index位置
      处理属性，得到属性对象
      根据上面的match对象信息及它的父元素，生成ast对象
      接下来进一步处理开始标签上的指令，将处理结果挂ast对象上
      完了将处理完的开始标签ast对象压入stack尾部
      根据index截断html字符串，将处理后的字符串截掉
      开始处理结束标签
      正则匹配到结束标签，从stack中找到对应的开始标签ast对象，也就是stack标签的最后一个元素
      继续处理开始标签上的属性，key style slot ref等，处理结果挂ast上
      将当前元素和父元素产生关联，parent = curretparent，将当前元素加入到父元素的children中
      处理完后将stack最后一个元素弹出
      最后遍历完整个html后得到最终的ast对象
  
  3. 面试官：详细说一下静态标记的过程
    答：
      标记静态节点
        通过递归的方式标记所有的元素节点
        如果节点本身是静态节点，但是存在非静态的子节点，则将节点修改为非静态节点
      标记静态根节点，基于静态节点，进一步标记静态根节点
        如果节点本身是静态节点 && 而且有子节点 && 子节点不全是文本节点，则标记为静态根节点
        如果节点本身不是静态根节点，则递归的遍历所有子节点，在子节点中标记静态根
    自述：
      递归遍历整个ast语法树，对所有元素节点进行标记
        如果元素节点的子节点中有非静态的节点，那么当前节点更新为非静态节点
      标记静态根节点，只有节点本身是静态节点，且子节点不只是一个文本节点，那么标为静态根节点
        如果节点不是静态根节点，继续处理标记它的子节点是否为静态根节点
        静态根节点的好处是在patch比对新旧节点的时候，可以跳过静态节点，提升性能

  4. 面试官：什么样的节点才可以被标记为静态节点？
    答：
      文本节点
      节点上没有 v-bind、v-for、v-if 等指令
      非组件

  5. 面试官：详细说一下渲染函数的生成过程
    答：
    大家一说到渲染函数，基本上说的就是 render 函数，其实编译器生成的渲染有两类：
    第一类就是一个 render 函数，负责生成动态节点的 vnode
    第二类是放在一个叫 staticRenderFns 数组中的静态渲染函数，这些函数负责生成静态节点的 vnode
    渲染函数生成的过程，其实就是在遍历 AST 节点，通过递归的方式，处理每个节点，最后生成形如：_c(tag, attr, children, normalizationType) 的结果。tag 是标签名，attr 是属性对象，children 是子节点组成的数组，其中每个元素的格式都是 _c(tag, attr, children, normalizationTYpe) 的形式，normalization 表示节点的规范化类型，是一个数字 0、1、2，不重要。
    在处理 AST 节点过程中需要大家重点关注也是面试中常见的问题有：
      静态节点是怎么处理的
      静态节点的处理分为两步：
      将生成静态节点 vnode 函数放到 staticRenderFns 数组中
      返回一个 _m(idx) 的可执行函数，意思是执行 staticRenderFns 数组中下标为 idx 的函数，生成静态节点的 vnode
      v-once、v-if、v-for、组件 等都是怎么处理的
      单纯的 v-once 节点处理方式和静态节点一致
      v-if 节点的处理结果是一个三元表达式
      v-for 节点的处理结果是可执行的 _l 函数，该函数负责生成 v-for 节点的 vnode
      组件的处理结果和普通元素一样，得到的是形如 _c(compName) 的可执行代码，生成组件的 vnode