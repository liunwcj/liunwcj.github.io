---
title: H5移动端页面禁用长按选中文本
date: 2020-09-12 12:41
---

##### 禁用长按可选中文本

```CSS
    /* 已测有效 */
    * {
        -webkit-touch-callout:none;/*系统默认菜单被禁用*/
        -webkit-user-select:none;/*webkit浏览器*/
        -khtml-user-select:none;/*早起浏览器*/
        -moz-user-select:none;/*火狐浏览器*/
        -ms-user-select:none;/*IE浏览器*/
        user-select:none;/*用户是否能够选中文本*/
    }
```

此段css样式加入后能解决ios下手机浏览器，微信浏览器长按出现选择系统菜单问题，但是对于Android下微信浏览器还会出现不兼容问题。

##### 禁止长按弹出系统菜单

```javascript
    // 待测试
    //oncontextmenu 事件在元素中用户右击鼠标时触发并打开上下文菜单，此处用于阻止菜单的出现。

    //PC端 使右键和复制失效
    document.oncontextmenu = new Function("event.returnValue=false");
    document.onselectstart = new Function("event.returnValue=false");
    //ios
    document.oncontextmenu = function (e) {
        e.preventDefault();
    };
    document.onselectstart = function (e) {
        e.preventDefault();
    };
    //安卓
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
    document.ontouchend = function () {
        throw new Error("NO ERRPR:禁止长按弹出");
    }
```

安卓UC浏览器上还需加入以下代码，可以禁止长按呼出菜单:

```html
    <!-- 待测试 -->
    <!-- 安卓UC浏览器 禁用长按 右键菜单 -->
    <meta name="browsermode" content="application"/>

```
