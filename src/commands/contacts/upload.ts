import { Command } from '@oclif/command';
import client from '@sendgrid/client';
import fs from 'fs-extra';
import chalk from 'chalk';
import { decryptApiKey } from '../../helpers/encrypt';
import { cli } from 'cli-ux';

export class UploadContacts extends Command {
  static description = '';

  static args = [
    {
      name: 'path',
    }
  ]

  async run() {
    const { args } = this.parse(UploadContacts);
    const data = await fs.readJSON(`${this.config.dataDir}/data.json`);

    if (!data.APIKEY) {
      console.log(`
      Set your SendGrid APIKEY first in order to use the CLI commands

      Try: ${chalk.green('apikey:set <SENDGRID_APIKEY>')}
      `);
      return false;
    }

    if (!args.path) {
      console.log(`
      Please provide a path to the JSON file containing your contacts for uploading
      `)
      return false;
    }


    client.setApiKey(decryptApiKey(data.APIKEY));

    console.log('');

    cli.action.start('Uploading new contacts');

    const [response] = await client.request({
      method: 'POST',
      url: '/v3/contactdb/recipients',
      body: await fs.readJSON(args.path)
    });

    cli.action.stop();

    console.log('');

    cli.table([response.body], {
      new_count: {
        header: 'New count',
        get: row => chalk.green(row.new_count)
      },
      updated_count: {
        header: 'Updated count',
        get: row => chalk.yellow(row.updated_count)
      },
      error_count: {
        header: 'Error count',
        get: row => chalk.red(row.error_count)
      },
    });

    console.log('');

    if (!response.body.errors.length) {
      return false;
    }

    console.log(`Message: ${chalk.green(response.body.errors[0].message)} @ Indices: ${chalk.green(response.body.errors[0].error_indices)}`);
  };
};``