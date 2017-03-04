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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy50aHJlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGlwYy5jbGFzc2VzLnRocmVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3Qyw0QkFBMkI7QUFJaEIsUUFBQSxjQUFjLEdBQVcsSUFBSSxDQUFBO0FBRTdCLFFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxXQUFtQjtJQUNqRCxzQkFBYyxHQUFHLFdBQVcsQ0FBQTtJQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDekIsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLHNCQUFjO1NBQ3JCO0tBQ0YsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBRUQ7SUFLRSxZQUFZLFdBQW1CO1FBRi9CLFlBQU8sR0FBWSxLQUFLLENBQUE7UUFDeEIsaUJBQVksR0FBUyxJQUFJLENBQUE7UUFFdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUE7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksQ0FBSSxPQUFZO1FBQ2xCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUssQ0FBQTtRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBVTtZQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQVU7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRLENBQUksT0FBTztRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFLLENBQUE7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUVELFlBQVksQ0FBQyxPQUFhO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFBO0lBQzdCLENBQUM7SUFFTyxVQUFVO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3RELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3RELENBQUM7SUFDSCxDQUFDO0NBQ0Y7QUE5REQsd0JBOERDIn0=