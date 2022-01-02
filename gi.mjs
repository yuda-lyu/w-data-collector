import genIndex from './src/genIndex.mjs'


genIndex('./test/schema/tables', './test/schema', { fpBuild: './src/build.mjs' })


//node --experimental-modules --es-module-specifier-resolution=node gi.mjs


//將gi.mjs放置於./src/schema/gi.mjs時
// import genIndex from 'w-data-collector/src/genIndex.mjs'
// //genIndex
// genIndex('./src/schema/tables', './src/schema')
// // node --experimental-modules --es-module-specifier-resolution=node ./src/schema/gi.mjs


