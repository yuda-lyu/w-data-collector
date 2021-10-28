import holeLabTabs from './tables/holeLabTabs.mjs'
import holeLabTabsItems from './tables/holeLabTabsItems.mjs'
import users from './tables/users.mjs'
import build from './src/build.mjs'


let cs = {
    holeLabTabs,
    holeLabTabsItems,
    users,
}

//ds
let ds = {}
for (let k in cs) {
    ds[k] = build(cs[k])
}


export default ds
