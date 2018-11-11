var options = require('commander')

options.description('this is a demo to get it  how to run')
.option('-d, --dev-server [path]', 'dev API server path')
.option('-b, --bbq', 'Add bbq sauce')
.action(async option=>{
 console.log('option',option)
}).parse(process.argv)
