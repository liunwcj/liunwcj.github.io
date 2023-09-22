---
title: 前端字体文件大小优化 fontmin
date: 2023-09-22 16:49:00
tags:
---

##### 应用场景
有时候，我们想给网站的 Logo 、 Slogan 、标题、活动页等的中文自定义字体，我们可以使用 @font-face 引入 Web 字体，但是完整的中文字体库都是 8M 10M ，加载性能非常差，所以我们提取部分我们使用到的字体，这样可以把字体文件变成几KB。

##### 1.node 模块
提供细粒度 plugins，你可以自由定制专属的 webfont 压缩方案，比如：把字体转为 base64 嵌入到 css 中：

```javascript
var Fontmin = require('fontmin');

var fontmin = new Fontmin()
    .use(Fontmin.css({
        base64: true		// 开启 base64 嵌入，默认关闭
    }));
```

```css
/* 输出 css： */
@font-face {
    font-family: "eduSong";
    src: url("eduSong.eot"); /* IE9 */
    src: url("eduSong.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwA....) format("truetype"), /* chrome、firefox、opera、Safari, Android，iOS 4.2+ */
    url("eduSong.svg#eduSong") format("svg"); /* iOS 4.1- */
    font-style: normal;
    font-weight: normal;
}
```

为方便大家使用，提供一个最基本的 webfont 工作流 snippet：
```javascript
var Fontmin = require('fontmin');

var srcPath = 'src/font/*.ttf'; // 字体源文件
var destPath = 'asset/font';    // 输出路径
var text = '我说你是人间的四月天；笑响点亮了四面风；轻灵在春的光艳中交舞着变。';

// 初始化
var fontmin = new Fontmin()
    .src(srcPath)               // 输入配置
    .use(Fontmin.glyph({        // 字型提取插件
        text: text              // 所需文字
    }))
    .use(Fontmin.ttf2eot())     // eot 转换插件
    .use(Fontmin.ttf2woff())    // woff 转换插件     
    .use(Fontmin.ttf2svg())     // svg 转换插件
    .use(Fontmin.css())         // css 生成插件
    .dest(destPath);            // 输出配置

// 执行
fontmin.run(function (err, files, stream) {

    if (err) {                  // 异常捕捉
        console.error(err);
    }

    console.log('done');        // 成功
});
```

##### 2.命令行
极客范儿? 就是喜欢弹奏键盘这种飘逸的感觉～

```bash
# 全局安装 fontmin
npm install -g fontmin
```
![terminal](/imgs/fontmin/terminal.png)

##### 3.客户端(GUI)
懒得写代码? 直接把 TTF 拖进来，左侧输入需要文字，右侧实时看效果。点击生成，duang 一下，就搞定了~
![GUI](/imgs/fontmin/app.png)

##### 简介
官方：http://ecomfe.github.io/fontmin/
Github: https://github.com/ecomfe/fontmin-app/releases (GUI安装文件)

##### 参考
>http://ecomfe.github.io/blog/fontmin-getting-started/
>https://juejin.cn/post/7109286663796293645
>https://juejin.cn/post/6844903826051301389
>https://segmentfault.com/a/1190000020121850 (iconfont 在线预览工具及其解析)




