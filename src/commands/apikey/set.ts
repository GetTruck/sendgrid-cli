import { Command } from '@oclif/command';
import * as fs from 'fs-extra';
import { encryptApiKey } from '../../helpers/encrypt';
import chalk from 'chalk'

const checkApiKeyLength = (APIKEY: string) => {
  return APIKEY.length === 69;
};

const checkApiKeyPrefix = (APIKEY: string) => {
  return APIKEY.includes('SG');
};


const saveApiKeyToDataDir = (APIKEY: string, dataDir: string) => {
  return fs.writeFile(`${dataDir}/data.json`, JSON.stringify({
    APIKEY: encryptApiKey(APIKEY),
  }));
};

export class SetApiKey extends Command {
  static description = 'Set your Sendgrid API KEY';

  static args = [
    {
      name: 'APIKEY'
    }
  ];

  async run() {
    const { args: { APIKEY } } = this.parse(SetApiKey);

    if(!APIKEY) {
      console.warn(`\nPlease provide a ${chalk.green('SendGrid APIKEY')}\n`);
      return false;
    }

    if (!checkApiKeyPrefix(APIKEY) || !checkApiKeyLength(APIKEY)) {
      console.warn(`\n${chalk.white.bgRed(' ERROR ')} ${chalk.green(APIKEY)} is not a valid SendGrid APIKEY\n`);
      return false;
    }

    await saveApiKeyToDataDir(APIKEY, this.config.dataDir);

    console.log(`
    APIKEY successfully set ✨
    `);
  };
};