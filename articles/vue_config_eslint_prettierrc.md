---
title: vue开启ESLint+Prettier，vscode配置
date: 2020-10-14 15:04   
---

##### 1、vscode 需要安装 Vetur、ESLint、Prettier - Code formatter 这三个插件
![vscode_plugin](/imgs/eslint/vscode_plugin_1.png)

##### 2、打开vscode工具的设置（快捷键 Ctrl + ,）里面有两个设置。
一个是 USER SETTINGS（用户设置）也就是全局配置，其他项目也会应用这个配置。
另一个是WORKSPACE SETTINGS（工作区设置）也就是项目配置，会在当前项目的根路径里创建一个.vscode/settings.json文件，然后配置只在当前项目生效。
```json
{
    // 个人习惯写在用户配置中，方便(Settings Sync)同步，Dome测试。Fix:建议写在单独工作区配置。
    // eslint & prettierrc S
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true // eslint配置项，保存时自动修复
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode", // 默认使用prettier格式化支持的文件
    "eslint.workingDirectories": [{ "mode": "auto" }], // 自动设定eslint工作区
    "editor.formatOnSave": true // 每次保存的时候自动格式化
    // eslint & prettierrc E
}
```

##### 3、在构建vue项目(vue create vue)配置中，注意勾选几个事项。
![eslint1](/imgs/eslint/vue_create_config_1.png)
![eslint2](/imgs/eslint/vue_create_config_2.png)
![eslint3](/imgs/eslint/vue_create_config_3.png)
![eslint4](/imgs/eslint/vue_create_config_4.png)


##### 4、在项目的根目录建一个.prettierrc文件，在文件里写上如下代码。
```json
{
    "semi": false,    // 使用分号, 默认true
    "singleQuote": true,   // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
}
```

##### 参考
>https://segmentfault.com/a/1190000016964384
>https://www.jianshu.com/p/4be58a69b20f
>https://www.jb51.net/article/183275.htm

##### 优化
>https://github.com/forthealllight/blog/issues/45
