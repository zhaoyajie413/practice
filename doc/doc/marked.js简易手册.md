marked.js简易手册
================
一、安装
--------------
在网上引用或者是引用本地文件即可。要么就用命令行：

```
npm install marked --save
```

二、最简单用法
----------

```
 var rendererMD = new marked.Renderer();
    marked.setOptions({
      renderer: rendererMD,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });//基本设置
    console.log(marked('I am using __markdown__.'));
    // Outputs: <p>I am using <strong>markdown</strong>.</p>
```