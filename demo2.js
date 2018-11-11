var program = require('commander');

program
  .command('dev')
  .description('GARR dev service! 启动 http 和 proxy 并植入 Chrome session')
  .option('-d, --dev-server [path]', 'dev API server path')
  .option(
    '-C, --core <core>',
    '调试 garr-core，请指定路径, 请先自行 build (npm run build 命令默认到 dist)'
  )
  .option(
    '-T, --template <template>',
    '调试 pgc_web_v3，请指定路径, 请自行 build (npm run build 命令默认到 output)'
  )
  .option('-E, --template-entry <entry>', '调试 pgc_web_v3 模板文件')
  .option('-P, --pre-pub', '预发布检查')
  .option('-p, --port [port]', 'local service port;', a => {
    parseInt(a);
  }).action( async option=>{
    console.log(option)
  })