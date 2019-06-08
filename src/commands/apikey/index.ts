import { Command } from '@oclif/command';
import chalk from 'chalk';
import fs from 'fs-extra';


export class ApiKey extends Command {
  static description = 'Manage your SendGrid APIKEY';
  
  async run() {
    const data = await fs.readJSON(`${this.config.dataDir}/data.json`);

    if(data.APIKEY) {
      console.log(`
    You already have a SendGrid APIKEY set, so you can use some of the CLI commands

    You can find the commands by typing this command:

    ${chalk.green('sendgrid --help')}
      `);
    } else {
      console.log(`
    Set your SendGrid APIKEY first in order to use the CLI commands

    Try: ${chalk.green('apikey:set <SENDGRID_APIKEY>')}
    `);
    }
  }
};