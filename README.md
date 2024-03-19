# w-data-collector
An collector for data.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-data-collector.svg?style=flat)](https://npmjs.org/package/w-data-collector) 
[![license](https://img.shields.io/npm/l/w-data-collector.svg?style=flat)](https://npmjs.org/package/w-data-collector) 
[![gzip file size](http://img.badgesize.io/yuda-lyu/w-data-collector/master/dist/w-data-collector.umd.js.svg?compression=gzip)](https://github.com/yuda-lyu/w-data-collector)
[![npm download](https://img.shields.io/npm/dt/w-data-collector.svg)](https://npmjs.org/package/w-data-collector) 
[![npm download](https://img.shields.io/npm/dm/w-data-collector.svg)](https://npmjs.org/package/w-data-collector) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-data-collector.svg)](https://www.jsdelivr.com/package/npm/w-data-collector)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-data-collector/global.html).

## Installation
### Using npm(ES6 module):
> **Note:** w-data-collector is mainly dependent on `lodash-es` and `wsemi`.
```alias
npm i w-data-collector
```

#### Example for genIndex:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-data-collector/blob/master/gi.mjs)]
```alias
import genIndex from 'w-data-collector/src/genIndex.mjs'

genIndex('./src/schema/tables', './src/schema', {})
// => genIndex done
```

#### Example for genTestdata:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-data-collector/blob/master/gt.mjs)]
```alias
import genTestdata from 'w-data-collector/src/genTestdata.mjs'
import ds from './index.mjs'
import { woItems } from '../../server/mOrm.mjs'

genTestdata(ds, woItems, {})
// => genTestdata done
```
