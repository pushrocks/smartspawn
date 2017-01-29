"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy50aHJlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGlwYy5jbGFzc2VzLnRocmVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQTZDO0FBQzdDLDRCQUEyQjtBQUloQixRQUFBLGlCQUFpQixHQUFHLENBQUMsV0FBbUI7SUFDL0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxXQUFXO1NBQ3BCO0tBQ0osQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBRUQ7SUFLSSxZQUFZLFdBQW1CO1FBRi9CLFlBQU8sR0FBWSxLQUFLLENBQUE7UUFDeEIsaUJBQVksR0FBUyxJQUFJLENBQUE7UUFFckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUE7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxDQUFJLE9BQVk7UUFDaEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBSyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFVO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBVTtZQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUc7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUN4QixDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWE7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUE7SUFDL0IsQ0FBQztJQUVPLFVBQVU7UUFDZCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN4RCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN4RCxDQUFDO0lBQ0wsQ0FBQztDQUNKO0FBOUNELHdCQThDQyJ9