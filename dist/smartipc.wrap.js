"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spawnWrap = require("spawn-wrap");
let unwrap = null;
exports.startSpawnWrap = (filePath, cliArgs = [], envArgs = {}) => {
    let spawnArray = [filePath];
    for (let cliArg of cliArgs) {
        spawnArray.push(cliArg);
    }
    unwrap = spawnWrap(spawnArray, envArgs);
};
exports.endSpawnWrap = () => {
    if (unwrap) {
        unwrap();
        unwrap = null;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMud3JhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0aXBjLndyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBdUM7QUFFdkMsSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFBO0FBRVgsUUFBQSxjQUFjLEdBQUcsQ0FBQyxRQUFnQixFQUFFLFVBQW9CLEVBQUUsRUFBRSxVQUFlLEVBQUU7SUFDdEYsSUFBSSxVQUFVLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUMzQixHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNCLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUNELE1BQU0sR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0FBQ3pDLENBQUMsQ0FBQTtBQUVVLFFBQUEsWUFBWSxHQUFHO0lBQ3hCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxNQUFNLEVBQUUsQ0FBQTtRQUNSLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDZixDQUFDO0FBQ0gsQ0FBQyxDQUFBIn0=