import {Hook} from '@oclif/config'
import fs from 'fs-extra';
import { getDataFileLocation } from '../helpers';

export const hook: Hook<'init'> = async function (options) {
  const dataFileLocation = getDataFileLocation(this.config)

  if (await fs.pathExists(dataFileLocation)) {
    return false;
  }

  await fs.writeJSON(dataFileLocation, { APIKEY: null });
}