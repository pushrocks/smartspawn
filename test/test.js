"use strict";
require("typings-test");
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
        testThread.send('what').then(message => {
            console.log(message);
            testThread.send('another').then(message => {
                console.log(message);
                testThread.assignedPool.pool.killAll();
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUVyQiwwQ0FBeUM7QUFFekMsSUFBSSxrQkFBMkMsQ0FBQTtBQUMvQyxJQUFJLFVBQTJCLENBQUE7QUFDL0IsSUFBSSxRQUF1QixDQUFBO0FBRTNCLFFBQVEsQ0FBQyxVQUFVLEVBQUM7SUFDaEIsRUFBRSxDQUFDLDZDQUE2QyxFQUFDO1FBQzdDLGtCQUFrQixHQUFHLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJO1lBQ3pELElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFBO1FBQ0Ysa0JBQWtCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNwQixrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUM3QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLHFDQUFxQyxFQUFDO1FBQ3JDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNyQyxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzVDLFVBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3BCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHVDQUF1QyxFQUFDO1FBQ3ZDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNyQyxJQUFJLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDcEQsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsc0JBQXNCLEVBQUU7UUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDbEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2hELFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDakMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3BCLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3BCLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQzFDLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=