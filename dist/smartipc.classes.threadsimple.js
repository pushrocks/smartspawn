"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartipc.plugins");
const smartq = require("smartq");
const childProcess = require("child_process");
const smartipc_classes_thread_1 = require("./smartipc.classes.thread");
class ThreadSimple {
    constructor(filePathArg, argvArgs = [], forkOptionsArg = {}) {
        this.workerPath = filePathArg;
        this.forkOptions = forkOptionsArg;
        this.argvArgs = argvArgs;
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
        this.threadChildProcess = childProcess.fork(forkPath, this.argvArgs, this.forkOptions);
        done.resolve(this.threadChildProcess);
        return done.promise;
    }
}
exports.ThreadSimple = ThreadSimple;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy50aHJlYWRzaW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGlwYy5jbGFzc2VzLnRocmVhZHNpbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QyxpQ0FBZ0M7QUFDaEMsOENBQTZDO0FBRTdDLHVFQUEwRDtBQUUxRDtJQUtFLFlBQWEsV0FBbUIsRUFBRSxXQUFxQixFQUFFLEVBQUUsaUJBQTJDLEVBQUU7UUFDdEcsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUE7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUE7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7SUFDMUIsQ0FBQztJQUVELEdBQUc7UUFDRCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxFQUE2QixDQUFBO1FBQ3BELElBQUksUUFBUSxHQUFHLENBQUM7WUFDZCxFQUFFLENBQUMsQ0FBQyx3Q0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdDQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQzNELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQTtZQUN4QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUNKLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7Q0FDRjtBQXhCRCxvQ0F3QkMifQ==