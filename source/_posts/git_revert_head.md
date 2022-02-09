---
title: git add后如何撤销?
date: 2020-09-13 12:15
---

<!-- ![Alt text](图片链接 "title text") -->
![git-add](/imgs/git_reset_head_1.png)

在日常的工作中，git 添加操作是最基本的Git命令之一。
以下是 Git 上传的原理及上传命令的几个步骤：
在工作区（working directory）进行内容改动后，需要add操作，将文件添加到暂存区（index）。
然后再 commit ，改动的内容才在本地仓库（local repository，或者也叫版本库）中生效。
然后 push 到远程仓库（remote repository），才能在远程仓库中查看或者使用。

### git add 添加命令的常用操作：
#### 1、添加所有文件到暂存区

一般情况下，我们会用 <font style="background-color:#CCC;">&nbsp; . &nbsp;</font> 或者 <font style="background-color:#CCC;">&nbsp; * &nbsp;</font> 来提交，表示的是所有，是一种正则表达式。
不加参数默认为将修改操作的文件和未跟踪新添加的文件添加到git系统的暂存区，注意不包括删除。
```bash
    git add *
    # or
    git add .

    # 拓展：
    # -u 表示将已跟踪文件中的修改和删除的文件添加到暂存区，不包括新增加的文件，
    # 注意这些被删除的文件被加入到暂存区再被提交并推送到服务器的版本库之后这个文件就会从git系统中消失了。
    git add -u .

    # -A 表示将所有的已跟踪的文件的修改与删除和新增的未跟踪的文件都添加到暂存区。
    git add -A .
```

#### 2、添加某个文件类型到暂存区
```bash 
    # 如：所有的 .html 文件。
    git add *.html
```

#### 3、添加整个文件夹到暂存区
```bash 
    # 如：根目录的 mod 文件夹
    git add mod/
```

#### 4、添加某个文件或者某个文件夹中的某个文件到暂存区
```bash 
    # 如：根目录的 mod/index.html 文件
    git add mod/index.html
```

### 取消/撤销文件 add
```bash
    # 撤销操作

    # 查看一下git add 中的文件 
    git status 

    # 如果后面什么都不跟的话 就是上一次git add 里面的文件全部撤销 
    git reset HEAD

    # 对某个文件进行撤销
    git reset HEAD XXX.html 
```

