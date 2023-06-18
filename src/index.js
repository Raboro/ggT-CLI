#! /usr/bin/env node

'use strict';

const yargs = require('yargs');

const options = yargs
    .option('v', {
        alias: 'v',
        describe: 'values for the ggt calculation',
        type: 'array',
        coerce: (arg) => arg.map(Number)
    })
    .command('$0 [v..]', 'values for ggt calculation')
    .argv;

console.log(calcGGT(options.v));

function calcGGT(...values) {
    values = values[0];
    let ggt = values[0];
    for (const value of values) {
        ggt = ggT(ggt, value);
    }
    return ggt;
}

function ggT(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}
