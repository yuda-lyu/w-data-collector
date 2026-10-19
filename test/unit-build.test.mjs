import assert from 'assert'
import build from '../src/build.mjs'


//替身wo, 回傳形狀依w-orm系列規格(w-orm-lmdb/w-orm系列套件統一規格.md T2、T4):
//save回傳與輸入等長保序之逐筆陣列, 單筆失敗時整批仍resolve, 該筆以ok為0並附err回報; 整批性錯誤則reject
let okSave = { n: 1, nInserted: 1, nModified: 0, ok: 1 }
let genFailSave = (err) => {
    return { n: 1, nInserted: 0, nModified: 0, ok: 0, err }
}

let settings = {
    id: { name: '主鍵', type: 'STRING' },
    name: { name: '名稱', type: 'STRING' },
}

function genDef(funTest) {
    return { keyTable: 'tests', settings, funTest }
}

function genWo(save) {
    let calls = []
    let wo = {
        tests: {
            createStorage: async () => {
                calls.push('createStorage')
            },
            save: async (rs) => {
                calls.push('save')
                return save(rs)
            },
        },
    }
    return { wo, calls }
}

describe(`build funTestAndSave`, function() {

    it(`B01 save有一筆ok為0時reject, 訊息含資料表名與失敗筆之位置、主鍵與錯誤訊息`, async function() {
        //R04: 逐筆失敗須由呼叫端檢查(T4), 訊息格式同w-serv-orm之genTestData(funTest模式)
        let d = build(genDef(() => [{ id: 't1', name: 'a' }, { id: 't2', name: 'b' }]))
        let { wo } = genWo(() => [okSave, genFailSave('E')])
        await assert.rejects(d.funTestAndSave(wo), (err) => {
            assert.strict.equal(err.message, 'failed to write test data into table[tests]: [{"k":1,"id":"t2","err":"E"}]')
            return true
        })
    })

    it(`B02 save全部成功時resolve原funTest數據`, async function() {
        //R05: 全部成功時之行為(回傳rs)不變, 且以funTest產生之數據呼叫save
        let d = build(genDef(() => [{ id: 't1', name: 'a' }, { id: 't2', name: 'b' }]))
        let saved = null
        let { wo } = genWo((rs) => {
            saved = rs
            return rs.map(() => okSave)
        })
        let r = await d.funTestAndSave(wo)
        assert.strict.deepStrictEqual(r, [{ id: 't1', name: 'a' }, { id: 't2', name: 'b' }])
        assert.strict.deepStrictEqual(saved, [{ id: 't1', name: 'a' }, { id: 't2', name: 'b' }])
    })

    it(`B03 save回傳非陣列時不檢查而resolve原funTest數據`, async function() {
        //R05: 回傳值非陣列時(未依規格之ORM)不檢查, 以相容舊後端
        let d = build(genDef(() => [{ id: 't1' }]))
        let { wo } = genWo(() => undefined)
        let r = await d.funTestAndSave(wo)
        assert.strict.deepStrictEqual(r, [{ id: 't1' }])
    })

    it(`B04 funTest回傳單一物件且save之ok為0時reject, 主鍵取自該物件`, async function() {
        //R04: 輸入為單一物件時save回傳長度為1之陣列(T2)
        let d = build(genDef(() => ({ id: 't1', name: 'a' })))
        let { wo } = genWo(() => [genFailSave('E')])
        await assert.rejects(d.funTestAndSave(wo), (err) => {
            assert.strict.equal(err.message, 'failed to write test data into table[tests]: [{"k":0,"id":"t1","err":"E"}]')
            return true
        })
    })

    it(`B05 funTest回傳空陣列時不呼叫save且resolve undefined`, async function() {
        //R06: 無測試數據時不寫入之既有行為不變
        let d = build(genDef(() => []))
        let { wo, calls } = genWo(() => [])
        let r = await d.funTestAndSave(wo)
        assert.strict.equal(r, undefined)
        assert.strict.deepStrictEqual(calls, [])
    })

    it(`B06 save整批reject時原錯誤外拋`, async function() {
        //R06: 整批性錯誤以reject拋出(T4), funTestAndSave照舊外拋
        let d = build(genDef(() => [{ id: 't1' }]))
        let { wo } = genWo(() => Promise.reject(new Error('E-batch')))
        await assert.rejects(d.funTestAndSave(wo), (err) => {
            assert.strict.equal(err.message, 'E-batch')
            return true
        })
    })

    it(`B07 useCreateStorage時先createStorage再save, 逐筆失敗仍reject`, async function() {
        //R06: createStorage先於save; R04: 逐筆失敗reject
        let d = build(genDef(() => [{ id: 't1' }]), { useCreateStorage: true })
        let { wo, calls } = genWo(() => [genFailSave('E')])
        await assert.rejects(d.funTestAndSave(wo), (err) => {
            assert.strict.equal(err.message, 'failed to write test data into table[tests]: [{"k":0,"id":"t1","err":"E"}]')
            return true
        })
        assert.strict.deepStrictEqual(calls, ['createStorage', 'save'])
    })

    it(`B08 useCreateStorage時全部成功resolve原funTest數據`, async function() {
        //R05、R06: 成功路徑不變, createStorage先於save
        let d = build(genDef(() => [{ id: 't1' }]), { useCreateStorage: true })
        let { wo, calls } = genWo((rs) => rs.map(() => okSave))
        let r = await d.funTestAndSave(wo)
        assert.strict.deepStrictEqual(r, [{ id: 't1' }])
        assert.strict.deepStrictEqual(calls, ['createStorage', 'save'])
    })

    it(`B09 funTest為async函數時逐筆失敗仍reject`, async function() {
        //R04: build支援funTest回傳Promise, 逐筆檢查於await之後進行
        let d = build(genDef(async () => [{ id: 't1' }]))
        let { wo } = genWo(() => [genFailSave('E')])
        await assert.rejects(d.funTestAndSave(wo), (err) => {
            assert.strict.equal(err.message, 'failed to write test data into table[tests]: [{"k":0,"id":"t1","err":"E"}]')
            return true
        })
    })

})
