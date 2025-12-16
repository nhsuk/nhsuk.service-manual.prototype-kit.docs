---
title: Updating to version 8
description: How to upgrade to version 8
---

> [!NOTE]
> Version 8 is still in beta. Follow this guide only if you are happy to test it and give feedback.

Version 8 of the NHS prototype kit contains some significant changes which will make it much easier for you to update your prototype in future.

However, to upgrade to version 8 from version 7 or below involves some manual steps.

Follow this guide:

### 1. Check which version of Node.js you are using.

Version 8 requires you to be using either Node 22 or Node 24.

You can check which version you are currently using by running this command in your terminal:

```bash
node --version
```

### 2. Edit the `package.json` file

Make these changes within the `dependencies` section:

Add this line:

- add `"nhsuk-prototype-kit": "8.0.0-beta.1",`

Remove these lines (the version numbers may be different):

- `"@inquirer/prompts": "^7.10.1",`
- `"body-parser": "^2.2.0",`
- `"browser-sync": "^3.0.4",`
- `"client-sessions": "^0.8.0",`
- `"cookie-parser": "^1.4.7",`
- `"dotenv": "^17.2.2",`
- `"express-session": "^1.18.2",`
- `"gulp": "^5.0.1",`
- `"gulp-babel": "^8.0.0",`
- `"gulp-clean": "^0.4.0",`
- `"gulp-clean-css": "^4.3.0",`
- `"gulp-nodemon": "^2.5.0",`
- `"gulp-rename": "^2.1.0",`
- `"gulp-sass": "^6.0.1",`
- `"lodash": "^4.17.21",`
- `"portscanner": "^2.2.0",`

Check the version number of `nhuk-frontend`. It should look like this:

```json
"nhsuk-frontend": "^10.2.0",
```

Update the `scripts` section of your `package.json` file to be this:

```json
"scripts": {
  "start": "node app.js"
}
```

### 2. Delete these folders and files

Delete these folders:

- `lib`
- `tests/lib`
- `docs` (if present)
- `middleware` (if present)

Delete these files:

- `gulpfile.js`

### 3. Edit your `app.js` file

Replace the entire contents of it with this:

```js
const express = require('express')
const NHSPrototypeKit = require('nhsuk-prototype-kit').default
const path = require('path')
const nunjucks = require('nunjucks')
const { join } = require('node:path')

// Local dependencies
const config = require('./app/config')
const locals = require('./app/locals')
const routes = require('./app/routes')
const filters = require('./app/filters')
const sessionDataDefaults = require('./app/data/session-data-defaults')

const SERVICE_NAME = config.serviceName

// Set configuration variables
const port = parseInt(process.env.PORT, 10) || 2000

// Initialise applications
const app = express()

// Add variables that are available in all views
app.locals.asset_path = '/public/'

// Nunjucks configuration for application
const appViews = [
  join(__dirname, 'app/views/'),
  join(__dirname, 'app/components/'),
  join(__dirname, 'node_modules/nhsuk-frontend/dist/nhsuk/components'),
  join(__dirname, 'node_modules/nhsuk-frontend/dist/nhsuk/macros'),
  join(__dirname, 'node_modules/nhsuk-frontend/dist/nhsuk'),
  join(__dirname, 'node_modules/nhsuk-frontend/dist')
]

let nunjucksAppEnv = nunjucks.configure(appViews, { express: app, noCache: true })

for (const [name, filter] of Object.entries(filters())) {
  nunjucksAppEnv.addFilter(name, filter)
}


// Use public folder for static assets
app.use(express.static(join(__dirname, 'public')))

// Use assets from NHS frontend
app.use(
  '/nhsuk-frontend',
  express.static(join(__dirname, 'node_modules/nhsuk-frontend/dist/nhsuk'))
)

const prototype = NHSPrototypeKit.init({
  serviceName: SERVICE_NAME,
  express: app,
  nunjucks: nunjucksAppEnv,
  routes: routes,
  locals: locals,
  sessionDataDefaults: sessionDataDefaults,
  buildOptions: {
    entryPoints: ['app/assets/sass/main.scss']
  }
})

prototype.start()
```

### 5. Run `npm install` in your terminal

The install may take up to a minute.

While installing it may `WARN` about some items -- this is okay. As long as there are no `ERRORs` you can continue.

You should see a message like this:

```shell
added 1251 packages, and audited 1252 packages in 7s

180 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
```

### 6. Start your local server

In your terminal, enter: <kbd>npm start</kbd>

After the kit has started, you should see a message telling you that the kit is running:

```shell
> node app.js

[Browsersync] Access URLs:
 -----------------------------------
    Local: http://localhost:2001
 External: http://192.168.1.247:2001
 -----------------------------------
[Browsersync] Watching files...
```

## Help and support

If you have any problems:

- ask a developer on your team (if you have one)
- email the service manual team at [england.service-manual.nhs.net](mailto:england.service-manual@nhs.net?subject=NHS%20prototype%20kit%20-%20Updating%20the%20kit)
- get in touch on the [NHS digital service manual #prototype-kit Slack channel](https://nhs-service-manual.slack.com/messages/CFYL2GDGW)
