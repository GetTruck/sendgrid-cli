# Introduction

Welcome to the **SendGrid CLI** :heart:

Are you tired of writing scripts all the time just to do something trivial like upload contacts to the _SendGrid Contact Database_? 

Well, you might have found the right tool to help you with those kinda tasks!

## Installation

::: warning COMPATIBILITY NOTE
SendGrid CLI requires Node.js >= 8.
:::

The installation is pretty simple

```bash
# install globally
yarn global add @gettruck/sendgrid-cli # OR npm install -g @gettruck/sendgrid-cli

# SendGrid CLI
$ sendgrid --help
```

Sweet! Now you have access to the `sendgrid` CLI 🙌

## Logging in

Now the next step is to log into the SendGrid CLI, you can do that by just using a **SendGrid API Key**

### How do i get an API Key?

1. Create a [SendGrid](https://app.sendgrid.com) account (if you don't have one)
2. Go to [API Keys](https://app.sendgrid.com/settings/api_keys) section
3. Generate an API Key (you can add restrictions)
4. Copy that API key and put it somewhere safe, as you can't access it again

Great stuff! Now you got the API key, let's log into the SendGrid CLI

Run the following command: `sendgrid apikey:set [APIKEY]`

```bash
$ sendgrid apikey:set <YOUR_SENDGRID_APIKEY>

  APIKEY successfully set ✨
```

Now you have access to the full suite of SendGrid CLI commands