sendgrid-cli
============

A full-fledge CLI for SendGrid API

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/sendgrid-cli.svg)](https://npmjs.org/package/sendgrid-cli)
[![Downloads/week](https://img.shields.io/npm/dw/sendgrid-cli.svg)](https://npmjs.org/package/sendgrid-cli)
[![License](https://img.shields.io/npm/l/sendgrid-cli.svg)](https://github.com/Newsletters/sendgrid-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sendgrid-cli
$ sendgrid-cli COMMAND
running command...
$ sendgrid-cli (-v|--version|version)
sendgrid-cli/0.0.1 win32-x64 node-v10.13.0
$ sendgrid-cli --help [COMMAND]
USAGE
  $ sendgrid-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sendgrid-cli hello [FILE]`](#sendgrid-cli-hello-file)
* [`sendgrid-cli help [COMMAND]`](#sendgrid-cli-help-command)

## `sendgrid-cli hello [FILE]`

describe the command here

```
USAGE
  $ sendgrid-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ sendgrid-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/Newsletters/sendgrid-cli/blob/v0.0.1/src\commands\hello.ts)_

## `sendgrid-cli help [COMMAND]`

display help for sendgrid-cli

```
USAGE
  $ sendgrid-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src\commands\help.ts)_
<!-- commandsstop -->
