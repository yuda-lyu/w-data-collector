import fs from 'fs'
import _ from 'lodash-es'
import assert from 'assert'
import genIndex from '../src/genIndex.mjs'


//測試中介檔置於test/_tmp/genIndex並於測完刪除, 不改寫入版控之test/schema/index.mjs
let fdTmp = './test/_tmp/genIndex'

describe(`genIndex`, function() {

    before(function() {
        //複製資料表定義檔至中介資料夾, 產出之index.mjs與資料表定義檔之相對位置同test/schema, 故可沿用index.mjs.txt
        fs.rmSync(fdTmp, { recursive: true, force: true })
        fs.cpSync('./test/schema/tables', `${fdTmp}/tables`, { recursive: true })
    })

    after(function() {
        fs.rmSync(fdTmp, { recursive: true, force: true })
        try {
            fs.rmdirSync('./test/_tmp') //僅於已無其他測試之中介資料夾時刪除
        }
        catch (err) {}
    })

    it(`should be equal to index.mjs.txt when input './test/_tmp/genIndex/tables', './test/_tmp/genIndex', { fpBuild: './src/build.mjs' }`, function() {
        genIndex(`${fdTmp}/tables`, fdTmp, { fpBuild: './src/build.mjs' })
        let r = fs.readFileSync(`${fdTmp}/index.mjs`, 'utf8')
        r = _.trim(r)
        let rr = fs.readFileSync('./test/schema/index.mjs.txt', 'utf8')
        rr = _.trim(rr)
        assert.strict.deepStrictEqual(r, rr)
    })

})
