---
title: Updating the kit
description: Use the latest version of the NHS prototype kit.
redirectFrom:
 - /how-tos/updating-the-kit
 - /install/updating-to-version-8/
---

The way that you update the kit has recently changed.

If you are using version 8 of the kit or above, you can now update the kit by changing the version number in your `package.json` file and then running `npm install`.

If your version of the kit is version 7 or below, follow this upgrade guide.

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
  "nhsuk-prototype-kit": "^8.0.0"
}
```

> [!NOTE]
> If you are also using the [NHS App design system](https://design-system.nhsapp.service.nhs.uk), keep
> `nhsapp-frontend` within your `dependencies` section too.

In the `devDependencies` section, update the contents to:

```json
"devDependencies": {
}
```

Update the `scripts` section of your `package.json` file to:

```json
"scripts": {
  "start": "node ."
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
- `app/views/includes/scripts.html`
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

### 5. Edit your `devcontainer.json` file

If you have a file named `.devcontainer/devcontainer.json`, update the `postAttachCommand` line to this:

```json
  "postAttachCommand": {
    "server": "npm start"
  },
```

This will make sure that your prototype still works within GitHub Codespaces.

### 6. Edit your `app.js` file

Replace the entire contents of it with this:

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

> [!NOTE]
> If you are also using the [NHS App design system](https://design-system.nhsapp.service.nhs.uk), change your `viewsPath` to this:
>
> ```njk
> const viewsPath = [
>   'app/views/',
>   'node_modules/nhsapp-frontend/dist'
> ]
> ```

### 7. Run `npm install` in your terminal

The install may take up to a minute.

While installing it may `WARN` about some items -- this is okay. As long as there are no `ERRORs` you can continue.

You should see a message like this:

```shell
added 1251 packages, and audited 1252 packages in 7s

180 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
```

### 8. Edit your layout file

You should have a layout file named `app/layout.html`.

In that file, update the lines which references `block head` to this:

{% raw %}

```njk
{% block head %}
  <!-- Add your custom CSS or Sass in /app/assets/sass/main.scss -->
  <link href="/assets/sass/main.css" rel="stylesheet">
{% endblock %}
```

{% endraw %}

Update the section which references `block bodyEnd` to this:

{% raw %}

```njk
{% block bodyEnd %}
  {{ super() }}
  <script type="module" src="/assets/javascript/application.js"></script>
  {% block pageScripts %}{% endblock %}
{% endblock %}
```

{% endraw %}

If you have added any custom frontend JavaScript to your prototype, you will need to add references to it here too.

### 9. Start your local server

In your terminal, enter: <kbd>npm start</kbd>

After the kit has started, you should see a message telling you that the kit is running:

```shell
> node .

[Browsersync] Access URLs:
 -----------------------------------
    Local: http://localhost:3000
 External: http://192.168.1.247:3000
 -----------------------------------
[Browsersync] Watching files...
```

## Help and support

If you have any problems:

- ask a developer on your team (if you have one)
- email the service manual team at [england.service-manual.nhs.net](mailto:england.service-manual@nhs.net?subject=NHS%20prototype%20kit%20-%20Updating%20the%20kit)
- get in touch on the [NHS digital service manual #prototype-kit Slack channel](https://nhs-service-manual.slack.com/messages/CFYL2GDGW)
