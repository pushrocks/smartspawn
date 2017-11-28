"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartipc.plugins");
const q = require("smartq");
exports.workerBasePath = null;
exports.setWorkerBasePath = (basePathArg) => {
    exports.workerBasePath = basePathArg;
    plugins.threads.config.set({
        basepath: {
            node: exports.workerBasePath
        }
    });
};
class Thread {
    constructor(filePathArg) {
        this.running = false;
        this.assignedPool = null;
        this.workerPath = filePathArg;
    }
    /**
     * sends a message to the spawned process
     * spawns it and keeps running
     */
    send(message) {
        let done = q.defer();
        this.checkSpawn();
        this.thread.send(message);
        this.thread.on('message', (message) => {
            done.resolve(message);
        });
        this.thread.on('done', (job, message) => {
            done.resolve(message);
        });
        this.thread.on('error', err => {
            done.reject(err);
        });
        return done.promise;
    }
    /**
     * sends a command once and then kills the child process
     */
    sendOnce(message) {
        let done = q.defer();
        this.send(message).then(message => {
            done.resolve(message);
            this.kill();
        });
        return done.promise;
    }
    /**
     * kills the thread
     */
    kill() {
        this.thread.kill();
        this.running = false;
    }
    assignToPool(poolArg) {
        this.assignedPool = poolArg;
    }
    checkSpawn() {
        if (!this.running && !this.assignedPool) {
            this.running = true;
            this.thread = plugins.threads.spawn(this.workerPath);
        }
        else if (!this.running && this.assignedPool) {
            this.running = true;
            this.thread = this.assignedPool.run(this.workerPath);
        }
    }
}
exports.Thread = Thread;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy50aHJlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGlwYy5jbGFzc2VzLnRocmVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3Qyw0QkFBMkI7QUFJaEIsUUFBQSxjQUFjLEdBQVcsSUFBSSxDQUFBO0FBRTdCLFFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxXQUFtQixFQUFFLEVBQUU7SUFDckQsc0JBQWMsR0FBRyxXQUFXLENBQUE7SUFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3pCLFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxzQkFBYztTQUNyQjtLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQUVEO0lBS0UsWUFBWSxXQUFtQjtRQUYvQixZQUFPLEdBQVksS0FBSyxDQUFBO1FBQ3hCLGlCQUFZLEdBQVMsSUFBSSxDQUFBO1FBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFBO0lBQy9CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLENBQUksT0FBWTtRQUNsQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFLLENBQUE7UUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQVUsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBVSxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUFJLE9BQU87UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBSyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUN0QixDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWE7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUE7SUFDN0IsQ0FBQztJQUVPLFVBQVU7UUFDaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdEQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdEQsQ0FBQztJQUNILENBQUM7Q0FDRjtBQTlERCx3QkE4REMifQ==