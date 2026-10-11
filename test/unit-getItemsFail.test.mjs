import assert from 'assert'
import getItemsFail from '../src/getItemsFail.mjs'


//逐筆結果之形狀依w-orm系列規格(w-orm-lmdb/資料庫函數回傳定義計算.md):
//save與del回傳與輸入等長保序之陣列(T2), ok僅有1成功與0該筆失敗兩值, ok為0者附err(T4)
let okSave = { n: 1, nInserted: 1, nModified: 0, ok: 1 }
let genFailSave = (err) => {
    return { n: 1, nInserted: 0, nModified: 0, ok: 0, err }
}

describe(`getItemsFail`, function() {

    it(`G01 全部成功時回傳空陣列`, function() {
        //R01: 成功路徑一律ok為1(T4), 無失敗者
        let r = getItemsFail([okSave, okSave], [{ id: 'a' }, { id: 'b' }])
        assert.strict.deepStrictEqual(r, [])
    })

    it(`G02 一筆ok為0時列出位置、主鍵與錯誤訊息`, function() {
        //R01: 逐筆結果不含主鍵, 主鍵取輸入同位置之id(等長保序), 訊息取err(呼叫端判讀準則)
        let r = getItemsFail([okSave, genFailSave('E'), okSave], [{ id: 'a' }, { id: 'b' }, { id: 'c' }])
        assert.strict.deepStrictEqual(r, [{ k: 1, id: 'b', err: 'E' }])
    })

    it(`G03 多筆ok為0時全數依位置列出`, function() {
        //R01: 單筆失敗不中斷整批(T4), 故失敗者可能多筆, 須全數列出
        let r = getItemsFail([genFailSave('E0'), okSave, genFailSave('E2')], [{ id: 'a' }, { id: 'b' }, { id: 'c' }])
        assert.strict.deepStrictEqual(r, [{ k: 0, id: 'a', err: 'E0' }, { k: 2, id: 'c', err: 'E2' }])
    })

    it(`G04 save主鍵不存在且未自動插入者(ok為1、n為0)不視為失敗`, function() {
        //R02: save逐筆結果表, 主鍵不存在且autoInsert為false者n為0、ok為1, 屬正常結果
        let r = getItemsFail([okSave, { n: 0, nInserted: 0, nModified: 0, ok: 1 }], [{ id: 'a' }, { id: 'none' }])
        assert.strict.deepStrictEqual(r, [])
    })

    it(`G05 del主鍵未命中不視為失敗, 未帶有效主鍵者視為失敗`, function() {
        //R02: del逐筆結果表, 主鍵未命中為ok為1, 未帶有效主鍵為ok為0並附err, 二者須以ok分辨
        let rs = [
            { n: 1, nDeleted: 1, ok: 1 },
            { n: 0, nDeleted: 0, ok: 1 },
            { n: 0, nDeleted: 0, ok: 0, err: 'E-del' },
        ]
        let r = getItemsFail(rs, [{ id: 'a' }, { id: 'none' }, { name: 'no-id' }])
        assert.strict.deepStrictEqual(r, [{ k: 2, id: undefined, err: 'E-del' }])
    })

    it(`G06 ok為0而未附err者仍視為失敗且err為空字串`, function() {
        //R01: 與w-serv-orm之getItemsFail一致, 未依規格附err之舊版ORM仍須檢出
        let r = getItemsFail([okSave, { n: 1, ok: 0 }], [{ id: 'a' }, { id: 'b' }])
        assert.strict.deepStrictEqual(r, [{ k: 1, id: 'b', err: '' }])
    })

    it(`G07 回傳非陣列時無從逐筆檢查而回傳空陣列`, function() {
        //R01: 未依規格之ORM可能回傳非陣列, 不檢查以相容舊後端
        for (let rs of [undefined, null, { n: 1, ok: 0 }, 'abc', 1]) {
            assert.strict.deepStrictEqual(getItemsFail(rs, [{ id: 'a' }]), [])
        }
    })

    it(`G08 回傳空陣列時回傳空陣列`, function() {
        //R01: 輸入無效時save與del回[](T5)
        assert.strict.deepStrictEqual(getItemsFail([], [{ id: 'a' }]), [])
        assert.strict.deepStrictEqual(getItemsFail([], null), [])
    })

    it(`G09 輸入為單一物件時主鍵取自該物件`, function() {
        //R01: 輸入為單一物件時逐筆函數回傳長度為1之陣列(T2)
        let r = getItemsFail([genFailSave('E')], { id: 'a', name: 'A' })
        assert.strict.deepStrictEqual(r, [{ k: 0, id: 'a', err: 'E' }])
    })

    it(`G10 數字主鍵照列`, function() {
        //R01: 與w-serv-orm之getItemsFail一致, 主鍵值照原型別列出
        let r = getItemsFail([okSave, genFailSave('E')], [{ id: 1 }, { id: 2 }])
        assert.strict.deepStrictEqual(r, [{ k: 1, id: 2, err: 'E' }])
    })

    it(`G11 輸入未帶主鍵者主鍵為undefined而以位置定位`, function() {
        //R01: autoGenPk為true時主鍵由ORM補於其內部副本(T6), 輸入不帶回補出之主鍵, 故以k定位
        let r = getItemsFail([okSave, genFailSave('E')], [{ id: 'a' }, { name: 'no-id' }])
        assert.strict.deepStrictEqual(r, [{ k: 1, id: undefined, err: 'E' }])
    })

    it(`G12 元素缺ok或非物件者不視為失敗`, function() {
        //R01: 僅ok為0者視為失敗
        let r = getItemsFail([{ n: 1 }, null, undefined, okSave], [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }])
        assert.strict.deepStrictEqual(r, [])
    })

})
