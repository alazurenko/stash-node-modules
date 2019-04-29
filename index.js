#!/usr/bin/env node
const fs = require("fs");
const { exec } = require("child_process");
const { promisify } = require("util");

const run = promisify(exec);
const exists = promisify(fs.exists);
const rename = promisify(fs.rename);
const log = console.log;

const NODE_MODULES = "node_modules";
const STASHED_NODE_MODULES = "stashed_modules";
const GIT_CMD = "git rev-parse --abbrev-ref HEAD";
const cwd = process.cwd();

async function getBranchName() {
  const result = await run(GIT_CMD).catch(({ stderr }) => log(stderr));
  return result.stdout.trim().replace("/", "-");
}

async function renameFolder(name, newName) {
  await rename(name, newName).catch(e => log(e));
  log(`${name} has been renamed to ${newName}`);
}

async function toggle() {
  const branch= await getBranchName();
  const newName = `${STASHED_NODE_MODULES}-${branch}`;
  const hasModules = await exists(`${cwd}/${NODE_MODULES}`);
  const hasRenamedModules = await exists(`${cwd}/${newName}`);

  if (!branch) {
    return;
  }

  if (hasModules) {
    renameFolder(NODE_MODULES, newName);
  } else if (hasRenamedModules) {
    renameFolder(newName, NODE_MODULES);
  }
}

toggle();
