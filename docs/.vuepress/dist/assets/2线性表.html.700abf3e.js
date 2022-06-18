import{_ as e,o as n,c as t,g as i}from"./app.c10353cc.js";const o={},a=i(`<h3 id="\u7EBF\u6027\u8868" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u6027\u8868" aria-hidden="true">#</a> \u7EBF\u6027\u8868</h3><p>\u5806\u3001\u6808\u3001\u961F\u5217\u3001\u94FE\u8868 \u662F\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u4E2D\u7684\u57FA\u7840\u77E5\u8BC6\u3002 \u7EBF\u6027\u8868\uFF08Linear List\uFF09\uFF1A \u5C31\u662F\u6570\u636E\u6392\u6210\u50CF\u4E00\u6761\u7EBF\u4E00\u6837\u7684\u7ED3\u6784\u3002\u6BCF\u4E2A\u7EBF\u6027\u8868\u4E0A\u7684\u6570\u636E\u6700\u591A\u53EA\u6709\u524D\u548C\u540E\u4E24\u4E2A\u65B9\u5411\u3002\u6570\u7EC4\u3001\u94FE\u8868\u3001\u961F\u5217\u3001\u6808 \u7B49\u5C31\u662F\u7EBF\u6027\u8868\u7ED3\u6784\u3002</p><h4 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h4><ol><li>\u5B9A\u4E49 \u6570\u7EC4 (Array) \u662F\u4E00\u4E2A\u6709\u5E8F\u7684\u6570\u636E\u96C6\u5408\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6570\u7EC4\u540D\u79F0 (name) \u548C\u7D22\u5F15 (index) \u8FDB\u884C\u8BBF\u95EE\u3002 \u6570\u7EC4\u7684\u7D22\u5F15\u662F\u4ECE 0 \u5F00\u59CB\u7684\u3002</li><li>\u7279\u70B9 ~\u6570\u7EC4\u662F\u7528\u4E00\u7EC4\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4\u6765\u5B58\u50A8\u7684\u3002 \u6240\u4EE5\u6570\u7EC4\u652F\u6301 \u968F\u673A\u8BBF\u95EE\uFF0C\u6839\u636E\u4E0B\u6807\u968F\u673A\u8BBF\u95EE\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(1)\u3002</li></ol><pre><code>~\u4F4E\u6548\u7684\u63D2\u5165\u548C\u5220\u9664\u3002
\u6570\u7EC4\u4E3A\u4E86\u4FDD\u6301\u5185\u5B58\u6570\u636E\u7684\u8FDE\u7EED\u6027\uFF0C\u4F1A\u5BFC\u81F4\u63D2\u5165\u3001\u5220\u9664\u8FD9\u4E24\u4E2A\u64CD\u4F5C\u6BD4\u8F83\u4F4E\u6548\uFF0C\u56E0\u4E3A\u5E95\u5C42\u901A\u5E38\u662F\u8981\u8FDB\u884C\u5927\u91CF\u7684\u6570\u636E\u642C\u79FB\u6765\u4FDD\u6301\u6570\u636E\u7684\u8FDE\u7EED\u6027\u3002
\u63D2\u5165\u4E0E\u5220\u9664\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5982\u4E0B\uFF1A
\u63D2\u5165\uFF1A\u4ECE\u6700\u597D O(1) \uFF0C\u6700\u574F O(n) \uFF0C\u5E73\u5747 O(n)
\u5220\u9664\uFF1A\u4ECE\u6700\u597D O(1) \uFF0C\u6700\u574F O(n) \uFF0C\u5E73\u5747 O(n)
</code></pre><h4 id="\u6808" tabindex="-1"><a class="header-anchor" href="#\u6808" aria-hidden="true">#</a> \u6808</h4><ol><li>\u5B9A\u4E49 1. \u540E\u8FDB\u8005\u5148\u51FA\uFF0C\u5148\u8FDB\u8005\u540E\u51FA\uFF0C\u7B80\u79F0 \u540E\u8FDB\u5148\u51FA\uFF08LIFO\uFF09\uFF0C\u8FD9\u5C31\u662F\u5178\u578B\u7684\u6808\u7ED3\u6784\u3002 2. \u65B0\u6DFB\u52A0\u7684\u6216\u5F85\u5220\u9664\u7684\u5143\u7D20\u90FD\u4FDD\u5B58\u5728\u6808\u7684\u672B\u5C3E\uFF0C\u79F0\u4F5C\u6808\u9876\uFF0C\u53E6\u4E00\u7AEF\u5C31\u53EB\u6808\u5E95\u3002 3. \u5728\u6808\u91CC\uFF0C\u65B0\u5143\u7D20\u90FD\u9760\u8FD1\u6808\u9876\uFF0C\u65E7\u5143\u7D20\u90FD\u63A5\u8FD1\u6808\u5E95\u3002 4. \u4ECE\u6808\u7684\u64CD\u4F5C\u7279\u6027\u6765\u770B\uFF0C\u662F\u4E00\u79CD \u64CD\u4F5C\u53D7\u9650\u7684\u7EBF\u6027\u8868\uFF0C\u53EA\u5141\u8BB8\u5728\u4E00\u7AEF\u63D2\u5165\u548C\u5220\u9664\u6570\u636E\u3002 4. \u4E0D\u5305\u542B\u4EFB\u4F55\u5143\u7D20\u7684\u6808\u79F0\u4E3A\u7A7A\u6808\u3002 \u6808\u4E5F\u88AB\u7528\u5728\u7F16\u7A0B\u8BED\u8A00\u7684\u7F16\u8BD1\u5668\u548C\u5185\u5B58\u4E2D\u4FDD\u5B58\u53D8\u91CF\u3001\u65B9\u6CD5\u8C03\u7528\u7B49\uFF0C\u6BD4\u5982\u51FD\u6570\u7684\u8C03\u7528\u6808\u3002</li><li>\u5B9E\u73B0 \u6808\u7684\u65B9\u6CD5\uFF1A push(element)\uFF1A\u6DFB\u52A0\u4E00\u4E2A\uFF08\u6216\u51E0\u4E2A\uFF09\u65B0\u5143\u7D20\u5230\u6808\u9876\u3002 pop()\uFF1A\u79FB\u9664\u6808\u9876\u7684\u5143\u7D20\uFF0C\u540C\u65F6\u8FD4\u56DE\u88AB\u79FB\u9664\u7684\u5143\u7D20\u3002 peek()\uFF1A\u8FD4\u56DE\u6808\u9876\u7684\u5143\u7D20\uFF0C\u4E0D\u5BF9\u6808\u505A\u4EFB\u4F55\u4FEE\u6539\u3002 isEmpty()\uFF1A\u5982\u679C\u6808\u91CC\u6CA1\u6709\u4EFB\u4F55\u5143\u7D20\u5C31\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002 clear()\uFF1A\u79FB\u9664\u6808\u91CC\u7684\u6240\u6709\u5143\u7D20\u3002 size()\uFF1A\u8FD4\u56DE\u6808\u91CC\u7684\u5143\u7D20\u4E2A\u6570\u3002</li><li>\u5E94\u7528 \u6808\u7684\u5E94\u7528\u5B9E\u4F8B\uFF1AJavaScript \u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u4E4B\u7F8E - \u5B9E\u73B0\u4E00\u4E2A\u524D\u7AEF\u8DEF\u7531\uFF0C\u5982\u4F55\u5B9E\u73B0\u6D4F\u89C8\u5668\u7684\u524D\u8FDB\u4E0E\u540E\u9000 \uFF1F</li></ol><pre><code>&lt;!-- \u53C2\u8003\u6587\u7AE0\uFF1Ahttps://github.com/biaochenxuying/blog/issues/34 --&gt;
</code></pre><h4 id="\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217" aria-hidden="true">#</a> \u961F\u5217</h4><ol><li><p>\u666E\u901A\u961F\u5217 1. \u5B9A\u4E49 \u961F\u5217\u662F\u9075\u5FAA FIFO\uFF08First In First Out\uFF0C\u5148\u8FDB\u5148\u51FA\uFF09\u539F\u5219\u7684\u4E00\u7EC4\u6709\u5E8F\u7684\u9879\u3002 \u961F\u5217\u5728\u5C3E\u90E8\u6DFB\u52A0\u65B0\u5143\u7D20\uFF0C\u5E76\u4ECE\u9876\u90E8\u79FB\u9664\u5143\u7D20\u3002 \u6700\u65B0\u6DFB\u52A0\u7684\u5143\u7D20\u5FC5\u987B\u6392\u5728\u961F\u5217\u7684\u672B\u5C3E\u3002 \u961F\u5217\u53EA\u6709 \u5165\u961F push() \u548C\u51FA\u961F pop()\u3002 2. \u5B9E\u73B0 \u961F\u5217\u91CC\u9762\u6709\u4E00\u4E9B\u58F0\u660E\u7684\u8F85\u52A9\u65B9\u6CD5\uFF1A enqueue(element)\uFF1A\u5411\u961F\u5217\u5C3E\u90E8\u6DFB\u52A0\u65B0\u9879\u3002 push() dequeue()\uFF1A\u79FB\u9664\u961F\u5217\u7684\u7B2C\u4E00\u9879\uFF0C\u5E76\u8FD4\u56DE\u88AB\u79FB\u9664\u7684\u5143\u7D20\u3002 shift() front()\uFF1A\u8FD4\u56DE\u961F\u5217\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u961F\u5217\u4E0D\u505A\u4EFB\u4F55\u53D8\u52A8\u3002 isEmpty()\uFF1A\u5982\u679C\u961F\u5217\u4E2D\u4E0D\u5305\u542B\u4EFB\u4F55\u5143\u7D20\uFF0C\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002 size()\uFF1A\u8FD4\u56DE\u961F\u5217\u5305\u542B\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u4E0E\u6570\u7EC4\u7684 length \u5C5E\u6027\u7C7B\u4F3C\u3002 print()\uFF1A\u6253\u5370\u961F\u5217\u4E2D\u7684\u5143\u7D20\u3002 clear()\uFF1A\u6E05\u7A7A\u6574\u4E2A\u961F\u5217\u3002</p></li><li><p>\u4F18\u5148\u961F\u5217 1. \u5B9A\u4E49 \u4F18\u5148\u961F\u5217\u4E2D\u5143\u7D20\u7684\u6DFB\u52A0\u548C\u79FB\u9664\u662F\u4F9D\u8D56\u4F18\u5148\u7EA7\u7684\u3002 2. \u5E94\u7528 \u4E00\u4E2A\u73B0\u5B9E\u7684\u4F8B\u5B50\u5C31\u662F\u673A\u573A\u767B\u673A\u7684\u987A\u5E8F\u3002\u5934\u7B49\u8231\u548C\u5546\u52A1\u8231\u4E58\u5BA2\u7684\u4F18\u5148\u7EA7\u8981\u9AD8\u4E8E\u7ECF\u6D4E\u8231\u4E58\u5BA2\u3002 \u518D\u6BD4\u5982\uFF1A\u706B\u8F66\uFF0C\u8001\u5E74\u4EBA\u3001\u5B55\u5987\u548C\u5E26\u5C0F\u5B69\u7684\u4E58\u5BA2\u662F\u4EAB\u6709\u4F18\u5148\u68C0\u7968\u6743\u7684\u3002 3. \u4F18\u5148\u961F\u5217\u5206\u4E3A\u4E24\u7C7B \u6700\u5C0F\u4F18\u5148\u961F\u5217 \u6700\u5C0F\u4F18\u5148\u961F\u5217\u662F\u628A\u4F18\u5148\u7EA7\u7684\u503C\u6700\u5C0F\u7684\u5143\u7D20\u88AB\u653E\u7F6E\u5230\u961F\u5217\u7684\u6700\u524D\u9762\uFF08\u4EE3\u8868\u6700\u9AD8\u7684\u4F18\u5148\u7EA7\uFF09\u3002 \u6BD4\u5982\uFF1A\u6709\u56DB\u4E2A\u5143\u7D20\uFF1A&quot;John&quot;, &quot;Jack&quot;, &quot;Camila&quot;, &quot;Tom&quot;\uFF0C\u4ED6\u4EEC\u7684\u4F18\u5148\u7EA7\u503C\u5206\u522B\u4E3A 4\uFF0C3\uFF0C2\uFF0C1\u3002 \u90A3\u4E48\u6700\u5C0F\u4F18\u5148\u961F\u5217\u6392\u5E8F\u5E94\u8BE5\u4E3A\uFF1A&quot;Tom&quot;\uFF0C&quot;Camila&quot;\uFF0C&quot;Jack&quot;\uFF0C&quot;John&quot;\u3002 \u6700\u5927\u4F18\u5148\u961F\u5217 \u6700\u5927\u4F18\u5148\u961F\u5217\u6B63\u597D\u76F8\u53CD\uFF0C\u628A\u4F18\u5148\u7EA7\u503C\u6700\u5927\u7684\u5143\u7D20\u653E\u7F6E\u5728\u961F\u5217\u7684\u6700\u524D\u9762\u3002 \u4EE5\u4E0A\u9762\u7684\u4E3A\u4F8B\uFF0C\u6700\u5927\u4F18\u5148\u961F\u5217\u6392\u5E8F\u5E94\u8BE5\u4E3A\uFF1A&quot;John&quot;, &quot;Jack&quot;, &quot;Camila&quot;, &quot;Tom&quot;\u3002 4. \u5B9E\u73B0 \u5B9E\u73B0\u4E00\u4E2A\u4F18\u5148\u961F\u5217\uFF0C\u6709\u4E24\u79CD\u9009\u9879\uFF1A \u8BBE\u7F6E\u4F18\u5148\u7EA7\uFF0C\u6839\u636E\u4F18\u5148\u7EA7\u6B63\u786E\u6DFB\u52A0\u5143\u7D20\uFF0C\u7136\u540E\u548C\u666E\u901A\u961F\u5217\u4E00\u6837\u6B63\u5E38\u79FB\u9664 \u8BBE\u7F6E\u4F18\u5148\u7EA7\uFF0C\u548C\u666E\u901A\u961F\u5217\u4E00\u6837\u6B63\u5E38\u6309\u987A\u5E8F\u6DFB\u52A0\uFF0C\u7136\u540E\u6839\u636E\u4F18\u5148\u7EA7\u79FB\u9664 \u8FD9\u91CC\u6700\u5C0F\u4F18\u5148\u961F\u5217\u548C\u6700\u5927\u4F18\u5148\u961F\u5217\u6211\u90FD\u91C7\u7528\u7B2C\u4E00\u79CD\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u5927\u5BB6\u53EF\u4EE5\u5C1D\u8BD5\u4E00\u4E0B\u7B2C\u4E8C\u79CD\u3002 \u4E0B\u9762\u53EA\u91CD\u5199 enqueue() \u65B9\u6CD5\u548C print() \u65B9\u6CD5\uFF0C\u5176\u4ED6\u65B9\u6CD5\u548C\u4E0A\u9762\u7684\u666E\u901A\u961F\u5217\u5B8C\u5168\u76F8\u540C\u3002 \u5B9E\u73B0\u6700\u5C0F\u4F18\u5148\u961F\u5217 if (queueElement.priority &lt; this.items[i].priority) { this.items.splice(i, 0, queueElement);</p></li><li><p>\u5FAA\u73AF\u961F\u5217 1. \u5B9A\u4E49 \u5FAA\u73AF\u961F\u5217\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5B83\u957F\u5F97\u50CF\u4E00\u4E2A\u73AF\u3002\u628A\u5B83\u60F3\u50CF\u6210\u4E00\u4E2A\u5706\u7684\u949F\u5C31\u5BF9\u4E86\u3002 2. \u5173\u952E\u662F\uFF1A\u786E\u5B9A\u597D\u961F\u7A7A\u548C\u961F\u6EE1\u7684\u5224\u5B9A\u6761\u4EF6\u3002 \u5FAA\u73AF\u961F\u5217\u7684\u4E00\u4E2A\u4F8B\u5B50\u5C31\u662F\u51FB\u9F13\u4F20\u82B1\u6E38\u620F\uFF08Hot Potato\uFF09\u3002\u5728\u8FD9\u4E2A\u6E38\u620F\u4E2D\uFF0C\u5B69\u5B50\u4EEC\u56F4\u57CE\u4E00\u4E2A\u5706\u5708\uFF0C\u51FB\u9F13\u7684\u65F6\u5019\u628A\u82B1\u5C3D\u5FEB\u7684\u4F20\u9012\u7ED9\u65C1\u8FB9\u7684\u4EBA\u3002\u67D0\u4E00\u65F6\u523B\u51FB\u9F13\u505C\u6B62\uFF0C\u8FD9\u65F6\u82B1\u5728\u8C01\u7684\u624B\u91CC\uFF0C\u8C01\u5C31\u9000\u51FA\u5706\u5708\u76F4\u5230\u6E38\u620F\u7ED3\u675F\u3002\u91CD\u590D\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u76F4\u5230\u53EA\u5269\u4E00\u4E2A\u5B69\u5B50\uFF08\u80DC\u8005\uFF09\u3002 \u4E0B\u9762\u6211\u4EEC\u5728\u666E\u901A\u961F\u5217\u7684\u57FA\u7840\u4E0A\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u6A21\u62DF\u7684\u51FB\u9F13\u4F20\u82B1\u6E38\u620F\uFF0C\u4E0B\u9762\u53EA\u5199\u51FB\u9F13\u4F20\u82B1\u7684\u4EE3\u7801\u7247\u6BB5\uFF1A // \u5B9E\u73B0\u51FB\u9F13\u4F20\u82B1 function hotPotato (nameList, num) { var queue = new Queue();</p><p>for (var i = 0; i &lt; nameList.length; i++) { queue.enqueue(nameList[i]); }</p><p>var eliminated = &#39;&#39;;</p><p>while (queue.size() &gt; 1) { // \u5FAA\u73AF num \u6B21\uFF0C\u961F\u9996\u51FA\u6765\u53BB\u5230\u961F\u5C3E for (var i = 0; i &lt; num; i++) { queue.enqueue(queue.dequeue()); } // \u5FAA\u73AF num \u6B21\u8FC7\u540E\uFF0C\u79FB\u9664\u5F53\u524D\u961F\u9996\u7684\u5143\u7D20 eliminated = queue.dequeue(); console.log(<code>\${eliminated} \u5728\u51FB\u9F13\u4F20\u82B1\u4E2D\u88AB\u6DD8\u6C70\uFF01</code>); }</p><p>// \u6700\u540E\u53EA\u5269\u4E00\u4E2A\u5143\u7D20 return queue.dequeue(); }</p><p>// \u6D4B\u8BD5 var nameList = [&quot;John&quot;, &quot;Jack&quot;, &quot;Camila&quot;, &quot;Ingrid&quot;, &quot;Carl&quot;]; var winner = hotPotato(nameList, 10); console.log(<code>\u6700\u540E\u7684\u80DC\u5229\u8005\u662F\uFF1A\${winner}</code>);</p></li></ol><h4 id="\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868" aria-hidden="true">#</a> \u94FE\u8868</h4><ol><li>\u5B9A\u4E49 \u94FE\u8868\u5B58\u50A8\u6709\u5E8F\u7684\u5143\u7D20\u96C6\u5408\uFF0C\u4F46\u4E0D\u540C\u4E8E\u6570\u7EC4\uFF0C\u94FE\u8868\u4E2D\u7684\u5143\u7D20\u5728\u5185\u5B58\u4E2D\u5E76\u4E0D\u662F\u8FDE\u7EED\u653E\u7F6E\u7684\uFF0C\u5B83\u662F\u901A\u8FC7 \u6307\u9488 \u5C06 \u96F6\u6563\u7684\u5185\u5B58\u5757 \u4E32\u8FDE\u8D77\u6765\u7684\u3002 \u6BCF\u4E2A\u5143\u7D20\u7531\u4E00\u4E2A\u5B58\u50A8\u5143\u7D20\u672C\u8EAB\u7684 \u8282\u70B9 \u548C\u4E00\u4E2A\u6307\u5411\u4E0B\u4E00\u4E2A\u5143\u7D20\u7684 \u5F15\u7528\uFF08\u4E5F\u79F0\u6307\u9488\u6216\u94FE\u63A5\uFF09\u7EC4\u6210\u3002 \u7B80\u5355\u7684\u94FE\u63A5\u7ED3\u6784\u56FE\uFF1A \u5176\u4E2D\uFF0Cdata \u4E2D\u4FDD\u5B58\u7740\u6570\u636E\uFF0Cnext \u4FDD\u5B58\u7740\u4E0B\u4E00\u4E2A\u94FE\u8868\u7684\u5F15\u7528\u3002 \u4E0A\u56FE\u4E2D\uFF0C\u6211\u4EEC\u8BF4 data2 \u8DDF\u5728 data1 \u540E\u9762\uFF0C\u800C\u4E0D\u662F\u8BF4 data2 \u662F\u94FE\u8868\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u5143\u7D20\u3002\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u6211\u4EEC\u5C06\u94FE\u8868\u7684\u5C3E\u5143\u7D20\u6307\u5411\u4E86 null \u8282\u70B9\uFF0C\u8868\u793A\u94FE\u63A5\u7ED3\u675F\u7684\u4F4D\u7F6E\u3002</li><li>\u7279\u70B9 *\u94FE\u8868\u662F\u901A\u8FC7\u6307\u9488\u5C06\u96F6\u6563\u7684\u5185\u5B58\u5757\u4E32\u8FDE\u8D77\u6765\u7684\u3002 *\u6240\u4EE5\u94FE\u8868\u4E0D\u652F\u6301 \u968F\u673A\u8BBF\u95EE\uFF0C\u5982\u679C\u8981\u627E\u7279\u5B9A\u7684\u9879\uFF0C\u53EA\u80FD\u4ECE\u5934\u5F00\u59CB\u904D\u5386\uFF0C\u76F4\u5230\u627E\u5230\u67D0\u4E2A\u9879\u3002 \u6240\u4EE5\u8BBF\u95EE\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n)\u3002</li></ol><pre><code>\u9AD8\u6548\u7684\u63D2\u5165\u548C\u5220\u9664\u3002
\u94FE\u8868\u4E2D\u63D2\u5165\u6216\u8005\u5220\u9664\u4E00\u4E2A\u6570\u636E\uFF0C\u6211\u4EEC\u5E76\u4E0D\u9700\u8981\u4E3A\u4E86\u4FDD\u6301\u5185\u5B58\u7684\u8FDE\u7EED\u6027\u800C\u642C\u79FB\u7ED3\u70B9\uFF0C\u56E0\u4E3A\u94FE\u8868\u7684\u5B58\u50A8\u7A7A\u95F4\u672C\u8EAB\u5C31\u4E0D\u662F\u8FDE\u7EED\u7684\uFF0C\u53EA\u9700\u8981\u8003\u8651\u76F8\u90BB\u7ED3\u70B9\u7684\u6307\u9488\u6539\u53D8\u3002
\u6240\u4EE5\uFF0C\u5728\u94FE\u8868\u4E2D\u63D2\u5165\u548C\u5220\u9664\u4E00\u4E2A\u6570\u636E\u662F\u975E\u5E38\u5FEB\u901F\u7684\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(1)\u3002

\u4E09\u79CD\u6700\u5E38\u89C1\u7684\u94FE\u8868\u7ED3\u6784\uFF0C\u5B83\u4EEC\u5206\u522B\u662F\uFF1A
  \u5355\u94FE\u8868
  \u53CC\u5411\u94FE\u8868
  \u5FAA\u73AF\u94FE\u8868
1. \u5355\u94FE\u8868
  1. \u5B9E\u73B0
    Node \u7C7B\u7528\u6765\u8868\u793A\u8282\u70B9\u3002
    LinkedList \u7C7B\u63D0\u4F9B\u63D2\u5165\u8282\u70B9\u3001\u5220\u9664\u8282\u70B9\u7B49\u4E00\u4E9B\u64CD\u4F5C\u3002
  2. \u5355\u5411\u94FE\u8868\u7684\u516B\u79CD\u5E38\u7528\u64CD\u4F5C\uFF1A
    append(element)\uFF1A\u5C3E\u90E8\u6DFB\u52A0\u5143\u7D20\u3002
    insert(position, element)\uFF1A\u7279\u5B9A\u4F4D\u7F6E\u63D2\u5165\u4E00\u4E2A\u65B0\u7684\u9879\u3002
    removeAt(position)\uFF1A\u7279\u5B9A\u4F4D\u7F6E\u79FB\u9664\u4E00\u9879\u3002
    remove(element)\uFF1A\u79FB\u9664\u4E00\u9879\u3002
    indexOf(element)\uFF1A\u8FD4\u56DE\u5143\u7D20\u5728\u94FE\u8868\u4E2D\u7684\u7D22\u5F15\u3002\u5982\u679C\u94FE\u8868\u4E2D\u6CA1\u6709\u8BE5\u5143\u7D20\u5219\u8FD4\u56DE -1\u3002
    isEmpty()\uFF1A\u5982\u679C\u94FE\u8868\u4E2D\u4E0D\u5305\u542B\u4EFB\u4F55\u5143\u7D20\uFF0C\u8FD4\u56DE true\uFF0C\u5982\u679C\u94FE\u8868\u957F\u5EA6\u5927\u4E8E 0\uFF0C\u8FD4\u56DE false\u3002
    size()\uFF1A\u8FD4\u56DE\u94FE\u8868\u5305\u542B\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u4E0E\u6570\u7EC4\u7684 length \u5C5E\u6027\u7C7B\u4F3C\u3002
    getHead()\uFF1A\u8FD4\u56DE\u94FE\u8868\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002
    toString()\uFF1A\u7531\u4E8E\u94FE\u8868\u4F7F\u7528\u4E86 Node \u7C7B\uFF0C\u5C31\u9700\u8981\u91CD\u5199\u7EE7\u627F\u81EA JavaScript \u5BF9\u8C61\u9ED8\u8BA4\u7684 toString() \u65B9\u6CD5\uFF0C\u8BA9\u5176\u53EA\u8F93\u51FA\u5143\u7D20\u7684\u503C\u3002
    print()\uFF1A\u6253\u5370\u94FE\u8868\u7684\u6240\u6709\u5143\u7D20\u3002
  3. \u7531\u4E8E\u94FE\u8868\u7684\u8D77\u59CB\u70B9\u7684\u786E
  \u5B9A\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u56E0\u6B64\u5F88\u591A\u94FE\u8868\u7684\u5B9E\u73B0\u90FD\u4F1A\u5728\u94FE\u8868\u7684\u6700\u524D\u9762\u6DFB\u52A0\u4E00\u4E2A\u7279\u6B8A\u7684\u8282\u70B9\uFF0C\u79F0\u4E3A \u5934\u8282\u70B9\uFF0C\u8868\u793A\u94FE\u8868\u7684\u5934\u90E8\u3002
    \u7ECF\u8FC7\u6539\u9020\uFF0C\u94FE\u8868\u5C31\u6210\u4E86\u5982\u4E0B\u7684\u6837\u5B50\uFF1A
      \u6709\u5934\u8282\u70B9\u7684\u94FE\u8868
    \u9488\u5BF9\u94FE\u8868\u7684\u63D2\u5165\u548C\u5220\u9664\u64CD\u4F5C\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u8003\u8651\u76F8\u90BB\u7ED3\u70B9\u7684\u6307\u9488\u6539\u53D8\uFF0C\u6240\u4EE5\u63D2\u5165\u4E0E\u5220\u9664\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(1)\u3002
  \u6240\u4EE5\uFF0C\u5728 JavaScript \u4E2D\uFF0C\u5355\u94FE\u8868\u7684\u771F\u5B9E\u6570\u636E\u6709\u70B9\u7C7B\u4F3C\u4E8E\u5BF9\u8C61\uFF0C\u5B9E\u9645\u4E0A\u662F Node \u7C7B\u751F\u6210\u7684\u5B9E\u4F8B\u3002

2. \u53CC\u5411\u94FE\u8868
  \u5355\u5411\u94FE\u8868\u53EA\u6709\u4E00\u4E2A\u65B9\u5411\uFF0C\u7ED3\u70B9\u53EA\u6709\u4E00\u4E2A\u540E\u7EE7\u6307\u9488 next \u6307\u5411\u540E\u9762\u7684\u7ED3\u70B9\u3002
  \u800C\u53CC\u5411\u94FE\u8868\uFF0C\u5B83\u652F\u6301\u4E24\u4E2A\u65B9\u5411\uFF0C\u6BCF\u4E2A\u7ED3\u70B9\u4E0D\u6B62\u6709\u4E00\u4E2A\u540E\u7EE7\u6307\u9488 next \u6307\u5411\u540E\u9762\u7684\u7ED3\u70B9\uFF0C\u8FD8\u6709\u4E00\u4E2A\u524D\u9A71\u6307\u9488 prev \u6307\u5411\u524D\u9762\u7684\u7ED3\u70B9\u3002      
  1. \u5355\u5411\u94FE\u8868\u4E0E\u53C8\u5411\u94FE\u8868\u6BD4\u8F83
    \u53CC\u5411\u94FE\u8868\u9700\u8981\u989D\u5916\u7684\u4E24\u4E2A\u7A7A\u95F4\u6765\u5B58\u50A8\u540E\u7EE7\u7ED3\u70B9\u548C\u524D\u9A71\u7ED3\u70B9\u7684\u5730\u5740\u3002
    \u6240\u4EE5\uFF0C\u5982\u679C\u5B58\u50A8\u540C\u6837\u591A\u7684\u6570\u636E\uFF0C\u53CC\u5411\u94FE\u8868\u8981\u6BD4\u5355\u94FE\u8868\u5360\u7528\u66F4\u591A\u7684\u5185\u5B58\u7A7A\u95F4\u3002
    \u867D\u7136\u4E24\u4E2A\u6307\u9488\u6BD4\u8F83\u6D6A\u8D39\u5B58\u50A8\u7A7A\u95F4\uFF0C\u4F46\u53EF\u4EE5\u652F\u6301\u53CC\u5411\u904D\u5386\uFF0C\u8FD9\u6837\u4E5F\u5E26\u6765\u4E86\u53CC\u5411\u94FE\u8868\u64CD\u4F5C\u7684\u7075\u6D3B\u6027\u3002
    \u53CC\u5411\u94FE\u8868\u63D0\u4F9B\u4E86\u4E24\u79CD\u8FED\u4EE3\u5217\u8868\u7684\u65B9\u6CD5\uFF1A\u4ECE\u5934\u5230\u5C3E\uFF0C\u6216\u8005\u4ECE\u5C3E\u5230\u5934\u3002
    \u6211\u4EEC\u53EF\u4EE5\u8BBF\u95EE\u4E00\u4E2A\u7279\u5B9A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u6216\u524D\u4E00\u4E2A\u5143\u7D20\u3002
    \u5728\u5355\u5411\u94FE\u8868\u4E2D\uFF0C\u5982\u679C\u8FED\u4EE3\u94FE\u8868\u65F6\u9519\u8FC7\u4E86\u8981\u627E\u7684\u5143\u7D20\uFF0C\u5C31\u9700\u8981\u56DE\u5230\u94FE\u8868\u8D77\u70B9\uFF0C\u91CD\u65B0\u5F00\u59CB\u8FED\u4EE3\u3002
    \u5728\u53CC\u5411\u94FE\u8868\u4E2D\uFF0C\u53EF\u4EE5\u4ECE\u4EFB\u4E00\u8282\u70B9\uFF0C\u5411\u524D\u6216\u5411\u540E\u8FED\u4EE3\uFF0C\u8FD9\u662F\u53CC\u5411\u94FE\u8868\u7684\u4E00\u4E2A\u4F18\u70B9\u3002
    \u6240\u4EE5\uFF0C\u53CC\u5411\u94FE\u8868\u53EF\u4EE5\u652F\u6301 O(1) \u65F6\u95F4\u590D\u6742\u5EA6\u7684\u60C5\u51B5\u4E0B\u627E\u5230\u524D\u9A71\u7ED3\u70B9\uFF0C\u6B63\u662F\u8FD9\u6837\u7684\u7279\u70B9\uFF0C\u4E5F\u4F7F\u53CC\u5411\u94FE\u8868\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u7684\u63D2\u5165\u3001\u5220\u9664\u7B49\u64CD\u4F5C\u90FD\u8981\u6BD4\u5355\u94FE\u8868\u7B80\u5355\u3001\u9AD8\u6548\u3002

3. \u5FAA\u73AF\u94FE\u8868
  \u5FAA\u73AF\u94FE\u8868\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5355\u94FE\u8868\u3002
  \u5FAA\u73AF\u94FE\u8868\u548C\u5355\u94FE\u8868\u76F8\u4F3C\uFF0C\u8282\u70B9\u7C7B\u578B\u90FD\u662F\u4E00\u6837\u3002
  \u552F\u4E00\u7684\u533A\u522B\u662F\uFF0C\u5728\u521B\u5EFA\u5FAA\u73AF\u94FE\u8868\u7684\u65F6\u5019\uFF0C\u8BA9\u5176\u5934\u8282\u70B9\u7684 next \u5C5E\u6027\u6307\u5411\u5B83\u672C\u8EAB\u3002
  \u5373\uFF1A
  head.next = head;
</code></pre><ol start="3"><li>\u94FE\u8868\u603B\u7ED3 \u5199\u94FE\u8868\u4EE3\u7801\u662F\u6700\u8003\u9A8C\u903B\u8F91\u601D\u7EF4\u80FD\u529B\u7684\uFF0C\u8981\u719F\u7EC3\u94FE\u8868\uFF0C\u53EA\u6709 \u591A\u5199\u591A\u7EC3\uFF0C\u6CA1\u6709\u6377\u5F84\u3002 \u56E0\u4E3A\uFF0C\u94FE\u8868\u4EE3\u7801\u5230\u5904\u90FD\u662F\u6307\u9488\u7684\u64CD\u4F5C\u3001\u8FB9\u754C\u6761\u4EF6\u7684\u5904\u7406\uFF0C\u7A0D\u6709\u4E0D\u614E\u5C31\u5BB9\u6613\u4EA7\u751F Bug\u3002 \u94FE\u8868\u4EE3\u7801\u5199\u5F97\u597D\u574F\uFF0C\u53EF\u4EE5\u770B\u51FA\u4E00\u4E2A\u4EBA\u5199\u4EE3\u7801\u662F\u5426\u591F\u7EC6\u5FC3\uFF0C\u8003\u8651\u95EE\u9898\u662F\u5426\u5168\u9762\uFF0C\u601D\u7EF4\u662F\u5426\u7F1C\u5BC6\u3002 \u6240\u4EE5\uFF0C\u8FD9\u4E5F\u662F\u5F88\u591A\u9762\u8BD5\u5B98\u559C\u6B22\u8BA9\u4EBA\u624B\u5199\u94FE\u8868\u4EE3\u7801\u7684\u539F\u56E0\u3002 \u4E00\u5B9A\u8981\u81EA\u5DF1\u5199\u4EE3\u7801\u5B9E\u73B0\u4E00\u4E0B\uFF0C\u624D\u6709\u6548\u679C\u3002</li></ol>`,14),u=[a];function r(l,d){return n(),t("div",null,u)}var h=e(o,[["render",r],["__file","2\u7EBF\u6027\u8868.html.vue"]]);export{h as default};
