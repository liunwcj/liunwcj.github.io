---
title: CSS处理文字不换行、换行截断、溢出省略号
date: 2020-09-03 15:31  
---

每次都要搜索，这里直接来个总结。

##### 1、使文字不换行
    white-space: nowrap;

值|描述
--|--
normal|默认。空白会被浏览器忽略。
pre|空白会被浏览器保留。其行为方式类似 HTML 中的 &lt;pre&gt; 标签。
nowrap|文本不会换行，文本会在在同一行上继续，直到遇到 &lt;br&gt; 标签为止。
pre-wrap|保留空白符序列，但是正常地进行换行。
pre-line|合并空白符序列，但是保留换行符。
inherit|规定应该从父元素继承 white-space 属性的值。

##### 2、允许长单词换行
    word-wrap:break-word;

|值|描述|
|--|--|
|normal|只在允许的断字点换行（浏览器保持默认处理）。|
|break-word|在长单词或 URL 地址内部进行换行。|

##### 3、允许长单词换行
    word-break:break-all;

|值|描述|
|--|--|
|normal|使用浏览器默认的换行规则。|
|break-all|允许在单词内换行。|
|keep-all|只能在半角空格或连字符处换行。|

##### 4、单行文字超出显示省略号
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

##### 5、多行文字超出显示省略号
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
