"use strict";
require("typings-test");
const smartipc = require("../dist/index");
let testThreadFunction;
let testThread;
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUVyQiwwQ0FBeUM7QUFFekMsSUFBSSxrQkFBMkMsQ0FBQTtBQUMvQyxJQUFJLFVBQTJCLENBQUE7QUFFL0IsUUFBUSxDQUFDLFVBQVUsRUFBQztJQUNoQixFQUFFLENBQUMsNkNBQTZDLEVBQUM7UUFDN0Msa0JBQWtCLEdBQUcsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUk7WUFDekQsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDMUIsQ0FBQyxDQUFDLENBQUE7UUFDRixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3BCLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFBO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMscUNBQXFDLEVBQUM7UUFDckMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3JDLFVBQVUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDNUMsVUFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDcEIsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9