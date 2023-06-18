#! /usr/bin/env node

"use strict"

const yargs = require('yargs');

const options = yargs
    .option("v", {
        alias: "v",
        describe: "values for the ggt calculation",
        type: "array",
        coerce: (arg) => arg.map(Number)
    })
    .command("$0 [v..]", "values for ggt calculation")
    .argv;

console.log(options.v);
