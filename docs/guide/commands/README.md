# Commands

Here is a comprehensive list of all the available commands for the SendGrid CLI and how to use them

+ [`apikey`](#apikey)
  * [`apikey:set`](#apikey-set)
  * [`apikey:remove`](#apikey-remove)

+ [`contacts`](#contacts)
  * [`contacts:upload`](#contacts-upload)

## apikey

### `apikey:set`

This command will log you into the SendGrid CLI

+ Arguments
  1. `APIKEY` - a SendGrid [API Key](https://app.sendgrid.com/settings/api_keys)

```bash
$ sendgrid apikey:set [APIKEY]
```

### `apikey:remove`

This command will remove the API key you used to log into the SendGrid CLI

```bash
$ sendgrid apikey:remove
```

## contacts

### `contacts:upload`

This command will upload a `.json` file with your contacts

+ Arguments
  1. `PATH` - a path to a `.json` file that follows `type Contacts[]` schema below

::: tip Contact Schema
```typescript
type Contact = {
  first_name: string;
  last_name: string;
  email: string;
}

type Contacts = Contact[]
```
:::

`contacts.json`

```json
[
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com"
  },
  ...
  ...
]
```

`SendGrid CLI`

```bash
$ sendgrid contacts:upload ./contacts.json
```