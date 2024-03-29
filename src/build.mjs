import each from 'lodash-es/each.js'
import keys from 'lodash-es/keys.js'
import get from 'lodash-es/get.js'
import size from 'lodash-es/size.js'
import haskey from 'wsemi/src/haskey.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import ispm from 'wsemi/src/ispm.mjs'


function build(params, opt = {}) {

    //useCreateStorage
    let useCreateStorage = get(opt, 'useCreateStorage')
    if (!isbol(useCreateStorage)) {
        useCreateStorage = false //儲存至關聯資料庫例如mssql時需要createStorage
    }

    //params
    let { keyTable, tableNameCht, tableNameEng, settings, parser, funNew, funTest, ext } = params

    //check keyTable
    if (!isestr(keyTable)) {
        throw new Error(`invalid keyTable[${keyTable}]`)
    }

    //check tableNameCht
    if (!isestr(tableNameCht)) {
        tableNameCht = keyTable
    }

    //check tableNameEng
    if (!isestr(tableNameEng)) {
        tableNameEng = keyTable
    }

    //check settings
    if (!iseobj(settings)) {
        throw new Error('invalid settings')
    }

    //check ext
    if (!iseobj(ext)) {
        ext = null
    }

    //check parser
    if (!iseobj(parser)) {
        parser = null
    }

    //check funNew
    if (!isfun(funNew)) {
        funNew = null
    }

    //funTestAndSave
    let funTestAndSave = null
    if (isfun(funTest)) {
        funTestAndSave = async(wo) => {

            //check
            if (!iseobj(wo)) {
                throw new Error('invalid wo')
            }

            //check
            if (!haskey(wo, keyTable)) {
                console.log(wo)
                throw new Error(`keyTable[${keyTable}] is not in wo`)
            }

            //rs
            let rs = []
            try {
                rs = funTest()
                if (ispm(rs)) {
                    rs = await rs
                }
            }
            catch (err) {
                console.log(`keyTable[${keyTable}] funTest catch`, err)
                throw new Error(err)
            }

            //check
            if (size(rs) === 0) {
                return
            }

            //createStorage
            if (useCreateStorage) {
                await wo[keyTable].createStorage()
            }

            //save
            await wo[keyTable].save(rs)

            return rs
        }
    }

    //kpHead, kpType
    let kpHead = {}
    let kpType = {}
    each(keys(settings), (v) => {
        let name = get(settings, `${v}.name`, '')
        if (isestr(name)) {
            kpHead[v] = name
        }
        let type = get(settings, `${v}.type`, '')
        if (isestr(type)) {
            kpType[v] = type
        }
    })

    //r
    let r = {
        ...params,
        keyTable,
        tableNameCht,
        tableNameEng,
        settings,
        keys: keys(settings),
        kpType,
        kpHead,
        parser,
        funNew,
        funTest,
        funTestAndSave,
        ext,
    }

    return r
}


export default build
