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
        this.thread = plugins.threads.spawn(filePathArg);
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
exports.Thread = Thread;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy50aHJlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGlwYy5jbGFzc2VzLnRocmVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQTZDO0FBQzdDLDRCQUEyQjtBQUVoQixRQUFBLGlCQUFpQixHQUFHLENBQUMsV0FBbUI7SUFDL0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxXQUFXO1NBQ3BCO0tBQ0osQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBRUQ7SUFFSSxZQUFZLFdBQW1CO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxDQUFJLE9BQVk7UUFDaEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBSyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFVO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0NBQ0o7QUF0QkQsd0JBc0JDIn0=