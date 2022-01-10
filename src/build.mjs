import each from 'lodash/each'
import keys from 'lodash/keys'
import get from 'lodash/get'
import size from 'lodash/size'
import haskey from 'wsemi/src/haskey.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isbol from 'wsemi/src/isbol.mjs'


function build(params, opt = {}) {

    //useSaveToDb
    let useSaveToDb = get(opt, 'useSaveToDb')
    if (!isbol(useSaveToDb)) {
        useSaveToDb = true //自動儲存至mongodb或mssql等
    }

    //useCreateStorage
    let useCreateStorage = get(opt, 'useCreateStorage')
    if (!isbol(useCreateStorage)) {
        useCreateStorage = false //儲存至關聯資料庫例如mssql時需要createStorage
    }

    //params
    let { keyTable, tableNameCht, tableNameEng, settings, parser, funNew, funTest } = params

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

    //check parser
    if (!isfun(parser)) {
        parser = null
    }

    //check funNew
    if (!isfun(funNew)) {
        funNew = null
    }

    //check funTest
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

            //r
            let r = []
            try {
                r = funTest()
            }
            catch (err) {
                console.log(`keyTable[${keyTable}] funTest catch`, err)
                throw new Error(err)
            }

            //check
            if (size(r) === 0) {
                return
            }

            //useSaveToDb
            if (useSaveToDb) {

                //createStorage
                if (useCreateStorage) {
                    await wo[keyTable].createStorage()
                }

                //save
                await wo[keyTable].save(r)

            }

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
    }

    return r
}


export default build
