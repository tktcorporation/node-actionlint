const crypto = require("crypto");
global.crypto = crypto;

const { performance } = require("perf_hooks");
global.performance = performance;
