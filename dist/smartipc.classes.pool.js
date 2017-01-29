"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy5wb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRpcGMuY2xhc3Nlcy5wb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFFN0M7SUFFSTtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzFDLENBQUM7SUFDRCxHQUFHLENBQUMsYUFBcUI7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7Q0FDSjtBQVJELG9CQVFDIn0=