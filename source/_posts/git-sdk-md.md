---
title: windows 安装 Git Bash 增强版（Git SDK 安装和配置）
date: 2023-09-27 16:04:31
tags:
---

#### 应用场景
不折腾，本着实用的原则，装一个zsh，并使用oh-my-zsh的配置，提高命令行的使用体验，让它看上去跟mac/linux差不多。
>切记：一切对于效率提升没有帮助的美化，都是耍流氓。

#### 原生 zsh
比起很多种Shell，我想可能还是 zsh 更加有吸引力；虽然 zsh 是 Linux 上的玩意，但是我想大家都用过 Git Bash —— 一个基于 MinGW64 环境的仿 Linux 环境的终端；虽然它已经很 Linux 了，但是很多功能还是被删减了；但是我们可以使用未删减的 Git SDK 来使用 zsh；

Git SDK 全称 Git for Windows SDK，是基于 MSYS2（MinGW64 + Cygwin 合体增强）的仿 Linux 环境；安装后大约会占用 4~5 GB 的磁盘空间，但是包含了完整的仿 Linux 环境：包括常用工具，完整的 GNU Complier 链以及包管理器 pacman；基本上是一套完整的集成开发环境，所以是 SDK ==

此外，虽然 Git SDK 是基于 MSYS2 的，是 Git 的超集…… 但是你仍然需要安装 Git（可能可以通过适当的配置解决），因为很多软件只认识 Git；建议安装 Git SDK 而不是 MSYS2，因为前者比后者好用。

#### 安装
##### 1、安装 git 发行版 git for windows
要安装 git sdk，需要先安装 git，你可以去 [Git for Windows](https://gitforwindows.org/) 官网，点击如图按钮下载
![step1](/imgs/git_sdk/install1.png)

##### 2、安装 Git SDK
在 [Git for Windows](https://gitforwindows.org/) 官网，拉到最下面可以看到 Git SDK 的下载；
![step2](/imgs/git_sdk/install2.png)
也可以通过链接 https://github.com/git-for-windows/build-extra/releases/latest 下载一个64位 的安装器。
	
安装步骤如下：
将下载后的文件 git-sdk-installer-1.0.8-64.7z.exe 解压到指定盘符。
![step3](/imgs/git_sdk/install3.png)
等待自动化安装过程：(有点慢，科学加速)
![step4](/imgs/git_sdk/install4.png)

	如果安装过程中，报错安装失败
	手动打开 C:\git-sdk-64，显示系统隐藏文件，然后删除.git 文件夹，然后手动管理员身份运行 C:\git-sdk-64 下的 setup-git-sdk.bat

##### 3、配置环境变量
![step5](/imgs/git_sdk/install5.png)
![step6](/imgs/git_sdk/install6.png)

##### 4、修改 pacman 软件包源
在 /etc/pacman.d/ 目录下有三个文件：mirrorlist.msys、mirrorlist.mingw64 和 mirrorlist.mingw32；我们可以直接在 Windows 中使用文本编辑器修改它们为国内源：
```bash
##
## MSYS2 repository mirrorlist
##

## Primary
## msys2.org
Server = http://mirrors.ustc.edu.cn/msys2/msys/$arch/
Server = http://repo.msys2.org/msys/$arch
Server = http://downloads.sourceforge.net/project/msys2/REPOS/MSYS2/$arch
Server = http://www2.futureware.at/~nickoe/msys2-mirror/msys/$arch/
Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/msys/$arch/

##
## 64-bit Mingw-w64 repository mirrorlist
##

## Primary
## msys2.org
Server = http://mirrors.ustc.edu.cn/msys2/mingw/x86_64/
Server = http://repo.msys2.org/mingw/x86_64
Server = http://downloads.sourceforge.net/project/msys2/REPOS/MINGW/x86_64
Server = http://www2.futureware.at/~nickoe/msys2-mirror/x86_64/
Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/x86_64/

##
## 32-bit Mingw-w64 repository mirrorlist
##

## Primary
## msys2.org
Server = http://mirrors.ustc.edu.cn/msys2/mingw/i686/
Server = http://repo.msys2.org/mingw/i686
Server = http://downloads.sourceforge.net/project/msys2/REPOS/MINGW/i686
Server = http://www2.futureware.at/~nickoe/msys2-mirror/i686/
Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/i686/
```
注意服务器的顺序，将国内服务器放在优先的位置才能保证 pacman 优先使用它；
调整之后执行 pacman -Syu 和 pacman -Su 更新源信息，首次更新可能需要重启；

##### 5、安装 zsh 以及 oh my zsh
先安装 zsh
```bash
pacman -S zsh
```
再安装 oh-my-zsh
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
# ↑ 通过 curl 或者 通过 wget ↓
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```
当然，修改 host 文件，设置终端代理过于麻烦；我们可以科学上网后直接访问上述命令中的地址，获得脚本的内容后放到某个文件夹下，再使用 zsh 去执行脚本即可；
安装后脚本会在 ~ 目录下创建 .oh-my-zsh 目录，和 ~/.zshrc 在同一个目录中；这个 ~ 目录对应的就是 Windows 的用户文件夹。

###### 关闭自动更新
此外，oh-my-zsh 会定期的运行更新检查来从 Github 下载最新的更新；但是由于国内网络环境的因素，这个过程并不能流利地进行，这样就会导致在更新的时候卡在初始化终端，造成不好的体验；关闭自动更新也需要编辑 ~/.zshrc 文件，找到 DISABLE_AUTO_UPDATE 项目，并取消其默认的注释：
```bash
- # DISABLE_AUTO_UPDATE="true"
+ DISABLE_AUTO_UPDATE="true"
```
这样就关闭了 oh-my-zsh 定期的自动更新；如果需要手动更新，可以运行 upgrade_oh_my_zsh

###### 字体问题
上面说到了只有安装 PowerLine 字体才可以显示一些美妙的图标；但是如果你跑了一遍 p10k 的配置之后就会发现，上面提到的好一部分 PL 字体并不支持显示 fontawesome 上的图标，比如那个锁就会显示成一个方块，这不太行；前几天再网上瞎jb翻的时候看到了一种字体叫做 [Nerd Fonts](https://www.nerdfonts.com/)，有一种 [Hack Nerd Font](https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Hack.zip) 似乎可以很棒的兼容这些图标，所以在这里推荐一手（
实际上，除了 oh my posh，其他的终端美化都是使用打包了 Fontawesome 的 Hack 字体作为更丰富的图标支持的；如果你需要使用包含多个图标的字体，比起一般的 PowerLine 字体，还是建议来一个 Hack 字体

#### 参考
- https://zhuanlan.zhihu.com/p/19556676
- https://shiraha.cn/2020/use-zsh-in-windows-10-with-wtd-and-vscode
- https://www.jianshu.com/p/67df4d3aa22d
- https://marvinsblog.net/post/2022-03-05-build-git-for-windows/
- https://i.lckiss.com/?p=7654
- https://mirrors.tuna.tsinghua.edu.cn/help/msys2/
- https://lamirs.vercel.app/git-sdk%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE
