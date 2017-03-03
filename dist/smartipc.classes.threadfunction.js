"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const plugins = require("./smartipc.plugins");
const q = require("smartq");
class ThreadFunction {
    constructor(functionArg) {
        this.thread = plugins.threads.spawn(functionArg);
    }
    /**
     * sends a message to the spawned process
     */
    send(message) {
        let done = q.defer();
        this.thread.send(message).on('message', (message) => {
            done.resolve(message);
        }).on('error', err => {
            done.reject(err);
        });
        return done.promise;
    }
    kill() {
        this.thread.kill();
    }
}
exports.ThreadFunction = ThreadFunction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy50aHJlYWRmdW5jdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0aXBjLmNsYXNzZXMudGhyZWFkZnVuY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQkFBdUI7QUFDdkIsOENBQTZDO0FBQzdDLDRCQUEyQjtBQU0zQjtJQUVFLFlBQVksV0FBNEI7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUksT0FBWTtRQUNsQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFLLENBQUE7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQVU7WUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUc7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0NBQ0Y7QUF0QkQsd0NBc0JDIn0=