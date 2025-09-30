---
title: Setting up Git
description: Git is useful for collaborating with other people and lets you undo mistakes or identify bugs.
order: 8
tags:
  - advanced
---

Git is a type of version control software that tracks changes in your code. For example, when you edit a file, Git can help you determine exactly what changed, who changed it, and why.

Git is not the same as GitHub. Git stores versions of your work, and lets you collaborate more easily with others. GitHub puts it all online with a web interface.

If you want to use GitHub Desktop, go to our guide for [using GitHub and GitHub Desktop](/guides/github).

## 1. Check if you have Git installed

Open a terminal, type <kbd>git --version</kbd> and press enter.

If git is installed, you will see the version installed, something similar to this:

```shell
Last login: Mon Sep 15 10:30:15 on ttys000
MacBook-Pro:~ florence$ git --version
git version 2.39.5
MacBook-Pro:~ florence$ █
```

You can now [set a username and password](#git-user-password).

If git is not installed you will see <samp>git: command not found</samp>, something similar to this:

```shell
Last login: Mon Sep 15 10:30:15 on ttys000
MacBook-Pro:~ florence$ git --version
zsh: git: command not found
MacBook-Pro:~ florence$ █
```

You will need to [install Git](https://git-scm.com/downloads) before continuing.

## 2. Set a username and password

Once Git is installed, you should set your user name and email address.

```sh
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR EMAIL ADDRESS"
```

For example, <kbd>git config --global user.name "Kevin Francis"</kbd>.

If you have a [GitHub](https://github.com/) account, use the same email address for both.

## 3. Initialise a Git repo

The first time you use Git on your prototype, you need to initialise it.

In your prototype folder, enter in the terminal <kbd>git init</kbd>

```shell
Last login: Mon Sep 15 10:30:15 on ttys000
MacBook-Pro:~ florence$ cd ~/Projects/find-a-pharmacy
MacBook-Pro:~ florence$ git init
Initialized empty Git repository in /Users/florence/Projects/find-a-pharmacy/.git/
MacBook-Pro:find-a-pharmacy florence$ █
```

Initialising the repo creates a hidden <samp>.git</samp> folder in your project and is where it stores the internal tracking data .

## 4. Check Git status

You can view the status of your project with the command <kbd>git status</kbd>

This will show you some basic information, such as which files have recently been modified.

As this is a new Git repo, all files in the kit will be listed as having changed.

It's a good idea to run <kbd>git status</kbd> anytime you're confused. Git will give you additional information depending on what's currently going on to help you out.

## 5. Doing your first commit

There are 2 stages of committing your changes. The first is to select the specific files with changes you want to commit, called 'staging'. The second is to commit all the changes in 'staging'.

Add all files that have changes by running <kbd>git add .</kbd>

### Check Git status

Run <kbd>git status</kbd> to check the files you've got in the stage. You will see a list of all the files just added under the heading `Changes to be committed`.

```shell
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   package-lock.json
        new file:   package.json

MacBook-Pro:find-a-pharmacy florence$ █
```

### Commit the files in 'staging'

Enter in the terminal <kbd>git commit -m "First commit"</kbd>:

```shell
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   package-lock.json
        new file:   package.json

MacBook-Pro:find-a-pharmacy florence$ git commit -m "First commit"█
```

The message you put in the speech marks should be descriptive of the changes you are committing. This will help in the future if you or someone else needs to look back at your changes and know why you made them.

Github has more information on [writing good commit messages](https://github.com/erlang/otp/wiki/writing-good-commit-messages).

## 6. Check Git status again

Run <kbd>git status</kbd> again, and it should say <samp>nothing to commit</samp> -- all the changes you selected have been saved.

```shell
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
 create mode 100755 package-lock.json
 create mode 100755 package.json

MacBook-Pro:find-a-pharmacy florence$ git status
On branch main
nothing to commit, working tree clean

MacBook-Pro:find-a-pharmacy florence$ █
```

## 7. Learning Git

You can learn more about Git at:

- [GitHub tutorial on Git](https://try.github.io/levels/1/challenges/1)
- [Advanced Git tutorial](http://think-like-a-git.net/)
