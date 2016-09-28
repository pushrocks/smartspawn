"use strict";
require("typings-test");
const should = require("should");
const smartipc = require("../dist/index");
let testIpcMaster;
describe('smartipc', function () {
    it('should create an instance of IpcMaster', function () {
        testIpcMaster = new smartipc.IpcMaster({});
        should(testIpcMaster).be.instanceof(smartipc.IpcMaster);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQixpQ0FBZ0M7QUFFaEMsMENBQXlDO0FBRXpDLElBQUksYUFBaUMsQ0FBQTtBQUVyQyxRQUFRLENBQUMsVUFBVSxFQUFDO0lBQ2hCLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBQztRQUN4QyxhQUFhLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMzRCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=