"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartipc.plugins");
const smartq = require("smartq");
const childProcess = require("child_process");
const smartipc_classes_thread_1 = require("./smartipc.classes.thread");
class ThreadSimple {
    constructor(filePathArg) {
        this.workerPath = filePathArg;
    }
    run() {
        let done = smartq.defer();
        let forkPath = (() => {
            if (smartipc_classes_thread_1.workerBasePath) {
                return plugins.path.join(smartipc_classes_thread_1.workerBasePath, this.workerPath);
            }
            else {
                return this.workerPath;
            }
        })();
        this.threadChildProcess = childProcess.fork(forkPath);
        done.resolve(this.threadChildProcess);
        return done.promise;
    }
}
exports.ThreadSimple = ThreadSimple;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy50aHJlYWRzaW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGlwYy5jbGFzc2VzLnRocmVhZHNpbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QyxpQ0FBZ0M7QUFDaEMsOENBQTZDO0FBRTdDLHVFQUEwRDtBQUUxRDtJQUdFLFlBQWEsV0FBbUI7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUE7SUFDL0IsQ0FBQztJQUVELEdBQUc7UUFDRCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDekIsSUFBSSxRQUFRLEdBQUcsQ0FBQztZQUNkLEVBQUUsQ0FBQyxDQUFDLHdDQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0NBQWMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDM0QsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO1lBQ3hCLENBQUM7UUFDSCxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQ0osSUFBSSxDQUFDLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0NBQ0Y7QUFwQkQsb0NBb0JDIn0=