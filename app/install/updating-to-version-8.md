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

In the `dependencies` section, update the contents to:

```json
"dependencies": {
  "nhsuk-frontend": "^10.2.2",
  "nhsuk-prototype-kit": "8.0.0-beta.4"
}
```

In the `devDependencies` section, update the contents to:

```json
"devDependencies": {
}
```

Update the `scripts` section of your `package.json` file to:

```json
"scripts": {
  "start": "node --watch app.js"
}
```

### 3. Delete these folders and files

Delete these folders:

- `lib`
- `tests/lib`
- `docs` (if present)
- `middleware` (if present)
- `.github/ISSUE_TEMPLATE`

Delete these files:

- `gulpfile.js`
- `app/assets/javascript/auto-store-data.js` (if present)
- `.babelrc`
- `.browserslistrc`
- `.prettierignore`
- `.prettierrc.js`
- `.github/workflows/pull-request.yml`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.gitpod.yml`
- `CONTRIBUTING.md`

### 4. Edit your `locals.js` file

Update the file to this:

```js
module.exports = function(req, res, next) {

  // You can set any additional local variables here.
  // These will be made available to any views
  //
  // For example:
  //
  // req.locals.organisationName = 'NHS'

  next()
}
```

If you had previously edited the file to set any local variables, copy the relevant lines back in to the file, above the `next()` line.

You no longer need to set the `serviceName` variable as this is done automatically.

### 5. Edit your `app.js` file

Replace the entire contents of it with this:

```js
const { join } = require('node:path')

const NHSPrototypeKit = require('nhsuk-prototype-kit')

// Local dependencies
const config = require('./app/config')
const sessionDataDefaults = require('./app/data/session-data-defaults')
const filters = require('./app/filters')
const locals = require('./app/locals')
const routes = require('./app/routes')

const SERVICE_NAME = config.serviceName

// Set configuration variables
const port = parseInt(process.env.PORT, 10) || 2000

const viewsPath = join(__dirname, 'app/views/')

const prototype = NHSPrototypeKit.init({
  serviceName: SERVICE_NAME,
  routes: routes,
  locals: locals,
  sessionDataDefaults: sessionDataDefaults,
  viewsPath: viewsPath,
  buildOptions: {
    entryPoints: ['app/assets/sass/main.scss']
  }
})

for (const [name, filter] of Object.entries(filters())) {
  prototype.nunjucks.addFilter(name, filter)
}

prototype.start(port)
```

### 6. Run `npm install` in your terminal

The install may take up to a minute.

While installing it may `WARN` about some items -- this is okay. As long as there are no `ERRORs` you can continue.

You should see a message like this:

```shell
added 1251 packages, and audited 1252 packages in 7s

180 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
```

### 7. Edit your layout file

In your `app/layout.html` file, update the the last part of the file which references `bodyEnd` to this:

{% raw %}

```njk
{% block bodyEnd %}
  <script type="module" src="/application.js"></script>
  {{ super() }}
{% endblock %}
```

{% endraw %}

If you have added any custom frontend JavaScript to your prototype, you will need to add references to it here too.

### 8. Start your local server

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
