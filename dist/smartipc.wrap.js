"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spawnWrap = require("spawn-wrap");
let unwrap = null;
exports.startSpawnWrap = (filePath, cliArgs, envArgs) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRpcGMud3JhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0aXBjLndyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBdUM7QUFFdkMsSUFBSSxNQUFNLEdBQVEsSUFBSSxDQUFBO0FBRVgsUUFBQSxjQUFjLEdBQUcsQ0FBQyxRQUFnQixFQUFFLE9BQWlCLEVBQUUsT0FBWTtJQUM1RSxJQUFJLFVBQVUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDM0IsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQ0QsTUFBTSxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDekMsQ0FBQyxDQUFBO0FBRVUsUUFBQSxZQUFZLEdBQUc7SUFDeEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sRUFBRSxDQUFBO1FBQ1IsTUFBTSxHQUFHLElBQUksQ0FBQTtJQUNmLENBQUM7QUFDSCxDQUFDLENBQUEifQ==