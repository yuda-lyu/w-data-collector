import fs from 'fs'
import _ from 'lodash'
import assert from 'assert'
import genIndex from '../src/genIndex.mjs'

describe(`genIndex`, function() {

    it(`should be equal to index.mjs.txt when input './test/schema/tables', './test/schema', { fpBuild: './src/build.mjs' }`, function() {
        genIndex('./test/schema/tables', './test/schema', { fpBuild: './src/build.mjs' })
        let r = fs.readFileSync('./test/schema/index.mjs', 'utf8')
        r = _.trim(r)
        let rr = fs.readFileSync('./test/schema/index.mjs.txt', 'utf8')
        rr = _.trim(rr)
        assert.strict.deepStrictEqual(r, rr)
    })

})
