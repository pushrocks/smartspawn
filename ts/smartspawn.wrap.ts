import * as spawnWrap from 'spawn-wrap';

let unwrap: any = null;

export const startSpawnWrap = (filePath: string, cliArgs: string[] = [], envArgs: any = {}) => {
  let spawnArray = [filePath];
  for (let cliArg of cliArgs) {
    spawnArray.push(cliArg);
  }
  unwrap = spawnWrap(spawnArray, envArgs);
};

export const endSpawnWrap = () => {
  if (unwrap) {
    unwrap();
    unwrap = null;
  }
};
