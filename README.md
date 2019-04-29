# stash-node-modules

> Stash node modules based on git branch

## Install
```sh
$ git clone https://github.com/alazurenko/stash-node-modules.git

$ cd stash-node-modules && npm link
```

Then `snm` will be available as global command

## Motivation

Working simultaneously on multiple feature branches with a different set of
dependencies within one project could be tedious due to frequent
re-installation of dependencies. The basic solution is to rename node-modules
with a suffix of a branch name gives an ability to switch between branches less
time-consuming.

## How to use

```sh
$ snm
// node_modules has been renamed to stashed_modules
$ snm
// stashed_modules has been renamed to node_modules
```

Also update `.gitignore` with pattern for renamed node_modules for convenience.

```
stashed_modules*
```

## License

[MIT](https://opensource.org/licenses/mit-license.php)
