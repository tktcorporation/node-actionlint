#!/usr/bin/env node

const { run } = require("../build/cli.js");

const args = process.argv.slice(2);
run(args[0]);
