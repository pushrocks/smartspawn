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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMud3JhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0aXBjLndyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBdUM7QUFFdkMsSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFBO0FBRVgsUUFBQSxjQUFjLEdBQUcsQ0FBQyxRQUFnQixFQUFFLFVBQW9CLEVBQUUsRUFBRSxVQUFlLEVBQUUsRUFBRSxFQUFFO0lBQzFGLElBQUksVUFBVSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDM0IsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzQixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFDRCxNQUFNLEdBQUcsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQTtBQUN6QyxDQUFDLENBQUE7QUFFVSxRQUFBLFlBQVksR0FBRyxHQUFHLEVBQUU7SUFDN0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sRUFBRSxDQUFBO1FBQ1IsTUFBTSxHQUFHLElBQUksQ0FBQTtJQUNmLENBQUM7QUFDSCxDQUFDLENBQUEifQ==