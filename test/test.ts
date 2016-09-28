import 'typings-test'
import * as should from 'should'

import * as smartipc from '../dist/index'

let testIpcMaster: smartipc.IpcMaster

describe('smartipc',function(){
    it('should create an instance of IpcMaster',function(){
        testIpcMaster = new smartipc.IpcMaster({})
        should(testIpcMaster).be.instanceof(smartipc.IpcMaster)
    })
})
