import {Hook} from '@oclif/config'
import fs from 'fs-extra';

export const hook: Hook<'init'> = async function (options) {
  if(!fs.pathExists(`${this.config.dataDir}/data.json`)) {
    return false;
  }

  await fs.writeJSON(`${this.config.dataDir}/data.json`, {});
}