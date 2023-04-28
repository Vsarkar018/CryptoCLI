#!/usr/bin/env nod
const program = require("commander");
const pkg = require("../package.json");
program
  .version(pkg.version)
  .command("key", "API Key - ")
  .command("check", "check coin price info")
  .parse(process.argv);
