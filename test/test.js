"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-test");
const smartchai_1 = require("smartchai");
const smartipc = require("../dist/index");
let testThreadFunction;
let testThread;
let testPool;
describe('smartipc', function () {
    it('should create an instance of ThreadFunction', function () {
        testThreadFunction = new smartipc.ThreadFunction((input, done) => {
            let url = require('url');
            done(url.parse(input));
        });
        testThreadFunction.send('https://google.com').then(message => {
            console.log(message);
            testThreadFunction.kill();
        });
    });
    it('should create an instance of Thread', function () {
        smartipc.setWorkerBasePath(__dirname);
        testThread = new smartipc.Thread('child.js');
        testThread.send('https://google.com').then(message => {
            console.log(message);
            testThread.kill();
        });
    });
    it('should not spawn when nothing is sent', function () {
        smartipc.setWorkerBasePath(__dirname);
        let testThread = new smartipc.Thread('child.js');
    });
    it('should run in a Pool', function () {
        let testPool = new smartipc.Pool();
        let testThread = new smartipc.Thread('child.js');
        testThread.assignToPool(testPool);
        return testThread.send('what').then(message => {
            console.log(message);
            return testThread.send('another').then(message => {
                console.log(message);
                testThread.assignedPool.pool.killAll();
            });
        });
    });
    it('should once', function () {
        let testThread = new smartipc.Thread('child.js');
        return testThread.sendOnce('what').then(message => {
            smartchai_1.expect(message).to.equal('what');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBcUI7QUFDckIseUNBQWtDO0FBRWxDLDBDQUF5QztBQUV6QyxJQUFJLGtCQUEyQyxDQUFBO0FBQy9DLElBQUksVUFBMkIsQ0FBQTtBQUMvQixJQUFJLFFBQXVCLENBQUE7QUFFM0IsUUFBUSxDQUFDLFVBQVUsRUFBRTtJQUNuQixFQUFFLENBQUMsNkNBQTZDLEVBQUU7UUFDaEQsa0JBQWtCLEdBQUcsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUk7WUFDM0QsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUE7UUFDRixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3BCLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMscUNBQXFDLEVBQUU7UUFDeEMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3JDLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDNUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDcEIsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsdUNBQXVDLEVBQUU7UUFDMUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3JDLElBQUksVUFBVSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNsRCxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRTtRQUN6QixJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDaEQsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNqQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3BCLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUNwQixVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsYUFBYSxFQUFFO1FBQ2hCLElBQUksVUFBVSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNoRCxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUM3QyxrQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbEMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=