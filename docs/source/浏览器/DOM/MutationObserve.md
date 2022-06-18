### MutationObserve
  介绍：
    监听Dom节点的API
    MutationObserver 是一个内建对象，它观察 DOM 元素，并在检测到更改时触发回调。
  
  用法：
    // 选择需要观察变动的节点
    const targetNode = document.getElementById('some-id');
    // 观察器的配置（需要观察什么变动）
    const config = { attributes: true, childList: true, subtree: true };
    // 当观察到变动时执行的回调函数
    const callback = function(mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                console.log('A child node has been added or removed.');
            }
            else if (mutation.type === 'attributes') {
                console.log('The ' + mutation.attributeName + ' attribute was modified.');
            }
        }
    };
    // 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(callback);
    // 以上述配置开始观察目标节点
    observer.observe(targetNode, config);
    // 之后，可停止观察
    observer.disconnect();
  
  config：
    config 是一个具有布尔选项的对象，该布尔选项表示“将对哪些更改做出反应”：
      childList —— node 的直接子节点的更改，
      subtree —— node 的所有后代的更改，
      attributes —— node 的特性（attribute），
      attributeFilter —— 特性名称数组，只观察选定的特性。
      characterData —— 是否观察 node.data（文本内容）

    其他几个选项：
      attributeOldValue —— 如果为 true，则将特性的旧值和新值都传递给回调（参见下文），否则只传新值（需要 attributes 选项），
      characterDataOldValue —— 如果为 true，则将 node.data 的旧值和新值都传递给回调（参见下文），否则只传新值（需要 characterData 选项）。

