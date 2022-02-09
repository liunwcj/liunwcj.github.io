---
title: git bash中vue-cli 无法选择设置
date: 2020-10-02 01:18
---
windows下默认cmd用过的人都知道，在windows我一般都用git bash代替cmd。
vue-cli 项目创建时，git bash箭头选择无效问题。
通过设置 git bash的alias(配置永久别名)。

1、用户目录下创建 .bash_profile 文件( ~/.bash_profile)。

```bash
    # 打开 git bash
    cd  # 返回用户根目录
    vim .bash_profile # 使用 vim 打开 .bash_profile 文件
```

2、复制粘贴2行配置。

```bash
    # 用git bash使用 vue映射成 winpty vue.cmd
    alias vue="winpty vue.cmd"

    # 在macOS下打开当前目录管理器也顺带加上
    alias open="explorer" 
```

##### 参考：
>https://segmentfault.com/a/1190000011532209
>https://segmentfault.com/a/1190000004413842 (.bashrc和.bash_profile之间的不同)
