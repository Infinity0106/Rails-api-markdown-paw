# Changelog

this will show you how to verify that you have changed your
Changelog before committing your files, every push you should
keep an eye on your changelog.md

## Git hooks

the hook that we will be using is
**pre-commit**: runs before writing your commit message

1.  locate your hooks directory

```sh
$ cd ./.git/hooks
```

2.  create a file named pre-commit

```sh
$ touch pre-commit
```

3.  paste the following code

```bash
#! /bin/bash

if [[ $(git diff --cached --name-only CHANGELOG.md) ]] || [[ $(git diff --name-only CHANGELOG.md) ]]; then
  exit 0
else
  echo "You haven't change the CHANGELOG.md"
  exit 1
fi
```

4.  make it executable

```sh
$ chmod +x pre-commit
```

## what does it do?

every time you try to commit changes you should have updated your changelog
in case anything has changed error code will pop up saying "You haven't change the CHANGELOG.md".

the way it works is it checks if changelog.md has changed in the staged area or not staged area
if it is not in those two options and hasn't change at all, commit will abort.

## references

[Git-Hooks](https://www.atlassian.com/git/tutorials/git-hooks)
