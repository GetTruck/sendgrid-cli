import { Command } from '@oclif/command';
import * as fs from 'fs-extra';

const removeApiKeyFromDataDir = (dataDir: string) => {
  return fs.writeFile(`${dataDir}/data.json`, JSON.stringify({
    APIKEY: null,
  }));
};

export class RemoveApiIKey extends Command {
  static description = 'Remove your Sendgrid API KEY';

  async run() {
    await removeApiKeyFromDataDir(this.config.dataDir);

    console.log(`
    APIKEY successfully removed ✨
    `);
  };
};
