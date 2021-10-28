import genTestdata from 'w-data-collector/src/genTestdata.mjs'
import ds from './index.mjs'
import { woItems } from '../../server/mOrm.mjs'


genTestdata(ds, woItems)


//將gt.mjs放置於./src/schema/gt.mjs時使用指令:
//node --experimental-modules --es-module-specifier-resolution=node ./src/schema/gt.mjs

