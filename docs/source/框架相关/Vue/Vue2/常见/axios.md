[[toc]]
## Axios

### 基础
1. 特性
    * 从浏览器中创建 XMLHttpRequests
    * 从 node.js 创建 http请求
    * 支持 Promise API
    * 拦截请求和响应
    * 转换请求数据和响应数据
    * 取消请求
    * 自动转换JSON 数据
    * 客户端支持防御XSRF

2. 使用

    发送请求
    ```ts
    axios({        
      url:'xxx',    // 设置请求的地址
      method:"GET", // 设置请求方法
      params:{      // get请求使用params进行参数凭借,如果是post请求用data
        type: '',
        page: 1
      }
    }).then(res => {  
      // res为后端返回的数据
      console.log(res);   
    })
    ```

    并发请求 axios.all([])
    ```ts
    function getUserAccount() {
        return axios.get('/user/12345');
    }

    function getUserPermissions() {
        return axios.get('/user/12345/permissions');
    }

    axios.all([getUserAccount(), getUserPermissions()])
        .then(axios.spread(function (res1, res2) { 
        // res1第一个请求的返回的内容，res2第二个请求返回的内容
        // 两个请求都执行完成才会执行
    }));
    ```

    取消请求
    ```ts
    // 方式一
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios.get('xxxx', {
      cancelToken: source.token
    })
    // 取消请求 (请求原因是可选的)
    source.cancel('主动取消请求');

    // 方式二
    const CancelToken = axios.CancelToken;
    let cancel;

    axios.get('xxxx', {
      cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      })
    });
    cancel('主动取消请求');
    ```

    请求拦截器
    ```ts
    axios.interceptors.request.use(function (config) {
        // 这里写发送请求前处理的代码
        return config;
    }, function (error) {
        // 这里写发送请求错误相关的代码
        return Promise.reject(error);
    });
    ```

    响应拦截器
    ```ts
    axios.interceptors.response.use(function (response) {
        // 这里写得到响应数据后处理的代码
        return response;
    }, function (error) {
        // 这里写得到错误响应处理的代码
        return Promise.reject(error);
    });
    ```

### 封装
1. 如何封装

封装的同时，你需要和 后端协商好一些约定，请求头，状态码，请求超时时间.......

设置接口请求前缀：根据开发、测试、生产环境的不同，前缀需要加以区分

请求头 : 来实现一些具体的业务，必须携带一些参数才可以请求(例如：会员业务)

状态码: 根据接口返回的不同status ， 来执行不同的业务，这块需要和后端约定好

请求方法：根据get、post等方法进行一个再次封装，使用起来更为方便

请求拦截器: 根据请求的请求头设定，来决定哪些请求可以访问
* 请求拦截器可以在每个请求里加上token，做了统一处理后维护起来也方便

响应拦截器： 这块就是根据 后端`返回来的状态码判定执行不同业务
* 响应拦截器可以在接收到响应后先做一层操作，如根据状态码判断登录状态、授权

### 原理
1. 构造一个简易的axios
```ts
// 构建一个Axios构造函数，核心代码为request
class Axios {
    constructor() {
      this.interceptors = {
        request: new InterceptorsManage,
        response: new InterceptorsManage
      }
    }
    request(config) {
      this.sendAjax(config)
    } 
    sendAjax(config){
      return new Promise(resolve => {
        const {url = '', method = 'get', data = {}} = config;
        // 发送ajax请求
        console.log(config);
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onload = function() {
            console.log(xhr.responseText)
            resolve(xhr.responseText);
        };
        xhr.send(data);
      })
    }
```

2. 构建拦截器的构造函数
```ts
class InterceptorsManage {
  constructor() {
    this.handlers = [];
  }

  use(fullfield, rejected) {
    this.handlers.push({
      fullfield,
      rejected
    })
  }
}
```

3. 导出axios实例
```ts
function CreateAxiosFn() {
  let axios = new Axios();
  
  let req = axios.request.bind(axios);
  // 混入方法， 处理axios的request方法，使之拥有get,post...方法
  // Axios.prototype实现了axios.method()各种请求方式
  utils.extend(req, Axios.prototype, axios)
  // 将axios的私有属性例如interceptors，合并到axios实例上
  utils.extend(req, axios)
  return req;
}
// 得到最后的全局变量axios
let axios = CreateAxiosFn();
```

4. 获得handlers中的回调
```ts
request(config) {
  // 拦截器和请求组装队列
  let chain = [this.sendAjax.bind(this), undefined] // 成对出现的，失败回调暂时不处理

  // 请求拦截
  this.interceptors.request.handlers.forEach(interceptor => {
      chain.unshift(interceptor.fullfield, interceptor.rejected)
  })

  // 响应拦截
  this.interceptors.response.handlers.forEach(interceptor => {
      chain.push(interceptor.fullfield, interceptor.rejected)
  })

  // 执行队列，每次执行一对，并给promise赋最新的值
  let promise = Promise.resolve(config);
  while(chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift())
  }
  return promise;
}
```
::: warning 按顺序执行各成功失败函数
chains大概是['fulfilled1','reject1','fulfilled2','reject2','this.sendAjax','undefined','fulfilled2','reject2','fulfilled1','reject1']这种形式
:::

* 这样就能够成功实现一个简易版axios
