---
title: 使用debug.js调试手机网页
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

##### 测试CDN
>http://img.liunwcj.cn/debug.js (亲测)
>http://img.liunwcj.cn/debug.min.js

##### 参考
>https://github.com/binnng/debug.js
>http://binnng.github.io/debug.js
>http://binnng.github.io/debug.js/demo/index.html

