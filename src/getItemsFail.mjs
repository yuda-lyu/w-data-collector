import get from 'lodash-es/get.js'
import each from 'lodash-es/each.js'
import isarr from 'wsemi/src/isarr.mjs'


/**
 * 由ORM逐筆函數(save、del)之回傳結果取出失敗者
 *
 * 依w-orm系列規格，逐筆函數回傳與輸入等長保序之陣列，單筆失敗時整批仍resolve，該筆以ok為0並附err回報，須由呼叫端逐筆檢查。
 * 主鍵未命中(save於autoInsert為false時查無主鍵、del查無主鍵)屬正常結果，其ok為1而以n為0表示，不視為失敗。
 * 逐筆結果不含主鍵，故主鍵取自輸入同位置數據之id。
 *
 * @param {Array} rs 輸入ORM逐筆函數(save、del)之回傳結果陣列，非陣列時(未依規格之ORM)無從逐筆檢查而回傳空陣列
 * @param {Object|Array} data 輸入呼叫ORM逐筆函數時之數據物件或陣列，為單一物件時視為長度為1之陣列
 * @returns {Array} 回傳失敗者陣列，各筆為{k,id,err}，k為該筆於輸入內之位置，id為輸入同位置數據之id，err為ORM回報之錯誤訊息(未附時為空字串)，無失敗者回傳空陣列
 * @example
 *
 * import getItemsFail from 'w-data-collector/src/getItemsFail.mjs'
 *
 * let data = [{ id: 'id-a' }, { id: 'id-b' }, { id: 'id-c' }]
 * let rs = [
 *     { n: 1, nInserted: 1, nModified: 0, ok: 1 }, //插入
 *     { n: 0, nInserted: 0, nModified: 0, ok: 1 }, //主鍵未命中, 屬正常結果
 *     { n: 1, nInserted: 0, nModified: 0, ok: 0, err: 'E' }, //該筆失敗
 * ]
 * console.log(getItemsFail(rs, data))
 * // => [ { k: 2, id: 'id-c', err: 'E' } ]
 *
 */
function getItemsFail(rs, data) {
    //註: 回傳形狀{k,id,err}與判讀規則為對外契約, w-serv-orm亦採相同規則, 變更須一併確認

    //check, 未依規格之ORM可能回傳非陣列, 無從逐筆檢查
    if (!isarr(rs)) {
        return []
    }

    //check, 輸入為單一物件時ORM回傳長度為1之陣列
    if (!isarr(data)) {
        data = [data]
    }

    //fails, 僅ok為0者視為失敗, 主鍵未命中者ok為1屬正常結果
    let fails = []
    each(rs, (v, k) => {
        if (get(v, 'ok') === 0) {
            fails.push({
                k,
                id: get(data, [k, 'id']),
                err: get(v, 'err', ''),
            })
        }
    })

    return fails
}


export default getItemsFail
