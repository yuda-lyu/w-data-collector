import map from 'lodash-es/map.js'
import keys from 'lodash-es/keys.js'
import get from 'lodash-es/get.js'
import genID from 'wsemi/src/genID.mjs'
import dtmapping from 'wsemi/src/dtmapping.mjs'
import now2str from 'wsemi/src/now2str.mjs'


let keyTable = 'holeLabTabs'
let tableNameCht = '鑽孔室內試驗表資料'
let tableNameEng = 'Lab table'

let settings = {
    'id': {
        pk: true,
        name: '主鍵',
        type: 'STRING',
    },
    'name': {
        name: '名稱',
        type: 'STRING',
    },
    'description': {
        name: '說明',
        type: 'TEXT',
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
        ['BH-1'],
        ['BH-2'],
    ], ([name]) => {
        let o = funNew({ userId: 'id-for-admin' }, settings)
        o.id = `id-for-${name}`
        o.description = `${name} 描述`
        return o
    })
    console.log(`${holeLabTabs.keyTable} data`, r)
    return r
}

let holeLabTabs = {
    keyTable,
    tableNameCht,
    tableNameEng,
    settings,
    funNew,
    funTest,
}


export default holeLabTabs
