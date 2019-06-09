import { Command } from '@oclif/command';
import * as fs from 'fs-extra';
import { getDataFileLocation } from '../../helpers';

const removeApiKeyFromDataDir = (dataDir: string) => {
  return fs.writeJSON(dataDir, { APIKEY: null });
};

export class RemoveApiIKey extends Command {
  static description = 'Remove your Sendgrid API KEY';

  async run() {
    await removeApiKeyFromDataDir(getDataFileLocation(this.config));

    console.log(`
    APIKEY successfully removed ✨
    `);
  };
};
