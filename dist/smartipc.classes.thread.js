"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartipc.plugins");
const q = require("smartq");
exports.setWorkerBasePath = (basePathArg) => {
    plugins.threads.config.set({
        basepath: {
            node: basePathArg
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy50aHJlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGlwYy5jbGFzc2VzLnRocmVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3Qyw0QkFBMkI7QUFJaEIsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLFdBQW1CO0lBQ2pELE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN6QixRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsV0FBVztTQUNsQjtLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQUVEO0lBS0UsWUFBWSxXQUFtQjtRQUYvQixZQUFPLEdBQVksS0FBSyxDQUFBO1FBQ3hCLGlCQUFZLEdBQVMsSUFBSSxDQUFBO1FBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFBO0lBQy9CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLENBQUksT0FBWTtRQUNsQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFLLENBQUE7UUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQVU7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFVO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUFJLE9BQU87UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBSyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUk7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxZQUFZLENBQUMsT0FBYTtRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQTtJQUM3QixDQUFDO0lBRU8sVUFBVTtRQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN0RCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN0RCxDQUFDO0lBQ0gsQ0FBQztDQUNGO0FBOURELHdCQThEQyJ9