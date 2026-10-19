import assert from 'assert'
import build from '../src/build.mjs'
import genTestdata from '../src/genTestdata.mjs'


//替身wo, 回傳形狀依w-orm系列規格(w-orm-lmdb/w-orm系列套件統一規格.md T2、T4)
let okSave = { n: 1, nInserted: 1, nModified: 0, ok: 1 }

let settings = {
    id: { name: '主鍵', type: 'STRING' },
}

function genDs() {
    return {
        tabA: build({ keyTable: 'tabA', settings, funTest: () => [{ id: 'a1' }, { id: 'a2' }] }),
        tabB: build({ keyTable: 'tabB', settings, funTest: () => [{ id: 'b1' }] }),
    }
}

describe(`genTestdata`, function() {

    it(`T01 某資料表逐筆失敗時reject, 其後之資料表不再寫入`, async function() {
        //R07: genTestdata之JSDoc「resolve代表產生成功，reject代表產生失敗」; 各資料表依序處理, 遇錯即停
        let calls = []
        let wo = {
            tabA: {
                save: async (rs) => {
                    calls.push('tabA')
                    return [okSave, { n: 1, nInserted: 0, nModified: 0, ok: 0, err: 'E' }]
                },
            },
            tabB: {
                save: async (rs) => {
                    calls.push('tabB')
                    return rs.map(() => okSave)
                },
            },
        }
        await assert.rejects(genTestdata(genDs(), wo), (err) => {
            assert.strict.equal(err.message, 'failed to write test data into table[tabA]: [{"k":1,"id":"a2","err":"E"}]')
            return true
        })
        assert.strict.deepStrictEqual(calls, ['tabA'])
    })

    it(`T02 全部成功時resolve且各資料表皆寫入`, async function() {
        //R07: 成功路徑不變
        let saved = {}
        let genSave = (k) => {
            return async (rs) => {
                saved[k] = rs
                return rs.map(() => okSave)
            }
        }
        let wo = {
            tabA: { save: genSave('tabA') },
            tabB: { save: genSave('tabB') },
        }
        await genTestdata(genDs(), wo)
        assert.strict.deepStrictEqual(saved, {
            tabA: [{ id: 'a1' }, { id: 'a2' }],
            tabB: [{ id: 'b1' }],
        })
    })

})
