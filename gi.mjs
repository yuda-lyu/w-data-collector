// import genIndex from 'w-data-collector/src/genIndex.mjs'
import genIndex from './src/genIndex.mjs'


// genIndex('./src/schema/tables', './src/schema')
genIndex('./test/schema/tables', './test/schema', { fpBuild: './src/build.mjs' })


//將gi.mjs放置於./src/schema/gi.mjs時使用指令:
//node --experimental-modules --es-module-specifier-resolution=node ./src/schema/gi.mjs

//node --experimental-modules --es-module-specifier-resolution=node gi.mjs

