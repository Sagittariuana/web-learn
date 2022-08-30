# Git教程

## 1.简介

Git是目前世界上最先进的分布式版本控制系统

### 集中式版本控制系统

![central-repo](https://www.liaoxuefeng.com/files/attachments/918921540355872/l)

### 分布式版本控制系统

首先，分布式版本控制系统根本没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样，你工作的时候，就不需要联网了，因为版本库就在你自己的电脑上。既然每个人电脑上都有一个完整的版本库，那多个人如何协作呢？比方说你在自己电脑上改了文件A，你的同事也在他的电脑上改了文件A，这时，你们俩之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。

![distributed-repo](https://www.liaoxuefeng.com/files/attachments/918921562236160/l)

## 2.设置

由于git是分布式管理工具，需要输入用户名和邮箱以作为标识，因此，进入git后在命令行输入下列的命令：

```shell
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```

## 3.工作原理

### 1.工作流程

![img](https://images2018.cnblogs.com/blog/983980/201804/983980-20180413161631709-1972549145.png)

- 克隆 Git 资源作为工作目录。
- 在克隆的资源上添加或修改文件。
- 如果其他人修改了，你可以更新资源。
- 在提交前查看修改。
- 提交修改。
- 在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。

### 2.名词解释

工作区（Working Directory）：指的是在电脑里能看到的目录，比如mymenu文件夹就是一个工作区

版本库（Repository）：.git目录，Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支master，以及指向master的一个指针叫HEAD。

git add是把需要提交的文件添加到暂存区，git commit是把暂存区的所有内容提交到当前分支

![img](https://img-blog.csdnimg.cn/20201223105444452.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0OTY0MTk3,size_16,color_FFFFFF,t_70)

## 4.Git创建仓库

### 1.git init

Git 使用 **git init** 命令来初始化一个 Git 仓库，在执行完成 **git init** 命令后，Git 仓库会生成一个 .git 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变。

```sh
git init
```

### 2.git clone

我们使用 **git clone** 从现有 Git 仓库中拷贝项目（类似 **svn checkout**）。

克隆仓库的命令格式为：

```sh
git clone <repo>
```

如果我们需要克隆到指定的目录，可以使用以下命令格式：

```sh
git clone <repo> <directory>
```

**参数说明：**

- **repo:**Git 仓库。
- **directory:**本地目录。

## 5.基本使用

git add：将文件提交到暂存区

git commit -m：将暂存区文件提交到仓库（单引号内为注释），每一次commit就会产生一个快照

git status：检查当前文件状态

git diff：查看文件修改的内容

git reset --hard HEAD^：版本回退

- `HEAD`指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。
- 穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本。
- 要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。

git rm：删除文件

## 6.远程仓库

### 创建远程仓库

第1步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有`id_rsa`和`id_rsa.pub`这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：

```sh
ssh-keygen -t rsa -C "youremail@example.com"
```

你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可

如果一切顺利的话，可以在用户主目录里找到`.ssh`目录，里面有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，不能泄露出去，`id_rsa.pub`是公钥，可以放心地告诉任何人。

第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面；然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴`id_rsa.pub`文件的内容

第三步：在本地的仓库运行以下指令，关联到有自己ssh公钥的远程仓库：

```sh
 git remote add origin git@github.com:自己的.git
```

第四步：把本地库的内容推送到远程，用`git push`命令，实际上是把当前分支`master`推送到远程。

### 删除远程仓库

如果添加的时候地址写错了，或者就是想删除远程库，可以用`git remote rm <name>`命令。使用前，建议先用`git remote -v`查看远程库信息：

```sh
$ git remote -v
origin  git@github.com:michaelliao/learn-git.git (fetch)
origin  git@github.com:michaelliao/learn-git.git (push)
```

然后，根据名字删除，比如删除`origin`：

```sh
$ git remote rm origin
```

此处的“删除”其实是解除了本地和远程的绑定关系，并不是物理上删除了远程库。远程库本身并没有任何改动。要真正删除远程库，需要登录到GitHub，在后台页面找到删除按钮再删除。

### 远程仓库克隆

要克隆一个仓库，首先必须知道仓库的地址，然后使用`git clone`命令克隆。

Git支持多种协议，包括`https`，但`ssh`协议速度最快。

## 创建与合并分支

### 原理

每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即`master`分支。`HEAD`严格来说不是指向提交，而是指向`master`，`master`才是指向提交的，所以，`HEAD`指向的就是当前分支。

一开始的时候，`master`分支是一条线，Git用`master`指向最新的提交，再用`HEAD`指向`master`，就能确定当前分支，以及当前分支的提交点：

![git-br-initial](https://www.liaoxuefeng.com/files/attachments/919022325462368/0)

每次提交，`master`分支都会向前移动一步，这样，随着你不断提交，`master`分支的线也越来越长。

当我们创建新的分支，例如`dev`时，Git新建了一个指针叫`dev`，指向`master`相同的提交，再把`HEAD`指向`dev`，就表示当前分支在`dev`上：

![git-br-create](https://www.liaoxuefeng.com/files/attachments/919022363210080/l)

不过，从现在开始，对工作区的修改和提交就是针对`dev`分支了，比如新提交一次后，`dev`指针往前移动一步，而`master`指针不变：

![git-br-dev-fd](https://www.liaoxuefeng.com/files/attachments/919022387118368/l)

假如我们在`dev`上的工作完成了，就可以把`dev`合并到`master`上。最简单的方法，就是直接把`master`指向`dev`的当前提交，就完成了合并：

![git-br-ff-merge](https://www.liaoxuefeng.com/files/attachments/919022412005504/0)

合并完分支后，甚至可以删除`dev`分支。删除`dev`分支就是把`dev`指针给删掉，删掉后，我们就剩下了一条`master`分支：

![git-br-rm](https://www.liaoxuefeng.com/files/attachments/919022479428512/0)

### 具体操作

创建分支：

最新版本的Git提供了新的`git switch`命令来切换分支：

创建并切换到新的`dev`分支，可以使用：

```sh
$ git switch -c dev
```

```sh
$ git checkout -b dev
Switched to a new branch 'dev'
```

`git checkout`命令加上`-b`参数表示创建并切换，相当于以下指令

```sh
$ git branch dev
$ git checkout dev
Switched to branch 'dev'
```

查看分支：

```sh
$ git branch
* dev
  master
```

切换分支：

```sh
$ git checkout master
Switched to branch 'master'
```

直接切换到已有的`master`分支，可以使用：

```sh
$ git switch master
```

合并分支：`git merge`命令用于合并指定分支到当前分支。

```sh
$ git merge dev
// “快速合并”
```

删除分支：

```sh
$ git branch -d dev
```

### 解决冲突

当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。

用`git log --graph`命令可以看到分支合并图。

### 多人协作

- 查看远程库信息，使用`git remote -v`；
- 本地新建的分支如果不推送到远程，对其他人就是不可见的；
- 从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用`git pull`抓取远程的新提交；
- 在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；
- 建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`；
- 从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。

