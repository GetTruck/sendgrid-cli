import { Command } from '@oclif/command';
import * as fs from 'fs-extra';
import { encryptApiKey } from '../../helpers/encrypt';

const checkApiKeyLength = (APIKEY: string) => {
  if (APIKEY.length !== 69) {
    throw new Error('I don\'t think that is a SendGrid API KEY');
  };
};

const checkApiKeyPrefix = (APIKEY: string) => {
  if (!APIKEY.includes('SG')) {
    throw new Error('I don\'t think that is a SendGrid API KEY');
  };
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
    checkApiKeyPrefix(APIKEY);
    checkApiKeyLength(APIKEY);
    await saveApiKeyToDataDir(APIKEY, this.config.dataDir);

    console.log('APIKEY successfully set ✨');
  };
};