"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartipc.plugins");
const childProcess = require("child_process");
const smartipc_classes_thread_1 = require("./smartipc.classes.thread");
class ThreadSimple {
    constructor(filePathArg) {
        this.workerPath = filePathArg;
    }
    run() {
        let forkPath = (() => {
            if (smartipc_classes_thread_1.workerBasePath) {
                return plugins.path.join(smartipc_classes_thread_1.workerBasePath, this.workerPath);
            }
            else {
                return this.workerPath;
            }
        })();
        this.threadChildProcess = childProcess.fork(forkPath);
        return this.threadChildProcess;
    }
}
exports.ThreadSimple = ThreadSimple;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy50aHJlYWRzaW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGlwYy5jbGFzc2VzLnRocmVhZHNpbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3Qyw4Q0FBNkM7QUFFN0MsdUVBQTBEO0FBRTFEO0lBR0UsWUFBYSxXQUFtQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQTtJQUMvQixDQUFDO0lBRUQsR0FBRztRQUNELElBQUksUUFBUSxHQUFHLENBQUM7WUFDZCxFQUFFLENBQUMsQ0FBQyx3Q0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdDQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQzNELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQTtZQUN4QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUNKLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUE7SUFDaEMsQ0FBQztDQUNGO0FBbEJELG9DQWtCQyJ9