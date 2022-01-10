import path from 'path'
import keys from 'lodash/keys'
import each from 'lodash/each'
import get from 'lodash/get'
import isestr from 'wsemi/src/isestr.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import pmSeries from 'wsemi/src/pmSeries.mjs'


function genModels(ds, opt = {}) {

    //fdModels
    let fdModels = get(opt, 'fdModels')
    if (!isestr(fdModels)) {
        let fdSrv = path.resolve()
        fdModels = `${fdSrv}/models`
    }

    //genModelsByTabs
    let genModelsByTabs = get(opt, 'genModelsByTabs')
    if (!isfun(genModelsByTabs)) {
        throw new Error(`opt.genModelsByTabs is not a function, it needs to import from 'w-orm-reladb/src/genModelsByTabs.mjs'`)
    }

    //tabs
    let tabs = {}
    each(ds, (v, k) => {
        tabs[k] = v.settings
    })
    // console.log('tabs', tabs)

    //genModelsByTabs
    genModelsByTabs(fdModels, tabs)

}


/**
 * 由資料表收集物件ds與資料表控制物件wo產生測試資料，並儲存至資料庫
 *
 * @param {Object} ds 輸入資料表收集物件，ds也就是import由genIndex產生的index.mjs，其內各key代表各資料表，值代表各資料表設定與操作函數例如settings、funNew或funTest等
 * @param {Object} wo 輸入資料表控制物件，各key代表各資料表，值代表各資料表操作函數例如insert、save、del等
 * @param {Object} [opt={}] 輸入設定物件，預設{}
 * @param {Boolean} [opt.useGenModels=false] 輸入是否呼叫genModels，若資料庫與ORM為關聯資料庫時需設定為true，同時還需給予opt.genModelsByTabs。預設為false
 * @param {Function} [opt.genModelsByTabs=null] 輸入可由ds與wo產生models的函數，若資料庫與ORM為關聯資料庫時則需給予，可由程式碼import genModelsByTabs from 'w-orm-reladb/src/genModelsByTabs.mjs'取得genModelsByTabs，並再設定給opt.genModelsByTabs
 * @param {String} [opt.fdModels='./models'] 輸入產生models放置的資料夾位置，預設為工作路徑下的models
 * @return {Promise} 回傳Promise，resolve代表產生成功，reject代表產生失敗
 * @example
 *
 * import genTestdata from 'w-data-collector/src/genTestdata.mjs'
 * import ds from './index.mjs'
 * import { woItems } from '../../server/mOrm.mjs'
 *
 * genTestdata(ds, woItems, {})
 * // => genTestdata done
 *
 */
async function genTestdata(ds, wo, opt = {}) {

    //useGenModels
    let useGenModels = get(opt, 'useGenModels')
    if (!isbol(useGenModels)) {
        useGenModels = false
    }

    //genModels
    if (useGenModels) {
        genModels(ds, opt)
        console.log('genModels done')
    }

    //ks
    let ks = keys(ds)

    //funTest
    await pmSeries(ks, async (k) => {

        //funTest
        let funTest = get(ds, `${k}.funTest`)

        //check
        if (isfun(funTest)) {
            await ds[k].funTest(wo) //封裝funTest後會需要傳入wo, 以及改為async function
        }

    })

    console.log('genTestdata done', ks)
}


export default genTestdata
