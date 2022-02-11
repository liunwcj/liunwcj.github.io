---
title: 使用debug.js调试手机网页 转vConsole
date: 2020-09-16 17:07
---

H5调试的时候，我们会使用console.log，但手机上看不到打印出来的信息。所以只好各种alert，但alert总显得不方便，页面JS报错也没提示。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="format-detection" content="telephone=no,email=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-touch-fullscreen" content="yes">
<title>移动端HTML模版</title>
<link rel="dns-prefetch" href="">
<link rel="stylesheet" href="style.css">

<!-- 注意：页面中要第一个引入 debug.min.js 文件 -->
<script src="http://binnng.github.io/debug.js/build/debug.min.js"></script>

</head>
<body>

</body>
</html>
```

```javascript
    // 快速上手
    debug.success("This is success message:)");
    debug.error("This is error message:)");
    debug.log("This is primary message:)");
    debug.log({a: 1, b: 2});
    debug.log([1,2,3]);

    // debug.js为了方便调试，会默认开启捕捉浏览器的报错。如果你不需要这个功能，可以这样禁止它：
    debug.silence()
```

##### 补充说明：
推荐使腾讯推出的 vConsole，通过vConsole.js 重写console方法，实现了类似于微信小程序的移动端调试效果，方便查看http请求的详细信息以及浏览器缓存信息。体验更好些。

###### 方法一：使用 npm（推荐）

```bash
$ npm install vconsole
```
Import 并初始化后，即可使用 console.log 功能，如 Chrome devtools 上一样。

```javascript
import VConsole from 'vconsole';

const vConsole = new VConsole();
// 或者使用配置参数来初始化，详情见文档
const vConsole = new VConsole({ maxLogNumber: 1000 });

// 接下来即可照常使用 `console` 等方法
console.log('Hello world');

// 结束调试后，可移除掉
vConsole.destroy();
```

###### 方法二：使用 CDN 直接插入到 HTML

```html
<script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
<script>
  // VConsole 默认会挂载到 `window.VConsole` 上
  var vConsole = new window.VConsole();
</script>
```

###### 可用的 CDN：
https://unpkg.com/vconsole@latest/dist/vconsole.min.js
https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js

##### ~~测试CDN~~
> ~~http://img.liunwcj.cn/debug.js~~
> ~~http://img.liunwcj.cn/debug.min.js~~ 

##### 参考
>###### debug:
>https://github.com/binnng/debug.js
>http://binnng.github.io/debug.js
>http://binnng.github.io/debug.js/demo/index.html
>###### vConsole:
>https://github.com/Tencent/vConsole

