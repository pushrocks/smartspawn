"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartipc.plugins");
class Pool {
    constructor() {
        this.pool = new plugins.threads.Pool();
    }
    run(workerPathArg) {
        return this.pool.run(workerPathArg);
    }
}
exports.Pool = Pool;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy5wb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRpcGMuY2xhc3Nlcy5wb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBRUU7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN4QyxDQUFDO0lBQ0QsR0FBRyxDQUFDLGFBQXFCO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0NBQ0Y7QUFSRCxvQkFRQyJ9