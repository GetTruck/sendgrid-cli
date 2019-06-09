import { Command } from '@oclif/command';
import * as fs from 'fs-extra';
import { encryptApiKey } from '../../helpers/encrypt';
import chalk from 'chalk'
import { getDataFileLocation } from '../../helpers';

const checkApiKeyLength = (APIKEY: string) => {
  return APIKEY.length === 69;
};

const checkApiKeyPrefix = (APIKEY: string) => {
  return APIKEY.includes('SG');
};

const saveApiKeyToDataDir = (dataDir: string, APIKEY: string) => {
  return fs.writeJSON(dataDir, { APIKEY: encryptApiKey(APIKEY) });
};

const ifApikeyDoesNotExist = () => console.warn(`\nPlease provide a ${chalk.green('SendGrid APIKEY')}\n`);

const ifApikeyValidationFails = (APIKEY: string) => console.warn(`\n${chalk.white.bgRed(' ERROR ')} ${chalk.green(APIKEY)} is not a valid SendGrid APIKEY\n`); 

const ifApikeySavedSuccesffuly = () => console.log(`
  APIKEY successfully set ✨
`);

export class SetApiKey extends Command {
  static description = 'Set your Sendgrid API KEY';

  static args = [
    {
      name: 'APIKEY'
    }
  ];

  async run() {
    const { args: { APIKEY } } = this.parse(SetApiKey);

    if (!APIKEY) {
      ifApikeyDoesNotExist();
      return false;
    }

    if (!checkApiKeyPrefix(APIKEY) || !checkApiKeyLength(APIKEY)) {
      ifApikeyValidationFails(APIKEY);
      return false;
    }

    await saveApiKeyToDataDir(getDataFileLocation(this.config), APIKEY);
  };
};