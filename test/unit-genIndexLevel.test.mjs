import fs from 'fs'
import assert from 'assert'
import genIndex from '../src/genIndex.mjs'


//規格對應(R-01, 列舉層數): genIndex僅列舉fdSrc下第1層(各資料表定義檔平放於fdSrc), 不列舉子資料夾內之檔
//  S1. 第1層之資料表定義檔皆出現於產出之index.mjs
//  S2. 子資料夾(含更深層)內之檔不出現於產出之index.mjs(wsemi 1.9.80起fsTreeFolder未給levelLimit即窮舉全部層級, 須明寫{ levelLimit: 1 })

//測試中介檔置於test/_tmp/genIndexLevel並於測完刪除
let fdTmp = './test/_tmp/genIndexLevel'

describe(`genIndexLevel`, function() {

    before(function() {
        fs.rmSync(fdTmp, { recursive: true, force: true })

        //第1層: tA.mjs, tB.mjs; 子層: sub/tNested.mjs; 更深層: sub/deeper/tDeep.mjs
        fs.mkdirSync(`${fdTmp}/tables/sub/deeper`, { recursive: true })
        fs.writeFileSync(`${fdTmp}/tables/tA.mjs`, 'export default {}\n', 'utf8')
        fs.writeFileSync(`${fdTmp}/tables/tB.mjs`, 'export default {}\n', 'utf8')
        fs.writeFileSync(`${fdTmp}/tables/sub/tNested.mjs`, 'export default {}\n', 'utf8')
        fs.writeFileSync(`${fdTmp}/tables/sub/deeper/tDeep.mjs`, 'export default {}\n', 'utf8')
    })

    after(function() {
        fs.rmSync(fdTmp, { recursive: true, force: true })
        try {
            fs.rmdirSync('./test/_tmp') //僅於已無其他測試之中介資料夾時刪除
        }
        catch (err) {}
    })

    it(`should only list the first level of fdSrc`, function() {
        genIndex(`${fdTmp}/tables`, fdTmp, { fpBuild: './src/build.mjs' })
        let r = fs.readFileSync(`${fdTmp}/index.mjs`, 'utf8')

        //S1
        assert.ok(r.includes(`import tA from './tables/tA.mjs'`), 'level 1 file tA must be listed')
        assert.ok(r.includes(`import tB from './tables/tB.mjs'`), 'level 1 file tB must be listed')

        //S2
        assert.ok(!r.includes('tNested'), 'nested file must not be listed')
        assert.ok(!r.includes('tDeep'), 'deeper nested file must not be listed')
        assert.ok(!r.includes('deeper'), 'nested folder must not be listed')
    })

})
