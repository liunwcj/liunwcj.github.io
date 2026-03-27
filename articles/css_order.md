---
title: CSS 属性书写顺序
date: 2020-09-03 17:34
---

##### 属性书写顺序

Formatting Model（布局方式、位置） > Box Model（尺寸） > Typographic（文本相关） > Visual（视觉效果） 的顺序书写，以提高代码的可读性。

>1、布局定位属性：display / position / float / clear / visibility / overflow
>2、自身属性：width / height / margin / padding / border / background
>3、文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
>4、其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

```CSS
    /* Dome */
    .test{
        display: block;
        position: relative;
        float: left;
        width: 100px;
        height: 100px;
        margin: 0 10px;
        padding: 20px 0;
        font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
        color: #333;
        background: rgba(0,0,0,.5);
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        -o-border-radius: 10px;
        -ms-border-radius: 10px;
        border-radius: 10px;
    }

    /* CSS3浏览器私有前缀写法 */
    .el {
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        -o-border-radius: 10px;
        -ms-border-radius: 10px;
        border-radius: 10px;
    }
```

##### 参考
>https://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#vendor-keywords
>https://www.shejidaren.com/css-written-specifications.html
>https://www.cnblogs.com/ranran/p/3865472.html
