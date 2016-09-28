"use strict";
const smartipc_classes_ipctarget_1 = require("./smartipc.classes.ipctarget");
let defaultOptions = {};
/**
 * class Ipcclient represents the child process
 */
class IpcChild extends smartipc_classes_ipctarget_1.IpcTarget {
    constructor(optionsArg) {
        super({ alias: 'child' });
    }
    call(ipctarget, targetFunction, dataArg) {
    }
}
exports.IpcChild = IpcChild;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy5pcGNjaGlsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0aXBjLmNsYXNzZXMuaXBjY2hpbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDZFQUF3RDtBQU14RCxJQUFJLGNBQWMsR0FBK0IsRUFFaEQsQ0FBQTtBQUVEOztHQUVHO0FBQ0gsY0FBc0IsU0FBUSxzQ0FBUztJQUNuQyxZQUFZLFVBQXNDO1FBQzlDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFDRCxJQUFJLENBQUMsU0FBUyxFQUFDLGNBQWMsRUFBQyxPQUFPO0lBRXJDLENBQUM7Q0FDSjtBQVBELDRCQU9DIn0=