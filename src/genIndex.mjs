import path from 'path'
import fs from 'fs'
import get from 'lodash/get'
import map from 'lodash/map'
import join from 'lodash/join'
import isestr from 'wsemi/src/isestr.mjs'
import fsTreeFolder from 'wsemi/src/fsTreeFolder.mjs'
import replace from 'wsemi/src/replace.mjs'


function genImports(ms) {
    let rs = map(ms, (v) => {
        let t = `import {name} from '{src}'`
        t = replace(t, '{name}', v.name)
        t = replace(t, '{src}', v.src)
        return t
    })
    return join(rs, '\n')
}


function genNames(ms) {
    let rs = map(ms, (v) => {
        let t = `    {name},`
        t = replace(t, '{name}', v.name)
        return t
    })
    return join(rs, '\n')
}


/**
 * 由各資料表定義*.mjs檔產生資料表收集物件ds
 *
 * @param {String} fdSrc 輸入各資料表定義*.mjs檔案所在資料夾
 * @param {String} fdIndex 輸入產生index.mjs檔案需儲存至的資料夾，主要是跟各資料表定義*.mjs檔計算相對路徑供程式碼import用
 * @param {Object} [opt={}] 輸入設定物件，預設{}
 * @param {String} [opt.fpBuild='w-data-collector/src/build.mjs'] 輸入程式碼所需import之再處理資料表定義*.mjs檔的build函數，預設為'w-data-collector/src/build.mjs'
 * @param {String} [opt.fnIndex='index.mjs'] 輸入產生ds所需程式碼index.mjs檔案的名稱，預設為'index.mjs'，實際檔案儲存位置為fdIndex下fnIndex
 * @example
 *
 * import genIndex from 'w-data-collector/src/genIndex.mjs'
 * 
 * genIndex('./src/schema/tables', './src/schema', {})
 * // => genIndex done
 *
 */
function genIndex(fdSrc, fdIndex, opt = {}) {

    //fpBuild
    let fpBuild = get(opt, 'fpBuild')
    if (!isestr(fpBuild)) {
        fpBuild = 'w-data-collector/src/build.mjs'
    }

    //fnIndex
    let fnIndex = get(opt, 'fnIndex')
    if (!isestr(fnIndex)) {
        fnIndex =  'index.mjs'
    }

    //fsTreeFolder
    let fps = fsTreeFolder(fdSrc)
    // console.log('fps', fps)

    //ms
    let ms = map(fps, (v) => {
        let name = v.name
        name = replace(name, '.mjs', '')
        name = replace(name, '.js', '')
        let src = path.relative(fdIndex, v.path)
        src = src.replace(/\\/g, '/')
        src = `./${src}`
        return {
            name,
            src,
        }
    })
    // console.log('ms', ms)

    let t = `{cimps}
import build from '{fpBuild}'


let cs = {
{cnms}
}

//ds
let ds = {}
for (let k in cs) {
    ds[k] = build(cs[k])
}


export default ds
`

    //genImports
    let cimps = genImports(ms)

    //genNames
    let cnms = genNames(ms)

    //replace
    t = replace(t, '{cimps}', cimps)
    t = replace(t, '{cnms}', cnms)
    t = replace(t, '{fpBuild}', fpBuild)

    //fpIndex
    let fpIndex = path.resolve(fdIndex, fnIndex)

    //writeFileSync
    fs.writeFileSync(fpIndex, t, 'utf8')

    console.log('genIndex done')
}


export default genIndex
