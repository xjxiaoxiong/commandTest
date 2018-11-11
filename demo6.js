#!/usr/bin/env node

const program = require('commander');

program
  .version('0.1.0')
  .option('-n, --your [yourname]', 'Your name')
  .option('-g, --glad [glad]', 'Tell us you are happy')
  .parse(process.argv);

if (program.your) {
  console.log(`Hello, ${program.your}! ${program.glad ? 'I am very happy to see you!' : ''}`);
}

if (program.glad) {
  console.log(`Hello, ${program.glad}! ${program.glad ? 'I am very happy to see you!' : ''}`);
}

program
   .command('help')
   .description('display verbose help')
   .action(function() {
      // output help here
   });
