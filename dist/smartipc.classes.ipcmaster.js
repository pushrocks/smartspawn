"use strict";
const plugins = require("./smartipc.plugins");
const smartipc_classes_ipctarget_1 = require("./smartipc.classes.ipctarget");
let defaultOptions = {};
/**
 * class Ipcserve is represents the master process for any chil processes
 */
class IpcMaster extends smartipc_classes_ipctarget_1.IpcTarget {
    constructor(ipcOptionsArg) {
        super({ alias: 'master' });
        this.ipcOptions = plugins.lodash.merge({}, defaultOptions, ipcOptionsArg);
    }
    /**
     * spawns a child process
     */
    spawnProcess(filePath, alias) {
        let childProcess = plugins.childProcess.fork('ls', ['-lh', '/usr']);
        childProcess.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        childProcess.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });
        childProcess.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    }
}
exports.IpcMaster = IpcMaster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMuY2xhc3Nlcy5pcGNtYXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGlwYy5jbGFzc2VzLmlwY21hc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQTZDO0FBQzdDLDZFQUF3RDtBQU14RCxJQUFJLGNBQWMsR0FBcUIsRUFFdEMsQ0FBQTtBQVFEOztHQUVHO0FBQ0gsZUFBdUIsU0FBUSxzQ0FBUztJQUdwQyxZQUFZLGFBQStCO1FBQ3ZDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLGNBQWMsRUFBQyxhQUFhLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsUUFBZ0IsRUFBRSxLQUFhO1FBRXhDLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBRW5FLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUk7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUE7UUFFRixZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzlCLENBQUMsQ0FBQyxDQUFBO1FBRUYsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJO1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDckQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0o7QUEzQkQsOEJBMkJDIn0=