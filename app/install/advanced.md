---
title: Advanced install guide
description: A quick installation guide for those familiar with Node.js and prototyping in code.
order: 4
tags:
  - install-local
---

The kit is built on the [Express](http://expressjs.com/) framework, and uses [NHS frontend](https://github.com/nhsuk/nhsuk-frontend).

## Requirements

[Node.js](https://nodejs.org) version 22 or higher.

## Use the template repository

The simplest way to get the kit is to [use the template repository on GitHub](https://github.com/nhsuk/nhsuk-prototype-kit).

To do this, select the green ‘Use this template’ button instead of cloning or forking the template repository itself.

## Manual installation

Alternatively you can choose to install the kit manually by adding `nhsuk-prototype-kit` to your `package.json` file and running `npm install`.

This will install all required dependencies, including Express and NHS frontend.

To use the kit, you will then to create an `app.js` file like this:

```js
const NHSPrototypeKit = require('nhsuk-prototype-kit')

// Local dependencies
const config = require('./app/config')
const sessionDataDefaults = require('./app/data/session-data-defaults')
const filters = require('./app/filters')
const locals = require('./app/locals')
const routes = require('./app/routes')

const viewsPath = [
  'app/views/'
]

const entryPoints = [
  'app/assets/sass/main.scss',
  'app/assets/javascript/*.js'
]

async function init() {
  const prototype = await NHSPrototypeKit.init({
    serviceName: config.serviceName,
    buildOptions: {
      entryPoints
    },
    viewsPath,
    routes,
    locals,
    filters,
    sessionDataDefaults
  })

  prototype.start(config.port)
}

init()
```

## Run the kit

Start the kit by running:

<kbd>npm start</kbd>

Then go to [localhost:3000](http://localhost:3000) in your browser.
