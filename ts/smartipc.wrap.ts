import * as spawnWrap from 'spawn-wrap'

let unwrap: any = null

export let startSpawnWrap = (filePath: string, cliArgs: string[] = [], envArgs: any = {}) => {
  let spawnArray = [filePath]
  for (let cliArg of cliArgs) {
    spawnArray.push(cliArg)
  }
  unwrap = spawnWrap(spawnArray, envArgs)
}

export let endSpawnWrap = () => {
  if (unwrap) {
    unwrap()
    unwrap = null
  }
}
