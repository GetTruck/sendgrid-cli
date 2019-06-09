import { Command } from '@oclif/command';
import chalk from 'chalk';
import fs from 'fs-extra';
import { getDataFileLocation } from '../../helpers';
import { IdataFile } from '../../helpers/types';

const ifApikeyExistsMessage = () => console.log(`
  You already have a SendGrid APIKEY set, so you can use some of the CLI commands

  You can find the commands by typing this command:

  ${chalk.green('sendgrid --help')}
`);

const ifApikeyDoesNotExistMessage = () => console.log(`
  Set your SendGrid APIKEY first in order to use the CLI commands

  Try: ${chalk.green('apikey:set <SENDGRID_APIKEY>')}
`);

export class ApiKey extends Command {
  static description = 'Manage your SendGrid APIKEY';
  
  async run() {
    const dataFileLocation = getDataFileLocation(this.config);

    const data: IdataFile = await fs.readJSON(dataFileLocation);

    if (!data.APIKEY) {
      ifApikeyDoesNotExistMessage();
      return false;
    }

    ifApikeyExistsMessage();
  }
};