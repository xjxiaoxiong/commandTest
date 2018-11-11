#!/usr/bin/env node
/**
 * Created by bytedance on 2018/11/12.
 */


const program = require('commander');

program
    .version('0.1.0')
    .option('-n, --yourname [yourname]', 'Your name')
    .option('-g, --glad', 'Tell us you are happy')
    .parse(process.argv);

if (program.yourname) {
    console.log(`Hello, ${program.yourname}! ${program.glad ? 'I am very happy to see you!' : ''}`);
}