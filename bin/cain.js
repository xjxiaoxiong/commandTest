#! /usr/bin/env node

var program = require('commander'),
    chalk = require('chalk'),
    SassMain = require('./sass.js');

/**
 * sass编译执行及监听
 */
program
    .command('sass')
    .option('--w', '监听sass变化，自动执行编译')
    .alias('sa')
    .description('sass转化css')
    .action(function (option) {
        var isWatch = option.w ? true : false;
        if (isWatch) {
            SassMain.sassWatch();
        }else {
            SassMain.sassMake();
        }
    });