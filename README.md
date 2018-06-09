# stash-node-modules
> Stash node modules based on git branch

## Install
`npm i -g stash-node-modules`

## Motivation
Working simultaneously on multiple feature branches with a different set of
dependencies within one project could be tedious due to frequent
re-installation of dependencies. The basic solution is to rename node-modules
with a suffix of a branch name.

## How to use
```
> snm
// node_modules has been renamed to node_modules-master
> snm
// node_modules-master has been renamed to node_modules
```

## License
[MIT](https://opensource.org/licenses/mit-license.php)