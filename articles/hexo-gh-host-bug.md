---
title: Hexo推送Github需要重新绑定域名问题
date: 2022-02-11 23:55:21
tags:
---

当你自定义 Github Pages 域名时，是否出现了每次hexo deploy，自定义域名都失效的问题呢?

#### 解决方案：
1、找到 hexo 博客根目录下的 source 文件夹。( 注意，不是主题的 source 文件夹。)当 hexo 生成静态页面时，根目录下的 source 文件夹中的内容，就会在生成的网页根目录中（你可以在部署到github后，在仓库中查看，此时本地根目录下source文件夹的内容就在仓库的根目下）。

2、新建一个文件，名为 CNAME ，内容为你的域名（不包括www.或http等等）例：liunwcj.cn。

3、hexo g -d

    注意：
    -- 名为 CNAME，全部大写，没有后缀。
    -- 内容只包含一个域名，且不含 www. 或 http 等。
    -- 放到根目录下的source文件夹中。
