import map from 'lodash-es/map'
import keys from 'lodash-es/keys'
import get from 'lodash-es/get'
import genID from 'wsemi/src/genID.mjs'
import dtmapping from 'wsemi/src/dtmapping.mjs'
import now2str from 'wsemi/src/now2str.mjs'
import sep from 'wsemi/src/sep.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'


let keyTable = 'holeLabTabsItems'
let tableNameCht = '鑽孔試驗樣本資料'
let tableNameEng = 'Lab test data'

let settings = {
    'id': {
        'pk': true,
        'name': '主鍵',
        'type': 'STRING',
        'dig': null
    },
    'mappingId': { //所屬對象主鍵
        name: '關聯鍵',
        type: 'STRING',
        dig: null
    },
    'order': {
        name: '順序',
        type: 'INTEGER',
        dig: null
    },
    'proj_no': {
        name: '計畫編號',
        type: 'STRING',
        dig: null
    },
    'proj_name': {
        name: '計畫名稱',
        type: 'STRING',
        dig: null
    },
    'hole_no': {
        name: '孔號',
        type: 'STRING',
        dig: null
    },
    'hole_depth': {
        name: '孔深(m)',
        type: 'STRING',
        dig: null
    },
    'regular': { //值: mdb, public
        name: '佈告類型',
        type: 'STRING',
        dig: null
    },
    'longitude': {
        name: '經度',
        type: 'STRING',
        dig: null
    },
    'latitude': {
        name: '緯度',
        type: 'STRING',
        dig: null
    },
    'elevation': {
        name: '孔位高程(m)',
        type: 'STRING',
        dig: null
    },
    'wt_depth': {
        name: '地下水位(m)',
        type: 'STRING',
        dig: null
    },
    'top_depth': {
        name: '起始深度(m)',
        type: 'STRING',
        dig: null
    },
    'bottom_depth': {
        name: '結束深度(m)',
        type: 'STRING',
        dig: null
    },
    'center_depth': {
        name: '中點深度(m)',
        type: 'STRING',
        dig: null
    },
    'code': {
        name: '繪圖代碼',
        type: 'STRING',
        dig: null
    },
    'description': {
        name: '土壤描述',
        type: 'STRING',
        dig: null
    },
    'cklpRough': {
        name: '驗證粗估參數',
        type: 'STRING',
        dig: null
    },
    'cklpStrictHBF': {
        name: '驗證HBF參數',
        type: 'STRING',
        dig: null
    },
    'cklpStrictNJRA': {
        name: '驗證NJRA參數',
        type: 'STRING',
        dig: null
    },
    'sample_nos': {
        name: '所屬樣本編號',
        type: 'STRING',
        dig: null
    },
    'SPTN': {
        name: 'SPTN',
        type: 'STRING',
        dig: null
    },
    'WC': {
        keySrc: '含水量(%)',
        name: '含水量(%)',
        type: 'STRING',
        dig: null
    },
    'GS': {
        keySrc: '比重',
        name: '比重',
        type: 'STRING',
        dig: null
    },
    'e': {
        keySrc: '空隙比',
        name: '孔隙比',
        type: 'STRING',
        dig: null
    },
    'LL': {
        keySrc: '液性限度(%)',
        name: '液性限度(%)',
        type: 'STRING',
        dig: null
    },
    'PI': {
        keySrc: '塑性指數(%)',
        name: '塑性指數(%)',
        type: 'STRING',
        dig: null
    },
    'USCS': {
        keySrc: '統一土壤分類',
        name: '統一土壤分類',
        type: 'STRING',
        dig: null
    },
    'r_tm3': {
        keySrc: '單位重(t/m^3)',
        name: '單位重(t/m³)',
        type: 'STRING',
        dig: null
    },
    'r': {
        name: '單位重(kN/m³)',
        type: 'STRING',
        dig: null
    },
    'rd_tm3': {
        keySrc: '乾單位重(t/m^3)',
        name: '乾單位重(t/m³)',
        type: 'STRING',
        dig: null
    },
    'rd': {
        name: '乾單位重(kN/m³)',
        type: 'STRING',
        dig: null
    },
    'D50': {
        keySrc: 'D50(mm)',
        name: 'D50(mm)',
        type: 'STRING',
        dig: null
    },
    'D10': {
        keySrc: 'D10(mm)',
        name: 'D10(mm)',
        type: 'STRING',
        dig: null
    },
    'FC': {
        keySrc: '細料(%)',
        name: '細粒料含量(%)',
        type: 'STRING',
        dig: null
    },
    'ctGravel': {
        name: '礫石含量(%)',
        type: 'STRING',
        dig: null
    },
    'ctSand': {
        name: '砂含量(%)',
        type: 'STRING',
        dig: null
    },
    'ctSilt': {
        name: '粉土含量(%)',
        type: 'STRING',
        dig: null
    },
    'ctClay': {
        name: '黏土含量(%)',
        type: 'STRING',
        dig: null
    },
    'remark': {
        keySrc: 'Remark',
        name: '備註',
        type: 'STRING',
        dig: null
    },
    'userId': {
        name: '創建使用者主鍵',
        type: 'STRING',
    },
    'timeCreate': {
        name: '創建時間',
        type: 'STRING',
    },
    'userIdUpdate': {
        name: '最新變更使用者主鍵',
        type: 'STRING',
    },
    'timeUpdate': {
        name: '更新時間',
        type: 'STRING',
    },
    'isActive': {
        name: '是否有效',
        type: 'STRING',
    },
}

let parser = {
    processRows: (rows) => {
        let cv = (row) => {
            let depth = get(row, 'depth', '')
            if (depth.indexOf('-') >= 0) {
                let s = sep(depth, '-')
                let depthStart = get(s, 0, '')
                if (isnum(depthStart)) {
                    depthStart = cdbl(depthStart)
                }
                let depthEnd = get(s, 1, '')
                if (isnum(depthEnd)) {
                    depthEnd = cdbl(depthEnd)
                }
                row.depthStart = depthStart
                row.depthEnd = depthEnd
            }
            else if (isnum(depth)) {
                depth = cdbl(depth)
                let dlen = 0.1 //有些深度給予單值非起訖值, 預設自動產生樣本起訖深度
                let depthStart = depth - dlen
                let depthEnd = depth + dlen
                row.depthStart = depthStart
                row.depthEnd = depthEnd
            }
            return row
        }
        return map(rows, cv)
    },
}

let funNew = (ndata = {}) => {
    let o = dtmapping(ndata, keys(settings))
    o.id = genID()
    o.userIdUpdate = get(o, 'userId', '')
    o.timeCreate = now2str()
    o.timeUpdate = o.timeCreate
    o.isActive = 'y'
    return o
}

let funTest = () => {
    let r = map([
        ['BS-1', 'id-for-BH-1'],
        ['BS-2', 'id-for-BH-1'],
        ['BS-3', 'id-for-BH-2'],
    ], ([name, mappingId]) => {
        let o = funNew({ userId: 'id-for-admin', mappingId })
        o.id = `id-for-${name}`
        return o
    })
    console.log(`${keyTable} data`, r)
    return r
}

let holeLabTabsItems = {
    keyTable,
    tableNameCht,
    tableNameEng,
    settings,
    parser,
    funNew,
    funTest,
}


export default holeLabTabsItems
