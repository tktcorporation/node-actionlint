#!/usr/bin/env node

import { run } from "../build/cli.js";

const args = process.argv.slice(2);
run(args[0]);
