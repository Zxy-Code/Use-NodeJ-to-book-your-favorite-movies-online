## **问题：**
1. 在控制台会看到报错：index.js:1 Uncaught SyntaxError: Unexpected token <
   这是因为：<script src='xxx'></script> 中的src所指向的静态资源不能被真确下载，因为：这段代码中规定的'Content-Type'都是'text/html'类型，而且所有的response内容都相同，当然就看不到想要的效果。
   所以，在下次的更新中将会接着解决这个问题。