import map from 'lodash-es/map'
import keys from 'lodash-es/keys'
import get from 'lodash-es/get'
import genID from 'wsemi/src/genID.mjs'
import dtmapping from 'wsemi/src/dtmapping.mjs'
import now2str from 'wsemi/src/now2str.mjs'


let keyTable = 'users'
let tableNameCht = '使用者'
let tableNameEng = 'Users'

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
    'email': {
        name: '電子郵件',
        type: 'STRING',
    },
    'from': {
        name: '來源',
        type: 'STRING',
    },
    'roleLevel': {
        name: '角色層級',
        type: 'STRING',
    },
    'isAdmin': {
        name: '是否為系統管理員',
        type: 'STRING',
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
        '王小明',
        'peter',
        'mary',
        'john',
        'admin',
    ], (name) => {
        let o = funNew({ userId: 'id-for-admin' })
        o.id = `id-for-${name}`
        o.email = `${name}@example.com`
        o.from = '中興社'
        o.roleLevel = 'L0'
        o.isAdmin = 'n'
        return o
    })
    r[4].isAdmin = 'y' //admin
    console.log(`${keyTable} data`, r)
    return r
}

let users = {
    keyTable,
    tableNameCht,
    tableNameEng,
    settings,
    funNew,
    funTest,
}


export default users
